# Relationships

[[toc]]

## BelongsTo


```php
use KarimQaderi\Zoroaster\Fields\BelongsTo;

BelongsTo::make('نام کاربر' , 'user_id' , 'App\User' , 'user')
                                    ->display('name')
```
