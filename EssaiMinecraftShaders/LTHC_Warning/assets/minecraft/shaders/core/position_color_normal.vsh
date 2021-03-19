#version 150

in vec3 Position;
in vec4 Color;
in vec3 Normal;

uniform mat4 ModelViewMat;
uniform mat4 ModelViewProjMat;

out float vertexDistance;
out vec4 vertexColor;
out vec4 normal;

void main() {
    gl_Position = ModelViewProjMat * vec4(Position, 1.0);

    vertexDistance = length((ModelViewMat * vec4(Position, 1.0)).xyz);
    vertexColor = vec4(Color.x, Color.y, Color.z, abs(cos(Color.z * 32 - 2)));
    normal = ModelViewProjMat * vec4(Normal, 0.5);
}
