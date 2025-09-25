export const loaderFull = async (engine) => {
  const { loadFull } = await import("tsparticles");
  await loadFull(engine);
};
export const loaderSlim = async (engine) => {
  const { loadSlim } = await import("@tsparticles/slim");
  await loadSlim(engine);
};
export const loaderBasic = async (engine) => {
  const { loadBasic } = await import("@tsparticles/basic");
  await loadBasic(engine);
};
export const loadParticles = async (engine, mode) => {
  const loaderMap = /* @__PURE__ */ new Map([
    ["basic", loaderBasic],
    ["slim", loaderSlim],
    ["full", loaderFull]
  ]);
  const loader = loaderMap.get(mode);
  if (loader) {
    await loader(engine);
  }
};
