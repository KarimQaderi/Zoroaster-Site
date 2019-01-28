# فیلدها

[[toc]]

## توضیع
در این بخش قرار نحویه ساخت فیلد رو برای شما آموزش بدم.

قرار اموزش ساخت یه فیلد رنگ رو آموزش بدم.

## تعریف فیلد

```php
php artisan Zoroaster:field ColorPicker
```
حالا به این ادرس  `app/Zoroaster/Fields` برید فایل خود رو باز کنید.

با همچین کدی رو به رو می شید.

که دارای 3 تا view هست که هر کدومشون مربوط به صفحه خودش هست.

```php
<?php

    namespace App\Zoroaster\Fields;

    use KarimQaderi\Zoroaster\Fields\Extend\Field;
    use KarimQaderi\Zoroaster\Fields\Traits\Resource;

    class ColorPicker extends Field
    {
         use Resource;
         
       /**
        * @param Field $field
        * @param $data
        * @param null $resourceRequest
        * @return \Illuminate\View\View
        */
       public function viewForm($field , $data , $resourceRequest = null)
       {
           return view('fields.ColorPicker.Form')->with(
               [
                   'field' => $field ,
                   'data' => $data ,
                   'value' => isset($data->{$field->name}) ? $data->{$field->name} : null ,
                   'resourceRequest' => $resourceRequest ,
               ]);
       }
       
       /**
        * @param Field $field
        * @param $data
        * @param null $resourceRequest
        * @return \Illuminate\View\View
        */
       public function viewDetail($field , $data , $resourceRequest = null)
       {
           return view('fields.ColorPicker.Detail')->with(
               [
                   'field' => $field ,
                   'data' => $data ,
                   'value' => $this->displayCallback($data , $resourceRequest , $field) ,
                   'resourceRequest' => $resourceRequest ,
               ]);
       }
       
       /**
        * @param Field $field
        * @param $data
        * @param null $resourceRequest
        * @return \Illuminate\View\View
        */
       public function viewIndex($field , $data , $resourceRequest = null)
       {
           return view('fields.ColorPicker.Index')->with(
               [
                   'field' => $field ,
                   'data' => $data ,
                   'value' => $this->displayCallback($data , $resourceRequest , $field) ,
                   'resourceRequest' => $resourceRequest ,
               ]);
       }
       
       public function displayCallback($data , $resourceRequest , $field)
       {
           if(is_callable($field->displayCallback))
               return call_user_func($field->displayCallback , $data , $resourceRequest , $field);

           return data_get($data , $field->name);
       }
    }
```

### viewForm
مربوط به صفحه اضافه و آپدیت کردن **resource** هست.
به ادرس `resources/views/fields/ColorPicker` برید و فایل `Form.blade.php` رو باز کنید.
کد زیر رو قرار بدید

```blade
<label>
    <span class="label">{{ $field->label }}</span>
    <input class="uk-input" name="{{ $field->name }}" type="color" value="{{  $value }}">
</label>
```

### viewIndex
مربوط به صفحه اصلی  **resource** هست.
به ادرس `resources/views/fields/ColorPicker` برید و فایل `Index.blade.php` رو باز کنید.
کد زیر رو قرار بدید

```blade
<label>
    <span class="label">{{ $field->label }}</span>
    <div class="body">{{ $value }}</div>
</label>
```

### viewDetail
مربوط به صفحه نمایش **resource**  هست.
به ادرس `resources/views/fields/ColorPicker` برید و فایل `Detail.blade.php` رو باز کنید.
کد زیر رو قرار بدید

```blade
{{ $value }}
```

## ثبت فیلد

اضافه کردن فیلد به resource :

```php
use App\Zoroaster\Fields\ColorPicker;

/**
 *  گرفتن فیلدها برای نمایش دادها
 *
 * @return array
 */
public function fields()
{
    return [
        ID::make('ID', 'id')->sortable(),
        
        ColorPicker::make('رنگ','color'),
    ];
}
```
