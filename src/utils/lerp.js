function lerp(a, b, t) {
    if (t > 1) return b;
    return (a * (1 - t) + b * t);
}

function lerp2(a, b, c, d, t){
    let s = (t - a) / (b - a);
    return lerp3(c, d, s);
}

function lerp3(a, b, t){
    return (a * (1 - t) + b * t);
}

export { lerp, lerp2, lerp3 };

