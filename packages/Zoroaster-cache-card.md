---
layout: LayoutPackage
date: 2019/01/29
tags: ["card", "cache-management","dashboard"]
authorName: Karim Qaderi 
authorUrl: https://github.com/KarimQaderi
packageUrl: https://github.com/KarimQaderi/Zoroaster-cache-card
title: Cache Management
description:  خالی کردن کش
---


## Cache Management

![](https://raw.githubusercontent.com/KarimQaderi/Zoroaster-cache-card/master/1.png)

## نصب 

فایل composer.json باز کنید و کد زیر رو قرار دهید :

```json
    "require": {
        "karim-qaderi/zoroaster-cache-card": "*"
    },
    "repositories": [
        {
            "type": "git",
            "url": "https://github.com/KarimQaderi/Zoroaster-cache-card.git"
        }
    ],
```

```bash
composer update
```

## استفاده 

```php
// in app\Zoroaster\Other\Dashboard.php

// ...

public function handle()
{
    return [
        // ...
        new \KarimQaderi\ZoroasterCacheCard\CacheCard(),
    ];
}
```
