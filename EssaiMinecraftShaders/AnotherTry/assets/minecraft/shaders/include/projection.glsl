#version 150

vec4 projection_from_position(vec4 position) {
    vec4 projection = position * 0.5;
    projection.xy = vec2(projection.x + projection.w * 1.1, projection.y + projection.w * 0.9);
    projection.zw = position.zw;
    return projection;
}
