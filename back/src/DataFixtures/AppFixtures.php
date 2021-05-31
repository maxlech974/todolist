<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Nelmio\Alice\Loader\NativeLoader;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $em)
    {
        $loader = new NativeLoader();
        
        $entities = $loader->loadFiles([
            __DIR__.'/users.yml',
            __DIR__.'/todolists.yml',
            __DIR__.'/tasks.yml'
            ])->getObjects();
        
        foreach ($entities as $entity) {
            $em->persist($entity);
        };
        
        $em->flush();
    }
}
