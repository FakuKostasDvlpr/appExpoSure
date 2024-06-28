export function Service() {
  return (
    <section className="flex container mx-auto flex-col bg-black ">
      <div className="">
        <div className="">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What is this course for?</h2>
          <div className="">
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              This course is designed for anyone who wants to learn how to build modern, responsive web applications
              using the latest technologies and best practices.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="flex flex-col items-start gap-4">
            <div className="rounded-md bg-primary p-3 text-primary-foreground">
              <div className="h-6 w-6" />
            </div>
            <p className="text-muted-foreground">
              Learn how to write clean, maintainable code using modern JavaScript, React, and other cutting-edge tools.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <div className="rounded-md bg-secondary p-3 text-secondary-foreground">
              <div className="h-6 w-6" />
            </div>
            <p className="text-muted-foreground">
              Develop responsive, mobile-friendly web applications that work seamlessly across devices.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <div className="rounded-md bg-muted p-3 text-muted-foreground">
              <div className="h-6 w-6" />
            </div>
            <p className="text-muted-foreground">
              Explore cloud-based deployment and hosting solutions to efficiently scale your applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
