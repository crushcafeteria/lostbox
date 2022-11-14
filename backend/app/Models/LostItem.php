<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class LostItem extends Model
{
    protected $guarded = ['id', 'created_at'];
    protected $table = 'lost_items';
    protected $casts = [
        'location' => 'array'
    ];
    protected $appends = ['created_at_formatted'];

    function getCreatedAtFormattedAttribute()
    {
        return Carbon::parse($this->attributes['created_at'])->diffForHumans(null, true, true);
    }
}
