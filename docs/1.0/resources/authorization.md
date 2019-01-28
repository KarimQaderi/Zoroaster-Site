# Authorization

[[toc]]



## Policies

برای درک بیشتر و نحوه استفاده به مستندات لاراول مراجعه کنید [authorization policies](https://laravel.com/docs/authorization#creating-policies)

method های قابل استفاده :

- `index`
- `show`
- `create`
- `update`
- `delete`
- `restore`
- `forceDelete`


```php
<?php

namespace App\Policies;

use App\User;
use App\Post;
use Illuminate\Auth\Access\HandlesAuthorization;

class PostPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can update the post.
     *
     * @param  \App\User  $user
     * @param  \App\Post  $post
     * @return mixed
     */
    public function update(User $user, Post $post)
    {
        return $user->type == 'editor';
    }
}
```


## Fields

```php
use KarimQaderi\Zoroaster\Fields\ID;
use KarimQaderi\Zoroaster\Fields\Text;

/**
 * گرفتن فیلدها برای نمایش دادها
 *
 * @return array
 */
public function fields()
{
    return [
        ID::make()->sortable(),

        Text::make('نام','name')
                ->canSee(function ($request) {
                    return $request->user()->can('viewProfile');
                }),
    ];
}
```


## Index Filtering

اعمال query برای صغحه index برای `resource` در مسیر `App\Zoroaster\Resources` :

```php
/**
 * index صفحه برای query اعمال
 *
 * @param  \Illuminate\Database\Eloquent\Builder $query
 * @return \Illuminate\Database\Eloquent\Builder
 */
public static function indexQuery($query)
{
    return $query->where('user_id', auth()->id());
}
```
