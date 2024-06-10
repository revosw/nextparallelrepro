export async function getA(): Promise<string> {
    const time = Date.now()
    const res = await new Promise<string>((resolve) => {
        setTimeout(() => resolve("Response A"), 1000)
    })
    console.log("getA:", Date.now() - time)
    // console.trace()
    return res
}

export async function getB(): Promise<string> {
    const time = Date.now()
    const res = await new Promise<string>((resolve) => {
        setTimeout(() => resolve("Response B"), 1000)
    })
    console.log("getB:", Date.now() - time)
    // console.trace()
    return res
}

export async function getC(): Promise<string> {
    const time = Date.now()
    const res = await new Promise<string>((resolve) => {
        setTimeout(() => resolve("Response C"), 1000)
    })
    console.log("getC:", Date.now() - time)
    // console.trace()
    return res
}

export async function getD(): Promise<string> {
    const time = Date.now()
    const res = await new Promise<string>((resolve) => {
        setTimeout(() => resolve("Response D"), 1000)
    })
    console.log("getD:", Date.now() - time)
    // console.trace()
    return res
}

export async function getE(): Promise<string> {
    const time = Date.now()
    const res = await new Promise<string>((resolve) => {
        setTimeout(() => resolve("Response E"), 5000)
    })
    console.log("getE:", Date.now() - time)
    // console.trace()
    return res
}