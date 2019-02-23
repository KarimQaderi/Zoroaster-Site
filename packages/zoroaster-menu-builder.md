---
layout: LayoutPackage
date: 2019/01/29
tags: ["resource", "menu"]
authorName: Karim Qaderi 
authorUrl: https://github.com/KarimQaderi
packageUrl: https://github.com/KarimQaderi/Zoroaster-Menu-Builder
title: Menu Builder
description:  برای ساخت منو می توانید ازش استفاده کنید
---

## Zoroaster Menu Builder

![Zoroaster Menu Builder](https://raw.githubusercontent.com/KarimQaderi/Zoroaster-Menu-Builder/master/img/img.png)



## نصب 
 
 کدای زیر رو به ترتیب اجرا کنید :

```bash
composer require karim-qaderi/zoroaster-menu-builder

php artisan vendor:publish --tag=menu-builder-migration
php artisan migrate

php artisan vendor:publish --tag=menu-builder-assets
```
## توجه 

اگر Resource مجوزها رو فعال کردید باید کد زیر رو هم بعد از کدهای بالا اجرا کنید.

```bash
php artisan Zoroaster:admin
```


## Helper Function

```php
{!! menu_builder('main') !!}

//or

{!! menu_builder('main', 'parent-class', 'child-class', 'dl', 'dd') !!}
```

```php
{!! menu_json('main') !!}
```



## سطح دسترسی کلی 

برای اینکه سطح دسترسی رو بزارید فایل `app/Providers/ZoroasterServiceProvider.php` رو باز کنید کد زیر رو در `boot` قرار دهید. 

```php
/**
 * Bootstrap any application services.
 *
 * @return void
 */
protected function boot()
{
    Gate::define('ZoroasterMenuBuilder', function ($user) {
        return in_array($user->email, [
            'karimqaderi1@gmail.com',
        ]);
    });
}
```


