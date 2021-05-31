<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\TaskRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=TaskRepository::class)
 */
#[ApiResource()]
class Task
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    #[Groups(['todo:read'])]
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    #[Groups(['todo:read'])]
    private $name;

    /**
     * @ORM\Column(type="boolean")
     */
    #[Groups(['todo:read'])]
    private $isFinished;

    /**
     * @ORM\Column(type="datetime")
     */
    #[Groups(['todo:read'])]
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    #[Groups(['todo:read'])]
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=TodoList::class, inversedBy="tasks")
     * @ORM\JoinColumn(nullable=false)
     */
    private $todoList;

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

    public function getIsFinished(): ?bool
    {
        return $this->isFinished;
    }

    public function setIsFinished(bool $isFinished): self
    {
        $this->isFinished = $isFinished;

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

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getTodoList(): ?TodoList
    {
        return $this->todoList;
    }

    public function setTodoList(?TodoList $todoList): self
    {
        $this->todoList = $todoList;

        return $this;
    }
}
