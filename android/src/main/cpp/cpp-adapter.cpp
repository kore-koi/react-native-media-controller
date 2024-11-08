#include <jni.h>
#include "<<androidCxxLibName>>OnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::mediacontroller::initialize(vm);
}
