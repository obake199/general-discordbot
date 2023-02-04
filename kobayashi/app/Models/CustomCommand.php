<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomCommand extends Model
{
    protected $table = 'custom_command';
    protected $fillable = [
        'command',
        'value'
    ];
}
