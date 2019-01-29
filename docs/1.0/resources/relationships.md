# Relationships

[[toc]]

## BelongsTo


```php
use KarimQaderi\Zoroaster\Fields\BelongsTo;

BelongsTo::make('نام کاربر' , 'user_id' , 'App\User' , 'user')
                                    ->display('name')
```

| پارامتر ها | توضیع | مقدار `مثال` |
| ------ | ------ | ------ |
| label | نام فارسی فیلد | نام کاربر |
| name | نام فیلد در دیتابیس | user_id |
| Model | ادرس | App\User |
| Relation | نام Relation در model | user |