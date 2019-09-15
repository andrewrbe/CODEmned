<?php

use yii\db\Migration;

/**
 * Class m190914_131927_init
 */
class m190914_131927_init extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {

    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m190914_131927_init cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m190914_131927_init cannot be reverted.\n";

        return false;
    }
    */
}
