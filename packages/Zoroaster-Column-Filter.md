---
layout: LayoutPackage
date: 2019/01/29
tags: ["filter", "column-filter"]
authorName: Karim Qaderi 
authorUrl: https://github.com/KarimQaderi
packageUrl: https://github.com/KarimQaderi/Zoroaster-Column-Filter
title: Column Filter
description:  فیلتر گذاری رو ستون
---

## Column Filter

![](https://raw.githubusercontent.com/KarimQaderi/Zoroaster-Column-Filter/master/1.png)

## نصب 

فایل composer.json باز کنید و کد زیر رو قرار دهید :

```json
    "require": {
        "karim-qaderi/zoroaster-column-filter": "*"
    },
    "repositories": [
        {
            "type": "git",
            "url": "https://github.com/KarimQaderi/Zoroaster-Column-Filter.git"
        }
    ],
```

```bash
composer update
```


## استفاده 


```shell 
 php artisan Zoroaster:filter ColumnFilter 
 ```


```php
<?php

    namespace App\Zoroaster\Filters;

    use KarimQaderi\ZoroasterColumnFilter\ColumnFilter as Filter;

    class ColumnFilter extends Filter
    {
        public $label="فیلتر ستون";
        
        public function columns()
        {
            return [
                ''=>'—',
                'id'=>'ID',
                'title'=>'عنوان',
            ];
        }

    }
```
