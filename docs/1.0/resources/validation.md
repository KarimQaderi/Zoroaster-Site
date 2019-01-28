# Validation

[[toc]]

Unless you like to live dangerously, any Nova fields that are displayed on the Nova creation / update screens will need some validation. Thankfully, it's a cinch to attach all of the Laravel validation rules you're familiar with to your Nova resource fields. Let's get started.

### اضافه کردن قانون 

[validation rules](https://laravel.com/docs/validation#available-validation-rules):

```php
Text::make('Name')
    ->rules('required', 'max:255'),
```

[validation rule objects](https://laravel.com/docs/validation#using-rule-objects):

```php
use App\Rules\ValidState;

Text::make('State')
    ->rules('required', new ValidState),
```

[custom Closure rules](https://laravel.com/docs/validation#using-closures):

```php
Text::make('State')
    ->rules('required', function($attribute, $value, $fail) {
        if (strtoupper($value) !== $value) {
            return $fail('The '.$attribute.' field must be uppercase.');
        }
    })
```
