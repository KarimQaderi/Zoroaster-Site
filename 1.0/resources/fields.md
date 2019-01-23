# فیلدها

[[toc]]

## تعریف فیلدها 

هر **resource** یه  method به اسم `fields`  دارد و به صورت  array هست .

برای اضافه کردن یک فیلد به **resource**، کافیه بصورت زیر اقدام کنید.


```php
use KarimQaderi\Zoroaster\Fields\ID;
use KarimQaderi\Zoroaster\Fields\Text;

/**
 *  گرفتن فیلدها برای نمایش دادها
 *
 * @return array
 */
public function fields()
{
    return [
        ID::make()->sortable(),
        Text::make('نام','name')->sortable(),
    ];
}
```

### مقادیر ستون فیلد 

وقتی یه فیلد رو می زارید باید دوتا پارامتر رو مشخص کنید.
پارامتر اول برچسب هست می توانید هر چیزی رو بزارید.
پارامتر دوم ماله نام ستونی که در داخل دیتابیس هست باید بنویسید

```php
Text::make('label', 'name_column_in_database')
```

## Showing / Hiding فیلدها 


اغلب شما فقط می خواهید فیلد را در شرایط خاص نمایش دهید. به عنوان مثال، معمولا نیازی به نشان دادن  فیلد رمز عبور در صفحه `index` نیست. 

روش های زیر برای نشان دادن / مخفی کردن فیلد ها می توانید استفاده کنید.

- `hideFromIndex`
- `hideFromDetail`
- `hideWhenCreating`
- `hideWhenUpdating`
- `onlyOnIndex`
- `onlyOnDetail`
- `onlyOnForms`
- `exceptOnForms`

می توانید بصورت زیر استفاده کنید بصورت زنجیروار.

```php
Text::make('نام','name')->hideFromIndex()
```

## مرتب کردن فیلد از نظر ظاهری 

 مرتب کردن فیلد ها در صفحه `from` و `detail`.


![Field Panel Example](./img/panels.png)

برای مرتب کردن فیلد ها می توانید از موارد زیر استفاده کنید.

- `Row`
- `Col`
- `Panel`
- `RowOneCol`
- `RowOneColBg`

هر کدام از انها دارای مقادیر متفاوتی هست و بصورت زیر می توانید استفاده کنید.


یک مثال ساده.

```php
use KarimQaderi\Zoroaster\Fields\Group\Panel;

/**
 *  گرفتن فیلدها برای نمایش دادها
 *
 * @return array
 */
public function fields()
{
    return [
    
       new Panel('label' , [
            ID::make()->sortable(),
       ]) ,
           
    ];
}
```

موارد دیگر و البته می توانید به صورت گروهیم ازشون استفاده کنید.

```php
use KarimQaderi\Zoroaster\Fields\Group\Col;
use KarimQaderi\Zoroaster\Fields\Group\Panel;
use KarimQaderi\Zoroaster\Fields\Group\Row;
use KarimQaderi\Zoroaster\Fields\Group\RowOneCol;
use KarimQaderi\Zoroaster\Fields\Group\RowOneColBg;

/**
 *  گرفتن فیلدها برای نمایش دادها
 *
 * @return array
 */
public function fields()
{
    return [
    
        new Row([
           // Fields
        ]),    
        
        new RowOneCol([
           // Fields
        ]),
        
        new RowOneColBg([
            // Fields
        ]),
        
        new Col('class for style css' , [
            // Fields         
        ]) ,
        
        new Panel('label' , [
            // Fields
        ]) ,
          
    ];
}
```

## فیلدهای قابل مرتب شدن  

می توانید مشخص کنید که در داخل صفحه `index` چه فیلدهای قابلیت مرتب شدن رو داشته باشن بصورت صعودی و نزولی .


```php
ID::make()->sortable()
```

## انواع فیلدها

:::tip فیلدهای  Relationship 

این قسمت از اسناد فقط زمینه های عدم ارتباط را مورد بحث قرار می دهد. برای کسب اطلاعات بیشتر در مورد زمینه ارتباطات،  [به این قسمت مراجعه کنید](/1.0/resources/relationships.html).
:::

می توانید از فیلدهای زیر استفاده کنید :

- [Boolean](#فیلد-boolean)
- [Date](#فیلد-date)
- [DateTime](#فیلد-datetime)
- [File](#فیلد-file)
- [Gravatar](#فیلد-gravatar)
- [Heading](#فیلد-heading)
- [ID](#فیلد-id)
- [Image](#فیلد-image)
- [Markdown](#فیلد-markdown)
- [Number](#فیلد-number)
- [Password](#فیلد-password)
- [Place](#فیلد-place)
- [Select](#فیلد-select)
- [Status](#فیلد-status)
- [Text](#فیلد-text)
- [Textarea](#فیلد-textarea)
- [Timezone](#فیلد-timezone)
- [Trix](#فیلد-trix)


###  فیلد Boolean 

از این فیلد برای فعال یا غیرفعال مورد استفاده قرار می گیرد:

```php
use KarimQaderi\Zoroaster\Fields\Boolean;

Boolean::make('وضعیت پست','status')
```

در داخل دیتابیس بصورت `0` و `1` ذخیره می شود


###  فیلد Date 

فیلد `Date` ممکن است برای ذخیره یک مقدار تاریخ (بدون زمان) استفاده شود.

```php
use KarimQaderi\Zoroaster\Fields\Date;

Date::make('تاریخ تولد','birthday')
```

####  فرمت های Date

شما می توانید قالب نمایش داده های خود را با استفاده از روش فرمت سفارشی کنید [flatpickr.js](https://flatpickr.js.org/formatting/#date-formatting-tokens):

```php
Date::make('تاریخ تولد','birthday')->format('d m'),
```

###  فیلد DateTime

این فیلد برای ذخیره تاریخ و زمان استفاده می شه :


```php
use KarimQaderi\Zoroaster\Fields\DateTime;

DateTime::make('تاریخ آپدیت','updated_at')->hideFromIndex()
```

شما می توانید قالب نمایش داده های خود را با استفاده از روش فرمت سفارشی کنید [flatpickr.js](https://flatpickr.js.org/formatting/#date-formatting-tokens):

```php
Date::make('تاریخ ساخت','created_at')->format('d m y'),
```

### File Field

To learn more about defining file fields and handling uploads, check out the additional [file field documentation](./file-fields.md).

```php
use KarimQaderi\Zoroaster\Fields\File;

File::make('Attachment')
```

### Gravatar Field

The `Gravatar` field does not correspond to any column in your application's database. Instead, it will display the "Gravatar" image of the model it is associated with.

By default, the Gravatar URL will be generated based on the value of the model's `email` column. However, if your user's email addresses are not stored in the `email` column, you may pass a custom column name to the field's `make` method:

```php
use KarimQaderi\Zoroaster\Fields\Gravatar;

// Using the "email" column...
Gravatar::make()

// Using the "email_address" column...
Gravatar::make('Avatar', 'email_address')
```

### Heading Field

The `Heading` field does not correspond to any column in your application's database. It is used to display a banner across your forms and can function as a separator for long lists of fields:

![Heading Field](./img/heading-field.png)

```php
Heading::make('Meta')
```

If you need to render HTML content within the `Heading` field, use the `asHtml` method:

```php
Heading::make('<p class="text-danger">* All fields are required.</p>')->asHtml()
```

::: tip Headings And Indexes

`Heading` fields are automatically hidden from the resource index screen.
:::

### ID Field

The `ID` field represents the primary key of your resource's database table. Typically, each Nova resource you define should contain an `ID` field. By default, the `ID` field assumes the underlying database column is named `id`:

```php
use KarimQaderi\Zoroaster\Fields\ID;

// Using the "id" column...
ID::make()

// Using the "id_column" column...
ID::make('ID', 'id_column')

// Resolve BIGINT ID fields
ID::make()->asBigInt()
```

### Image Field

The `Image` field extends the [File field](#file-field) and accepts the same options and configurations. The `Image` field, unlike the `File` field, will display a thumbnail preview of the underlying image when viewing the resource:

```php
use KarimQaderi\Zoroaster\Fields\Image;

Image::make('Photo')
```

By default, the `Image` field allows the user to download the linked file. To disable this you can use the `disableDownload` method on the field definition:

```php
Image::make('Photo')->disableDownload();
```

:::tip File Fields

To learn more about defining file fields and handling uploads, check out the additional [file field documentation](./file-fields.md).
:::

### Markdown Field

The `Markdown` field provides a WYSIWYG Markdown editor for its associated field. Typically, this field will correspond to a `TEXT` column in your database. The `Markdown` field will store the raw Markdown text within the associated database column:

```php
use KarimQaderi\Zoroaster\Fields\Markdown;

Markdown::make('Biography')
```

By default, Markdown fields will not display their content when viewing a resource on its detail page. It will be hidden behind a "Show Content" link, that when clicked will reveal the content. You may specify the Markdown field should always display its content by calling the `alwaysShow` method on the field itself:

```php
Markdown::make('Biography')->alwaysShow();
```

### Number Field

The `Number` field provides an `input` control with a `type` attribute of `number`:

```php
use KarimQaderi\Zoroaster\Fields\Number;

Number::make('price')
```

You may use the `min`, `max`, and `step` methods to set their corresponding attributes on the generated `input` control:

```php
Number::make('price')->min(1)->max(1000)->step(0.01)
```

### Password Field

The `Password` field provides an `input` control with a `type` attribute of `password`:

```php
use KarimQaderi\Zoroaster\Fields\Password;

Password::make('Password')
```

The `Password` field will automatically preserve the password that is currently stored in the database if the incoming password field is empty. Therefore, a typical password field definition might look like the following:

```php
Password::make('Password')
    ->onlyOnForms()
    ->creationRules('required', 'string', 'min:6')
    ->updateRules('nullable', 'string', 'min:6'),
```

### Password Confirmation Field

The `PasswordConfirmation` field provides an input that can be used for confirming another `Password` field. This field will only be shown on forms:

```php
PasswordConfirmation::make('Password Confirmation'),
```

### Place Field

The `Place` field leverages the power of the [Algolia Places API](https://community.algolia.com/places/) to provide ultra-fast address searching and auto-completion. An Algolia account is **not required** in order to leverage this field.

Typically, a `Place` field will be defined alongside other related address fields. In this example, in order to keep our resource tidy, we will use the `merge` method to extract the address field definitions into their own method:

```php
use KarimQaderi\Zoroaster\Fields\Place;

/**
 * Get the fields displayed by the resource.
 *
 * @param  \Illuminate\Http\Request  $request
 * @return array
 */
public function fields(Request $request)
{
    return [
        ID::make()->sortable(),
        $this->addressFields(),
    ];
}

/**
 * Get the address fields for the resource.
 *
 * @return \Illuminate\Http\Resources\MergeValue
 */
protected function addressFields()
{
    return $this->merge([
        Place::make('Address', 'address_line_1')->hideFromIndex(),
        Text::make('Address Line 2')->hideFromIndex(),
        Text::make('City')->hideFromIndex(),
        Text::make('State')->hideFromIndex(),
        Text::make('Postal Code')->hideFromIndex(),
        Country::make('Country')->hideFromIndex(),
        Text::make('Latitude')->hideFromIndex(),
        Text::make('Longitude')->hideFromIndex(),
    ]);
}
```

#### Searchable Countries

By default, the `Place` field will search all addresses around the world. If you would like to limit the countries included in the search, you may use the `countries` method:

```php
Place::make('Address', 'address_line_1')->countries(['US', 'CA'])
```

#### City Search

If you intend to use the `Place` field to search for cities instead of addresses, you may use the `onlyCities` method to instruct the field to only list cities in its results:

```php
Place::make('City')->onlyCities()
```

:::tip City Auto-Completion

When using the `Place` field as a city search, the `state` and `country` fields will still receive auto-completion. However, the `postal_code` field will not.
:::

#### Configuring Field Auto-Completion

By default, the place field will auto-complete the associated address fields based on their field names. The `Place` field will automatically fill fields named `address_line_2`, `city`, `state`, `postal_code`, `country`, `latitude` and `longitude`. However, you may customize the field names that should be auto-completed using the following methods:

- `secondAddressLine($column)`
- `city($column)`
- `state($column)`
- `postalCode($column)`
- `country($column)`

For example:

```php
Place::make('Address', 'address_line_1')
    ->secondAddressLine('address_2')
    ->city('city_name')
    ->state('state_code')
    ->postalCode('zip_code')
    ->country('country_code')
    ->latitude('latitude')
    ->longitude('longitude')
```

### Select Field

The `Select` field may be used to generate a drop-down select menu. The select menu's options may be defined using the `options` method:

```php
use KarimQaderi\Zoroaster\Fields\Select;

Select::make('Size')->options([
    'S' => 'Small',
    'M' => 'Medium',
    'L' => 'Large',
])
```

On the resource index and detail screens, the `Select` field's "key" value will be displayed. If you would like to display the labels instead, you may use the `displayUsingLabels` method:

```php
Select::make('Size')->options([
    'S' => 'Small',
    'M' => 'Medium',
    'L' => 'Large',
])->displayUsingLabels()
```

### Status Field

The `Status` field may be used to display a "progress state" column. Internally, Nova uses the `Status` field to indicate the current state (waiting, running, or finished) of queued actions. However, you are free to use this field for your own purposes as needed:

![Status Field Example](./img/status-field-waiting.png)

The `loadingWhen` and `failedWhen` methods may be used to instruct the field which words indicate a "loading" state and which words indicate a "failed" state. In this example, we will indicate that database column values of `waiting` or `running` should display a "loading" indicator:

```php
use KarimQaderi\Zoroaster\Fields\Status;

Status::make('Status')
        ->loadingWhen(['waiting', 'running'])
        ->failedWhen(['failed'])
```

### Text Field

The `Text` field provides an `input` control with a `type` attribute of `text`:

```php
use KarimQaderi\Zoroaster\Fields\Text;

Text::make('Name')
```

Text fields may be customized further by setting any attribute on the field. This can be done by calling the `withMeta` methods and passing in a valid `extraAttributes` value:

```php
Text::make('Name')->withMeta(['extraAttributes' => [
    'placeholder' => 'David Hemphill']
])
```

### Textarea Field

The `Textarea` field provides a `textarea` control:

```php
use KarimQaderi\Zoroaster\Fields\Textarea;

Textarea::make('Biography')
```

By default, Textarea fields will not display their content when viewing a resource on its detail page. It will be hidden behind a "Show Content" link, that when clicked will reveal the content. You may specify the Textarea field should always display its content by calling the `alwaysShow` method on the field itself:

```php
Textarea::make('Biography')->alwaysShow();
```

You may also specify the textarea's height by calling the `rows` method on the field: 

```php
Textarea::make('Excerpt')->rows(3);
```

Textarea fields may be customized further by setting any attribute on the field. This can be done by calling the `withMeta` methods and passing in a valid `extraAttributes` value:

```php
Textarea::make('Excerpt')->withMeta(['extraAttributes' => [
    'placeholder' => 'Make it less than 50 characters']
])
```

### Timezone Field

The `Timezone` field generates a `Select` field containing a list of the world's timezones:

```php
use KarimQaderi\Zoroaster\Fields\Timezone;

Timezone::make('Timezone')
```

### Trix Field

The `Trix` field provides a [Trix editor](https://github.com/basecamp/trix) for its associated field. Typically, this field will correspond to a `TEXT` column in your database. The `Trix` field will store its corresponding HTML within the associated database column:

```php
use KarimQaderi\Zoroaster\Fields\Trix;

Trix::make('Biography')
```

By default, Trix fields will not display their content when viewing a resource on its detail page. It will be hidden behind a "Show Content" link, that when clicked will reveal the content. You may specify the Trix field should always display its content by calling the `alwaysShow` method on the field itself:

```php
Trix::make('Biography')->alwaysShow();
```

#### File Uploads

If you would like to allow users to drag-and-drop photos into the Trix field, chain the `withFiles` method onto the field's definition. When calling the `withFiles` method, you should pass the name of the [filesystem disk](https://laravel.com/docs/filesystem) that photos should be stored on:

```php
use KarimQaderi\Zoroaster\Fields\Trix;

Trix::make('Biography')->withFiles('public')
```

In addition, you should define two database tables to store pending and persisted Trix uploads. To do so, create a migration with the following table definitions:

```php
Schema::create('nova_pending_trix_attachments', function (Blueprint $table) {
    $table->increments('id');
    $table->string('draft_id')->index();
    $table->string('attachment');
    $table->string('disk');
    $table->timestamps();
});

Schema::create('nova_trix_attachments', function (Blueprint $table) {
    $table->increments('id');
    $table->string('attachable_type');
    $table->unsignedInteger('attachable_id');
    $table->string('attachment');
    $table->string('disk');
    $table->string('url')->index();
    $table->timestamps();

    $table->index(['attachable_type', 'attachable_id']);
});
```

Finally, in your `app/Console/Kernel.php` file, you should register a [daily job](https://laravel.com/docs/scheduling) to prune any stale attachments from the pending attachments table and storage. Laravel Nova provides the job implementation needed to accomplish this:

```php
use Laravel\Nova\Trix\PruneStaleAttachments;

$schedule->call(function () {
    (new PruneStaleAttachments)();
})->daily();
```

## Computed Fields

In addition to displaying fields that are associated with columns in your database, Nova allows you to create "computed fields". Computed fields may be used to display computed values that are not associated with a database column. Since they are not associated with a database column, computed fields may not be `sortable`. These fields may be created by passing a callable (instead of a column name) as the second argument to the field's `make` method:

```php
Text::make('Name', function () {
    return $this->first_name.' '.$this->last_name;
})
```

:::tip Model Attribute Access

As you may have noticed in the example above, you may use `$this` to access the resource's underlying model attributes and relationships.
:::

By default, Vue will escape the content of a computed field. If you need to render HTML content within the field, use the `asHtml` method:

```php
Text::make('Status', function () {
    return view('partials.status', [
        'is_passing' => $this->isPassing(),
    ])->render();
})->asHtml()
```

## Customization

### Field Help Text

If you would like to place "help" text beneath a field, you may use the `help` method:

```php
Text::make('Tax Rate')->help(
    'The tax rate to be applied to the sale'
);
```

You may also use HTML when defining your help text:

```php
Text::make('First Name')->help(
    return '<a href="#">External Link</a>'
);

Text::make('Last Name')->help(
    view('partials.help-text', ['name' => $this->name])->render()
);
``` 

### Field Resolution / Formatting

The `resolveUsing` method allows you to customize how a field is formatted after it is retrieved from your database but before it is sent to the Nova front-end. This method accepts a callback which receives the raw value of the underlying database column:

```php
Text::make('Name')->resolveUsing(function ($name) {
    return strtoupper($name);
})
```

If you would like to customize how a field is formatted only when it is displayed on a resource's "index" or "detail" screen, you may use the `displayUsing` method. Like the `resolveUsing` method, this method accepts a single callback:

```php
Text::make('Name')->displayUsing(function ($name) {
    return strtoupper($name);
})
```
