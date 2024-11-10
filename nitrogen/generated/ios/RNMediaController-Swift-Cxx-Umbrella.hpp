///
/// RNMediaController-Swift-Cxx-Umbrella.hpp
/// This file was generated by nitrogen. DO NOT MODIFY THIS FILE.
/// https://github.com/mrousavy/nitro
/// Copyright © 2024 Marc Rousavy @ Margelo
///

#pragma once

// Forward declarations of C++ defined types
// Forward declaration of `HybridMPVolumeViewControllerSpec` to properly resolve imports.
namespace margelo::nitro::mediacontroller { class HybridMPVolumeViewControllerSpec; }
// Forward declaration of `MPVolumeViewControllerSetVolumeParams` to properly resolve imports.
namespace margelo::nitro::mediacontroller { struct MPVolumeViewControllerSetVolumeParams; }

// Include C++ defined types
#include "HybridMPVolumeViewControllerSpec.hpp"
#include "MPVolumeViewControllerSetVolumeParams.hpp"
#include <future>
#include <memory>

// C++ helpers for Swift
#include "RNMediaController-Swift-Cxx-Bridge.hpp"

// Common C++ types used in Swift
#include <NitroModules/ArrayBufferHolder.hpp>
#include <NitroModules/AnyMapHolder.hpp>
#include <NitroModules/HybridContext.hpp>
#include <NitroModules/PromiseHolder.hpp>

// Forward declarations of Swift defined types
// Forward declaration of `HybridMPVolumeViewControllerSpecCxx` to properly resolve imports.
namespace RNMediaController { class HybridMPVolumeViewControllerSpecCxx; }

// Include Swift defined types
#if __has_include("RNMediaController-Swift.h")
// This header is generated by Xcode/Swift on every app build.
// If it cannot be found, make sure the Swift module's name (= podspec name) is actually "RNMediaController".
#include "RNMediaController-Swift.h"
#else
#error RNMediaController's autogenerated Swift header cannot be found! Make sure the Swift module's name (= podspec name) is actually "RNMediaController", and try building the app first.
#endif
