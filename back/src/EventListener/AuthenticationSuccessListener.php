<?php

namespace App\EventListener;

use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;
use Symfony\Component\Security\Core\User\UserInterface;

class AuthenticationSuccessListener
{
    public function onAuthenticationSuccessResponse(AuthenticationSuccessEvent $event)
    {
        $data = $event->getData();
        $user = $event->getUser();
        
        if (!$user instanceof UserInterface) {
            return;
        }
    
        $data['userInfo'] = array(
            'username' => $user->getUsername(),
            'roles' => $user->getRoles(),
        );

        $event->setData($data);
    }
}

?>