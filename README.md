# JS Error

## What is it?

A lightweight library, that provides an Error class to throws errors with cause, making it easier to chaining of errors.

## Using JS Error

```javascript
npm install js-error
```

The `JSError` class is a subclass of `Error` class. Create instances of this class passing a message and a cause (optional). The message can be an string or an object.

```javascript
throw new JSError("Foo");

throw new JSError("Foo", cause);

throw new JSError({name: "ValidationError", message: "Foo"}, cause);

throw new JSError({name: "ValidationError", message: "Foo"}, cause);

throw new JSError({name: "ValidationError", message: "Foo", data: {}}, cause);
```

With this class you can do error handling an throws a new error passing the cause of this error.

```javascript
try {
    throw new Error("Foo");
} catch(ex) {
    throw new JSError("Bar", ex);
}
```
This code will generate a stacktrace like this:

![stacktrace](https://user-images.githubusercontent.com/8549602/57972828-0b0cc980-7976-11e9-990b-3d3692805e07.png)

## Licensing

**seudev/js-error** is provided and distributed under the [Apache Software License 2.0](http://www.apache.org/licenses/LICENSE-2.0).

Refer to *LICENSE* for more information.
