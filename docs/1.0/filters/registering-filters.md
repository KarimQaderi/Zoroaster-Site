#  اضافه کردن فیلتر به resource

[[toc]]


برای اینکه فیلتر رو به resource اضافه کنید کافیه به resource مورد نظر خود رفته و مانند زیر عمل کنید:

```php
    /**
     * فیلترها
     *
     * @return array
     */
    public function filters()
       {
          return[
              new \App\Zoroaster\Filters\CreatedAt()
          ];
       }
```
