class NikkLogger {
  private static isDevelopment: boolean = import.meta.env.MODE === 'development'

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static log(message: string, ...optionalParams: any[]): void {
    if (this.isDevelopment) {
      console.log(message, ...optionalParams)
    } else {
      this.stubLogService('log', message, ...optionalParams)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static error(message: string, ...optionalParams: any[]): void {
    if (this.isDevelopment) {
      console.error(message, ...optionalParams)
    } else {
      this.stubLogService('error', message, ...optionalParams)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static warn(message: string, ...optionalParams: any[]): void {
    if (this.isDevelopment) {
      console.warn(message, ...optionalParams)
    } else {
      this.stubLogService('warn', message, ...optionalParams)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static stubLogService(level: string, message: string, ...optionalParams: any[]): void {
    // Replace this with actual AWS logging logic
    console.log(`Stub log service [${level}]:`, message, ...optionalParams)
  }
}

export default NikkLogger
