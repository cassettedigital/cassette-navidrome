package conf

func ResetConf() {
	Server = &configOptions{}
}

var SetViperDefaults = setViperDefaults

var ValidateURL = validateURL

var NormalizeSearchBackend = normalizeSearchBackend

var ToPascalCase = toPascalCase

var ValidateMaxImageUploadSize = validateMaxImageUploadSize

func SetLogFatal(f func(...any)) func() {
	old := logFatal
	logFatal = f
	return func() { logFatal = old }
}
