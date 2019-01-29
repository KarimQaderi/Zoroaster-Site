---
layout: LayoutPackage
date: 2019/01/29
tags: ["resource", "zoroaster-backup-tool","backup"]
authorName: Karim Qaderi 
authorUrl: https://github.com/KarimQaderi
packageUrl: https://github.com/KarimQaderi/Zoroaster-backup-tool
title: backup tool
description: پشتیبان گیری از دیتابیس و پایگاه داده
---

## backup your application

![](https://raw.githubusercontent.com/KarimQaderi/Zoroaster-backup-tool/master/1.png)

## نصب 

فایل composer.json باز کنید و کد زیر رو قرار دهید :

```json
    "require": {
        "karim-qaderi/zoroaster-backup-tool": "*"
    },
    "repositories": [
        {
            "type": "git",
            "url": "https://github.com/KarimQaderi/Zoroaster-backup-tool.git"
        }
    ],
```

```bash
composer update
```



## سطع دسترسی 

برای اینکه سطع دسترسی رو بزارید فایل `app/Providers/ZoroasterServiceProvider.php` رو باز کنید کد زیر رو در `boot` قرار دهید. 

```php
/**
 * Bootstrap any application services.
 *
 * @return void
 */
protected function boot()
{
    Gate::define('Zoroaster-backup-tool', function ($user) {
        return in_array($user->email, [
            'karimqaderi1@gmail.com',
        ]);
    });
}
```