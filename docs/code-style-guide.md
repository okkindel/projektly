# Code Style Guide

- To check Angular style guide check [documentation](https://angular.io/guide/styleguide).

## File structure conventions

The guideline uses the shortcut hero.component. `ts` | `html` | `css` | `spec` to represent those various files. Using this shortcut makes this guide’s file structures easier to read and more terse.

## Single responsibility

A class should have one and only one reason to change meaning that a class should have only one job.  
Do define one thing such as a service or component per file
One component per file makes it far easier to read, maintain, and avoid collisions with teams in source control.  
Limiting files to 400 Lines of code.
Define small functions and Limiting to no more than 75 lines.
The small functions are easy to reuse, read and maintain.

## Naming

Naming conventions are hugely important to maintainability and readability.

### General Naming Guidelines

Use consistent names for all symbols.  
Do follow a pattern that describes the symbol’s feature then its type. The recommended pattern is feature.type.ts.

### Separate filenames with dots and dashes

Do use conventional type names including .service, .component, .pipe, .module, and .directive. Invent additional type names if you must but take care not to create too many.

### Symbols and file names

Do use upper camel case for class names.  
Do match the name of the symbol to the name of the file.  
Do give the filename the conventional suffix (such as .component.ts, .directive.ts, .module.ts, .pipe.ts, or .service.ts) for a file of that type.

### Service names
Do use consistent names for all services named after their feature.
Do suffix a service class name with Service. For example, something that gets data or heroes should be called a DataService or a HeroService.

### Bootstrapping

Do put bootstrapping and platform logic for the app in a file named main.ts.
Do include error handling in the bootstrapping logic.

### Component selectors

Do use kebab-case for naming the element selectors of components.

### Component custom prefix

Do use a hyphenated, lowercase element selector value; for example, admin-users.  
Do use a prefix that identifies the feature area or the app itself.

### Directive selectors
Do Use lower camel case for naming the selectors of directives.  
The Angular HTML parser is case sensitive and recognizes lower camel case.

### Directive custom prefix

Do use a custom prefix for the selector of directives (e.g, the prefix toh from Tour of Heroes).

### Pipe names

Do use consistent names for all pipes, named after their feature.

### Unit test file names

Do name test specification files the same as the component they test.  
Do name test specification files with a suffix of .spec.


### End-to-End (E2E) test file names
Do name end-to-end test specification files after the feature they test with a suffix of .e2e-spec.

### Angular NgModule names

Do append the symbol name with the suffix Module.  
Do give the filename the .module.ts extension.  
Do name the module after the feature and folder it resides in.  
Do suffix a RoutingModule class name with RoutingModule.  
Do end the filename of a RoutingModule with -routing.module.ts.  

## Coding conventions

### Classes
Do use upper camel case, also known as PascalCase, when naming classes.

### Constants

Do declare variables with const if their values should not change during the application lifetime.  
Lower camel case variable names (heroRoutes) are easier to read and understand than the traditional UPPER_SNAKE_CASE names (HERO_ROUTES).

### Interfaces

Do name an interface using upper camel case.  
Consider naming an interface without an I prefix.  
Consider using a class instead of an interface for services and declarables (components, directives, and pipes).  
Consider using an interface for data models.  
Interfaces are completely removed during compilation and so they will not add any unnecessary bloat to our final js code.

### Properties and methods

Do use lower camel case to name properties and methods.
Avoid prefixing private properties and methods with an underscore.

### Import line spacing

Consider leaving one empty line between third-party imports and application imports.  
Consider listing import lines alphabetized by the module.

## Application structure and NgModules

All of the app’s code goes in a folder named src. All feature areas are in their own folder, with their own NgModule.

### LIFT

Do structure the app such that you can Locate code quickly, Identify the code at a glance, keep the Flattest structure you can, and Try to be DRY.

### Locate

Do make locating code intuitive, simple and fast.

### Identify
Do name the file such that you instantly know what it contains and represents.  
It may be advantageous to deviate from the one-thing-per-file rule when you have a set of small, closely-related features that are better discovered and understood in a single file than as multiple files. Be wary of this loophole.

### Flat

Do keep a flat folder structure as long as possible.  
Consider creating sub-folders when a folder reaches seven or more files.  
On the other hand, psychologists believe that humans start to struggle when the number of adjacent interesting things exceeds nine. So when a folder has ten or more files, it may be time to create subfolders.

### T-DRY (Try to be DRY)

Do be DRY (Don’t Repeat Yourself).   
Make sure you do not have the same code copied into the different places in the codebase extract the repeating code and use it in place of the repeated code.

### Overall structural guidelines

```
|-- app
     |-- modules
       |-- home
           |-- [+] components
           |-- [+] pages
           |-- home-routing.module.ts
           |-- home.module.ts
     |-- core
       |-- [+] authentication
       |-- [+] footer
       |-- [+] guards
       |-- [+] http
       |-- [+] interceptors
       |-- [+] mocks
       |-- [+] services
       |-- [+] header
       |-- core.module.ts
       |-- ensureModuleLoadedOnceGuard.ts
       |-- logger.service.ts
     |
     |-- shared
          |-- [+] components
          |-- [+] directives
          |-- [+] pipes
          |-- [+] models
     |
     |-- [+] configs
|-- assets
     |-- scss
          |-- [+] partials
          |-- _base.scss
          |-- styles.scss
```

### Folders-by-feature structure

Do create folders named for the feature area they represent. 
A developer can locate the code and identify what each file represents at a glance. The structure is as flat as it can be and there are no repetitive or redundant names.

### App root module

Do create an NgModule in the app’s root folder, for example, in /src/app.
Makes it easier to locate and identify the root module.

### Feature modules

Do create an NgModule for all distinct features in an application.  
A feature module can easily be routed to both eagerly and lazily.  
A feature module can easily be isolated for testing.

### Shared feature module

Create a feature module named SharedModule in a shared folder.  
Do declare components, directives, and pipes in a shared module when those items will be re-used and referenced by the components declared in other feature modules.  
Not providing services in shared modules. Services are usually singletons that are provided once for the entire application or in a particular feature module.  
SharedModule will contain components, directives, and pipes that may need features from another common module; for example, ngFor in CommonModule.

### Lazy Loaded folders

A distinct application feature or workflow may be lazy loaded or loaded on demand rather than when the application starts.  
A typical lazy loaded folder contains a routing component, its child components, and their related assets and modules.  

### Never directly import lazy loaded folders

Avoid allowing modules in sibling and parent folders to directly import a module in a lazy loaded feature.

## Components

### Components as elements

Giving components an element selector, as opposed to attribute or class selectors.  
It is easier to recognize that a symbol is a component by looking at the template’s HTML.

### Extract templates and styles to their own files

Extract templates and styles into a separate file, when more than 3 lines.
Name the template file [component-name].component.html, where [component-name] is the component name.  
In most editors, syntax hints and code snippets aren’t available when developing inline templates and styles.

### Decorate input and output properties

Use the @Input() and @Output() class decorators instead of the inputs and outputs properties of the@Directive and @Component metadata:

### Avoid aliasing inputs and outputs

Avoid input and output aliases except when it serves an important purpose.
Two names for the same property (one private, one public) is inherently confusing.

### Member sequence

Place properties up top followed by methods.  
Place private members after public members, alphabetized.  
Placing members in a consistent sequence makes it easy to read and helps instantly identify which members of the component serve which purpose.

### Delegate complex component logic to services

limit logic in a component to only that required for the view. All other logic should be delegated to services.  
Move reusable logic to services and keep components simple and focused on their intended purpose.  
Keeps the component slim, trim, and focused.

### Don’t prefix output properties

Name events without the prefix on.  
Name event handler methods with the prefix on followed by the event name.

### Put presentation logic in the component class

Put presentation logic in the component class, and not in the template.
Logic will be contained in one place (the component class) instead of being spread in two places.

## Directives

### Use directives to enhance an element

Use attribute directives when you have presentation logic without a template.
An element may have more than one attribute directive applied.

### HostListener/HostBinding decorators versus host metadata

Consider preferring the @HostListener and @HostBinding to the host property of the @Directive and @Component decorators.  
The property associated with @HostBinding or the method associated with @HostListener can be modified only in a single place—in the directive's class. If you use the host metadata property, you must modify both the property/method declaration in the directive's class and the metadata in the decorator associated with the directive.  
Compare with the less preferred host metadata alternative.  
The host metadata is only one term to remember and doesn't require extra ES imports.

## Services

### Services are singletons

Do use services as singletons within the same injector. Use them for sharing data and functionality.  
Services are ideal for sharing methods across a feature area or an app.  
Services are ideal for sharing stateful in-memory data.

### Single responsibility

Create services with a single responsibility that is encapsulated by its context.  
Create a new service once the service begins to exceed that singular purpose.  
When a service has multiple responsibilities, it becomes difficult to test.  
When a service has multiple responsibilities, every component or service that injects it now carries the weight of them all.  

### Providing a service

Provide a service with the app root injector in the @Injectable decorator of the service.  
When you provide the service to a root injector, that instance of the service is shared and available in every class that needs the service. This is ideal when a service is sharing methods or state.  
When you register a service in the @Injectable decorator of the service, optimization tools such as those used by the Angular CLI's production builds can perform tree shaking and remove services that aren't used by your app.

### Use the @Injectable() class decorator

Use the @Injectable() class decorator instead of the @Inject parameter decorator when using types as tokens for the dependencies of a service.

## Data Services

### Talk to the server through a service

Make data services responsible for XHR calls, local storage, stashing in memory, or any other data operations.

## Lifecycle 

Use Lifecycle hooks to tap into important events exposed by Angular.

### Implement lifecycle hook interfaces

Implement the lifecycle hook interfaces.  
Lifecycle interfaces prescribe typed method signatures. Use those signatures to flag spelling and syntax mistakes.

## Other

### trackBy

When using ngFor to loop over an array in templates, use it with a trackByfunction which will return an unique identifier for each item.  
When an array changes, Angular re-renders the whole DOM tree. But if you use trackBy, Angular will know which element has changed and will only make DOM changes for that particular element.

### Clean up subscriptions

When subscribing to observables, always make sure you unsubscribe from them appropriately by using operators like take, takeUntil, etc.

### Avoid having subscriptions inside subscriptions

If you can do them all in parallel use forkJoin or If each depends on the result of the previous use flatMap and so on. There are many different operators to compose observables.

### Avoid any, type everything

Always declare variables or constants with a type other than any.

### Avoid logic in templates

If you have any sort of logic in your templates, even if it is a simple && clause, it is good to extract it out into its component.  
Having logic in the template means that it is not possible to unit test it and therefore it is more prone to bugs when changing template code.

### Remove unused code

It is extremely valuable to know if a piece of code is being used or not. If you let unused code stay, then in the future, it can be hard or almost impossible to be certain if it’s actually used or not. Therefore, you should make it a high priority to remove unused code.

### Avoid code comments

Although there are cases for comments, you should really try to avoid them. You don’t want your comments to compensate for your failure to express the message in your code. Comments should be updated as code is updated, but a better use of time would be to write code that explains itself. Inaccurate comments are worse than no comments at all, as stated by anonymous:
Code never lies, comments do.

### Clean up imports with path aliases

We can clean up these imports considerably by using aliases to reference our files, which looks something like this:
import 'reusableComponent' from '@app/shared/components/reusable.component.ts';  
To be able to do this, we need to add a baseUrl and the desired paths inside our tsconfig.json file:

```
{
  "compilerOptions": {
    ...
    "baseUrl": "src",
    "paths": {
      "@app:": ["@app/*"]
    }
  }
}
```