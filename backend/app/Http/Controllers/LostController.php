<?php

namespace App\Http\Controllers;

use App\Http\Requests\LostItemRequest;
use App\Models\LostItem;

class LostController extends Controller
{
    function list()
    {
        $items = LostItem::orderBy('created_at', 'desc')->paginate(8);

        return response()->json($items);
    }

    function store(LostItemRequest $request)
    {
        $fields = $request->only([
            'type', 'name', 'email', 'category', 'location', 'description'
        ]);
        $fields['location'] = ['location' => $fields['location']];

        $item = LostItem::create($fields);

        return response()->json($item->toArray());
    }

    function find($id)
    {
        return LostItem::findOrFail($id);
    }
}
