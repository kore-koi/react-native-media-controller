///
/// RNMediaControllerOnLoad.cpp
/// This file was generated by nitrogen. DO NOT MODIFY THIS FILE.
/// https://github.com/mrousavy/nitro
/// Copyright © 2024 Marc Rousavy @ Margelo
///

#include "RNMediaControllerOnLoad.hpp"

#include <jni.h>
#include <fbjni/fbjni.h>
#include <NitroModules/HybridObjectRegistry.hpp>

#include "JHybridAudioManagerSpec.hpp"
#include <NitroModules/JNISharedPtr.hpp>

namespace margelo::nitro::mediacontroller {

int initialize(JavaVM* vm) {
  using namespace margelo::nitro;
  using namespace margelo::nitro::mediacontroller;
  using namespace facebook;

  return facebook::jni::initialize(vm, [] {
    // Register native JNI methods
    margelo::nitro::mediacontroller::JHybridAudioManagerSpec::registerNatives();
    margelo::nitro::mediacontroller::JHybridAudioManagerSpec::registerNatives();

    // Register Nitro Hybrid Objects
    HybridObjectRegistry::registerHybridObjectConstructor(
      "AudioManager",
      []() -> std::shared_ptr<HybridObject> {
        static auto javaClass = jni::findClassStatic("com/margelo/nitro/mediacontroller/HybridAudioManager");
        static auto defaultConstructor = javaClass->getConstructor<JHybridAudioManagerSpec::javaobject()>();
    
        auto instance = javaClass->newObject(defaultConstructor);
    #ifdef NITRO_DEBUG
        if (instance == nullptr) [[unlikely]] {
          throw std::runtime_error("Failed to create an instance of \"JHybridAudioManagerSpec\" - the constructor returned null!");
        }
    #endif
        auto globalRef = jni::make_global(instance);
        return JNISharedPtr::make_shared_from_jni<JHybridAudioManagerSpec>(globalRef);
      }
    );
  });
}

} // namespace margelo::nitro::mediacontroller
