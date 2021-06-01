<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210601081640 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE task ADD is_active TINYINT(1) DEFAULT \'0\' NOT NULL, DROP updated_at, CHANGE is_finished is_finished TINYINT(1) DEFAULT \'0\' NOT NULL');
        $this->addSql('ALTER TABLE todo_list DROP updated_at');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE task ADD updated_at DATETIME DEFAULT NULL, DROP is_active, CHANGE is_finished is_finished TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE todo_list ADD updated_at DATETIME DEFAULT NULL');
    }
}
