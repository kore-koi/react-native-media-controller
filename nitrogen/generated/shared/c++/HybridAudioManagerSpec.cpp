///
/// HybridAudioManagerSpec.cpp
/// This file was generated by nitrogen. DO NOT MODIFY THIS FILE.
/// https://github.com/mrousavy/nitro
/// Copyright © 2024 Marc Rousavy @ Margelo
///

#include "HybridAudioManagerSpec.hpp"

namespace margelo::nitro::mediacontroller {

  void HybridAudioManagerSpec::loadHybridMethods() {
    // load base methods/properties
    HybridObject::loadHybridMethods();
    // load custom methods/properties
    registerHybrids(this, [](Prototype& prototype) {
      prototype.registerHybridMethod("setVolume", &HybridAudioManagerSpec::setVolume);
      prototype.registerHybridMethod("getVolume", &HybridAudioManagerSpec::getVolume);
    });
  }

} // namespace margelo::nitro::mediacontroller
