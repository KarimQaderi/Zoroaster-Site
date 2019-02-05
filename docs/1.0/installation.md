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

 حالا terminal رو باز کنید و کدهای زیر رو اجرا کنید :

```bash
composer require karim-qaderi/zoroaster
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

## سطح دسترسی کلی 

به طور پیش فرض، هر کاربری می تواند به داشبورد زرتشت وارد شود .
برای اینکه سطح دسترسی رو بزارید فایل `app/Providers/ZoroasterServiceProvider.php` رو باز کنید کد زیر رو در `boot` قرار دهید. 

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

## فعال کردن resource مجوزها 

با فعال کردن این شما می توانید مشخص کنید هر کاربر چه مجوزهای داشته باشه.

```bash
php artisan Zoroaster:Permission
```

حالا به Model User رفته و کد زیر را قرار بدید.

```php
<?php

    namespace App;

    use KarimQaderi\Zoroaster\Traits\HasPermissions;

    class User extends Authenticatable
    {
        use HasPermissions;
    }
```

وقتی کارهای بالا رو انجام دادید برای اینکه مجوز برای کاربر ادمین بسازید از کد پایین استفاده کنید.

اگر کاربر از قبل وجود داشت براتون اپدیت می کنه وگرنه کاربر رو براتون می سازه.


```bash
php artisan Zoroaster:admin
```

حالا شما الان باید بتونید وارد قسمت ادمین بشید.

حالا به این مسیر برید `app/Zoroaster/Resources/User.php` و این فیلد رو قرار بدید.

```php
use KarimQaderi\Zoroaster\Fields\Select;
use KarimQaderi\Zoroaster\Models\Role;

public function fields()
{
    return [
           Select::make('role_id' , 'role_id')->options(Role::all()->pluck('name','id')),
    ]
}
```

یا می توانید کل کد پایین رو جایگزین کنید:
```php
<?php

    namespace App\Zoroaster\Resources;
    
    use Illuminate\Database\Eloquent\Model;
    use KarimQaderi\Zoroaster\Abstracts\ZoroasterResource;
    use KarimQaderi\Zoroaster\Fields\btnSave;
    use KarimQaderi\Zoroaster\Fields\Group\Col;
    use KarimQaderi\Zoroaster\Fields\Group\Panel;
    use KarimQaderi\Zoroaster\Fields\Group\Row;
    use KarimQaderi\Zoroaster\Fields\Group\RowOneColBg;
    use KarimQaderi\Zoroaster\Fields\ID;
    use KarimQaderi\Zoroaster\Fields\Password;
    use KarimQaderi\Zoroaster\Fields\Select;
    use KarimQaderi\Zoroaster\Fields\Text;
    use KarimQaderi\Zoroaster\Models\Role;


    class User extends ZoroasterResource
    {

        /**
         * مربوطه Model نام
         *
         * @var Model
         */
        public static $model = 'App\\User';

        /**
         * دادن نمایش برای پیشفرض فیلد نام
         *
         * @var string
         */
        public $title = 'name';

        /**
         * جمع بصورت Resource نام
         *
         * مثال : ها پست
         *
         * @var string
         */
        public $label = 'کاربران';

        /**
         * فرد بصورت Resource نام
         *
         * مثال : پست
         *
         * @var string
         */
        public $singularLabel = 'کاربر';

        /**
         * جستحو قابل های فیلد
         *
         * @var array
         */
        public $search = [
            'name' , 'id' ,
        ];

        /**
         * دادها نمایش برای فیلدها گرفتن
         *
         * @return array
         */
        public function fields()
        {
            return [

                new Row([
                    new Col('uk-width-2-3' , [
                        new Panel('' , [
                            ID::make()->rules('required')->onlyOnIndex()->sortable() ,
                            Text::make('نام' , 'name')->rules('required') ,
                            Password::make('رمز کاربر' , 'password')->help('برای تغیر نکردن رمز کادر را خالی بزارید') ,
                            Text::make('ایمیل' , 'email')->rules('required' , 'max:255') ,
                        ]) ,
                    ]) ,

                    new Col('uk-width-1-3' , [
                        new Panel('مشخصات' , [
                            Select::make('role_id' , 'role_id')->options(Role::all()->pluck('name','id')) ,
                            Text::make('created_at' , 'created_at') ,
                        ]) ,

                        new RowOneColBg([
                            btnSave::make() ,
                        ]) ,
                    ]) ,
                ]) ,

            ];
        }

        /**
         * فیلترها
         *
         * @return array
         */
        public function filters()
        {
            return[];
        }

    }
```


##  آپدیت کردن زرتشت 

فقط کافیه `composer update` رو اجرا کنید .

```bash
composer update
```

## ارسال گزارش خطا 

 [Zoroaster issues GitHub repository](https://github.com/KarimQaderi/zoroaster-docs/issues).
