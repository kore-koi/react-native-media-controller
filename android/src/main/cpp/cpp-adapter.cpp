#include <jni.h>
#include "RNMediaControllerOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::mediacontroller::initialize(vm);
}
