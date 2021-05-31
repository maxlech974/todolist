<?php

namespace App\Doctrine;

use ApiPlatform\Core\Bridge\Doctrine\Orm\Extension\QueryCollectionExtensionInterface;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Extension\QueryItemExtensionInterface;
use Doctrine\ORM\QueryBuilder;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Util\QueryNameGeneratorInterface;
use App\Entity\Company;
use App\Entity\Project;
use App\Entity\Task;
use App\Entity\Ticket;
use App\Entity\TimeSession;
use App\Entity\User;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Request;

class CurrentUserExtension implements QueryCollectionExtensionInterface, QueryItemExtensionInterface
{
    public function __construct(private Security $security)
    {}

    public function applyToCollection(
        QueryBuilder $queryBuilder,
        QueryNameGeneratorInterface $queryNameGenerator, 
        string $resourceClass, 
        ?string $operationName = null)
    {
        $this->addWhere($resourceClass, $queryBuilder, TimeSession::class);
        $this->addWhere($resourceClass, $queryBuilder, Project::class);
        $this->addWhereifUsers($resourceClass, $queryBuilder, Company::class);
        $this->user($resourceClass, $queryBuilder);
    }
    
    public function applyToItem(
        QueryBuilder $queryBuilder, 
        QueryNameGeneratorInterface $queryNameGenerator, 
        string $resourceClass, 
        array $identifiers, 
        ?string $operationName = null, 
        array $context = []
        )
    {
        
        $this->tasksByTodoList($resourceClass, $queryBuilder, Task::class, $identifiers['id']);
        // $this->addWhere($resourceClass, $queryBuilder, Project::class);
        // $this->addWhereifUsers($resourceClass, $queryBuilder, Company::class);
        // $this->user($resourceClass, $queryBuilder);
    }


    private function tasksByTodoList(string $resourceClass, QueryBuilder $queryBuilder, $classToTest, int $id)
    {
        if ($resourceClass == $classToTest) {
            $alias = $queryBuilder->getRootAliases()[0];
            $queryBuilder
            ->andWhere("$alias.todoList = :current_todoList")
            ->setParameter('current_todoList', $id);
        }
    }
}