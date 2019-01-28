# File Fields

[[toc]]



## محل ذخیره 

بصورت پیشفرض  محل ذخیره رو ‍**public** هست برای تغیر می توانید از روش زیر استفاده کنید:
 
```php
use KarimQaderi\Zoroaster\Fields\File;
use KarimQaderi\Zoroaster\Fields\Image;

File::make('عکس','photo')->disk('public')

// OR

Image::make('عکس','photo')->disk('public')
```

## مسیر ذخیره 

مشخصی کردن مسیر ذخیره فایل :

```php
use KarimQaderi\Zoroaster\Fields\File;
use KarimQaderi\Zoroaster\Fields\Image;

File::make('عکس' , 'photo')
    ->path(function()
    {
        return 'posts' . '/' . now()->year . '/' . now()->month;
    })
    
// OR

Image::make('عکس' , 'photo')
    ->path(function()
    {
        return 'posts' . '/' . now()->year . '/' . now()->month;
    })
```

## تغیر نام فایل 

در مثال زیر اسم فایل رو گرفته و یه time بهش اضافه کردن :

```php
use KarimQaderi\Zoroaster\Fields\File;
use KarimQaderi\Zoroaster\Fields\Image;

File::make('فایل' , 'file')
    ->storeOriginalName(function($file)
    {
        return time() . '-' . $file->getClientOriginalName();
    })
    
// OR

Image::make('عکس' , 'photo')
    ->storeOriginalName(function($file)
    {
        return time() . '-' . $file->getClientOriginalName();
    })
```