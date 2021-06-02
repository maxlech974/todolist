<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\TodoListRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TodoListRepository::class)
 */
//dans les context de normalization, je veux pouvoir avoir accès à toutes mes tâches en optimisant ma requête.
#[ApiResource(
    collectionOperations: [
        'get' => ['normalization_context' => ['groups' => ['list']],
        'post'
        ],
    ],
    itemOperations: [
        'get' => ['normalization_context' => ['groups' => ['todo:read']]],
        'put',
        'delete' => ['security' => 'object.user == user']
    ]
)]
class TodoList
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    #[Groups(['list', 'todo:read'])]
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    #[Groups(['list', 'todo:read'])]
    private $name;

    /**
     * @ORM\Column(type="datetime")
     */
    #[Groups(['list'])]
    private $createdAt;

    /**
     * @ORM\OneToMany(targetEntity=Task::class, mappedBy="todoList", orphanRemoval=true)
     */
    #[Groups(['todo:read'])]
    private $tasks;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="todoLists")
     * @ORM\JoinColumn(nullable=false)
     */
    #[Groups(['list'])]
    private $user;

    public function __construct()
    {
        $this->tasks = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * @return Collection|Task[]
     */
    public function getTasks(): Collection
    {
        return $this->tasks;
    }

    public function addTask(Task $task): self
    {
        if (!$this->tasks->contains($task)) {
            $this->tasks[] = $task;
            $task->setTodoList($this);
        }

        return $this;
    }

    public function removeTask(Task $task): self
    {
        if ($this->tasks->removeElement($task)) {
            // set the owning side to null (unless already changed)
            if ($task->getTodoList() === $this) {
                $task->setTodoList(null);
            }
        }

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }
}
