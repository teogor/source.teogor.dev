## Querent 🏗️

Querent lays the groundwork for your project's resource management, fostering consistency and efficiency across your development workflow. It automates the generation of resource files based on your project's configuration, saving you time and effort while ensuring that your resources are always up-to-date.

### Existing Implementations

Querent currently provides three built-in plugins for generating resource files:

1. **BuildProfile:** Generates code for build profiles, which are sets of properties that define how a project is built.

2. **XmlResources:** Generates XML resource files for various Android resources, such as strings, layouts, and drawables.

3. **LanguagesSchema:** Generates code for languages schemas, which define the supported languages for your project and the rules for generating localized resources.

### Creating Custom Plugins

Querent's extensible architecture allows you to create your own custom plugins for generating any type of resource file you need. To create a custom plugin, you'll need to follow these steps:

1. **Create a Blueprint class:** Define a class that extends the `Blueprint` class and implements the `onCreate()` method. The `onCreate()` method is where you'll write the code for generating your custom resource files.

2. **Register your plugin:** Use the `initializePlugin()` extension method to register your plugin with Querent. This will make your plugin available for use in your project's build configuration.

### Example Usage

Here's a step-by-step guide on how to apply the Querent plugin to your project:

**1. Add the Querent Plugin to Your Project's Build.gradle File**

In your project's **build.gradle.kts** file, add the following line to the `plugins` block:

```kotlin
plugins {
  id("dev.teogor.querent") apply false
}
```

This line tells Gradle to apply the Querent plugin to your project.

**2. Apply the Querent Plugin to Your Build Configuration**

In your project's **build.gradle.kts** file, apply the Querent plugin to your build configuration. For example, if you're building an Android app, you would add the following line to the `android` block:

```kotlin
plugins {
  id("dev.teogor.querent")
}
```

**3. Configure Querent**

You can configure Querent by adding a `querent` block to your build configuration. For example, the following code enables all three of the built-in plugins and configures the languages schema plugin to support several languages:

```kotlin
querent {
  buildFeatures {
    buildProfile = true
    xmlResources = true
    languagesSchema = true
  }

  languagesSchemaOptions {
    unqualifiedResLocale = Language.English territorialize Country.UnitedStates
    addSupportedLanguages {
      +(Language.Romanian territorialize Country.Romania)
      +(Language.English territorialize Country.UnitedKingdom)
      +(Language.Korean territorialize Country.SouthKorea)
      +(Language.Dutch territorialize Country.Netherlands)
      +(Language.German territorialize Country.Germany)
      +(Language.Chinese territorialize Country.China)
      +Language.Japanese
      +Language.Spanish
      +Language.Hindi
      +Language.Arabic
    }
  }
}
```

This configuration will generate build profiles, XML resource files, and code for the supported languages.

### Building with Querent

To build your project with Querent, simply apply the plugin to your project and run the `gradle build` command. Querent will automatically generate the resource files for your project.

### Benefits of Using Querent

Querent offers several benefits for developers, including:

* **Saves time and effort:** Querent automates the generation of resource files, saving you time and effort that you can spend on other development tasks.

* **Ensures consistency:** Querent generates resource files based on your project's configuration, ensuring that your resources are always consistent.

* **Reduces manual errors:** Querent eliminates the need for manual resource file creation, reducing the risk of errors.

* **Extensible architecture:** Querent's extensible architecture allows you to create your own custom plugins for generating any type of resource file you need.

* **Improved developer experience:** Querent makes it easier to manage and maintain your project's resources, improving the overall developer experience.

Whether you're building a new project or maintaining an existing one, Querent can help you streamline your resource management process and save you time and effort.

## Find this repository useful? :heart:
Support it by joining __[stargazers](https://github.com/teogor/querent/stargazers)__ for this repository. :star: <br>
Also, __[follow me](https://github.com/teogor)__ on GitHub for my next creations! 🤩

# License
```xml
  Designed and developed by 2022 teogor (Teodor Grigor)

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
```
