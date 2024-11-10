///
/// HybridMPVolumeViewControllerSpecSwift.hpp
/// This file was generated by nitrogen. DO NOT MODIFY THIS FILE.
/// https://github.com/mrousavy/nitro
/// Copyright © 2024 Marc Rousavy @ Margelo
///

#pragma once

#include "HybridMPVolumeViewControllerSpec.hpp"

// Forward declaration of `HybridMPVolumeViewControllerSpecCxx` to properly resolve imports.
namespace RNMediaController { class HybridMPVolumeViewControllerSpecCxx; }

// Forward declaration of `MPVolumeViewControllerSetVolumeParams` to properly resolve imports.
namespace margelo::nitro::mediacontroller { struct MPVolumeViewControllerSetVolumeParams; }

#include <future>
#include <NitroModules/PromiseHolder.hpp>
#include "MPVolumeViewControllerSetVolumeParams.hpp"

#if __has_include(<NitroModules/HybridContext.hpp>)
#include <NitroModules/HybridContext.hpp>
#else
#error NitroModules cannot be found! Are you sure you installed NitroModules properly?
#endif

#include "RNMediaController-Swift-Cxx-Umbrella.hpp"

namespace margelo::nitro::mediacontroller {

  /**
   * The C++ part of HybridMPVolumeViewControllerSpecCxx.swift.
   *
   * HybridMPVolumeViewControllerSpecSwift (C++) accesses HybridMPVolumeViewControllerSpecCxx (Swift), and might
   * contain some additional bridging code for C++ <> Swift interop.
   *
   * Since this obviously introduces an overhead, I hope at some point in
   * the future, HybridMPVolumeViewControllerSpecCxx can directly inherit from the C++ class HybridMPVolumeViewControllerSpec
   * to simplify the whole structure and memory management.
   */
  class HybridMPVolumeViewControllerSpecSwift: public virtual HybridMPVolumeViewControllerSpec {
  public:
    // Constructor from a Swift instance
    explicit HybridMPVolumeViewControllerSpecSwift(const RNMediaController::HybridMPVolumeViewControllerSpecCxx& swiftPart):
      HybridObject(HybridMPVolumeViewControllerSpec::TAG),
      _swiftPart(swiftPart) { }

  public:
    // Get the Swift part
    inline RNMediaController::HybridMPVolumeViewControllerSpecCxx getSwiftPart() noexcept { return _swiftPart; }

  public:
    // Get memory pressure
    inline size_t getExternalMemorySize() noexcept override {
      return _swiftPart.getMemorySize();
    }

  public:
    // Properties
    

  public:
    // Methods
    inline std::future<void> setVolume(const MPVolumeViewControllerSetVolumeParams& params) override {
      auto __result = _swiftPart.setVolume(params);
      return __result.getFuture();
    }
    inline std::future<double> getVolume() override {
      auto __result = _swiftPart.getVolume();
      return __result.getFuture();
    }

  private:
    RNMediaController::HybridMPVolumeViewControllerSpecCxx _swiftPart;
  };

} // namespace margelo::nitro::mediacontroller
