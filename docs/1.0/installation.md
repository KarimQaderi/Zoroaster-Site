# نصب و راه اندازی 

[[toc]]

## مورد نیاز 

قبل از شروع مطمئن شوید موارد زیر نصب هستند :

-   Composer
-   Laravel Framework 5.6+

## پشتیبانی مرورگر 

زرتشت رو مروگر های زیر بدون مشکل اجرا می شه :

-   Google Chrome
-   Firefox
-   Microsoft Edge

## مشخصات دیتابیس 
به داخل فایل `.env` برید و مشخصات دیتابیس خود رو وارد کنید:

```text
APP_URL=http://localhost:8000
DB_HOST=localhost
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
```
## نصب زرتشت 

 فایل `composer.json` باز کنید و کد زیر رو قرار دهید

```json
"repositories": [
        {
            "type": "git",
            "url": "https://github.com/KarimQaderi/Zoroaster.git"
        }
],
```

بعد `karim-qaderi/zoroaster` رو اضافه کنید به قسمت `require` در فایل `composer.json` : ‍‍‍‍‍‍

```json
"require": {
    "php": "^7.1.3",
    "fideloper/proxy": "^4.0",
    "laravel/framework": "5.7.*",
    "karim-qaderi/zoroaster": "*"
},
```

 حالا terminal رو باز کنید و `composer update` اجرا کنید :

```bash
composer update
```
و در آخر  `Zoroaster:install` رو اجرا کنید در terminal :

```bash
php artisan Zoroaster:install
php artisan migrate
php artisan storage:link
```
::: danger
**Specified key was too long error**  
اگر با همچین خطای رو به رو شدید به این قسمت مراجعه کنید: [https://laravel-news.com/laravel-5-4-key-too-long-error](https://laravel-news.com/laravel-5-4-key-too-long-error)
:::


بصورت پیشفرض زرتشت  `App\User` Model رو برای Resource قرار داد شده برای تغیر به Resource رفته و بصورت زیر اقدام به تغیر Model کنید :

```php
public static $model = 'App\\Models\\User';
```

ادرس پنل ادمین `http://127.0.0.1:8000/Zoroaster  ` هست


اگر هیچ کاربری رو در داخل جدول `users` ندارید در terminal با وارد کردن کد زیر یک کاربر بسازید :

```bash
php artisan Zoroaster:user
```

## سطع دسترسی کلی 

به طور پیش فرض، هر کاربری می تواند به داشبورد زرتشت وارد شود .
برای اینکه سطع دسترسی رو بزارید فایل `app/Providers/ZoroasterServiceProvider.php` رو باز کنید کد زیر رو در `boot` قرار دهید. 

```php
/**
 * Bootstrap any application services.
 *
 * @return void
 */
protected function boot()
{
    Gate::define('Zoroaster', function ($user) {
        return in_array($user->email, [
            'karimqaderi1@gmail.com',
        ]);
    });
}
```

##  آپدیت کردن زرتشت 

فقط کافیه `composer update` رو اجرا کنید .

```bash
composer update
```

## ارسال گزارش خطا 

 [Zoroaster issues GitHub repository](https://github.com/KarimQaderi/zoroaster-docs/issues).
