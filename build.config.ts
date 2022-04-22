interface ConfigEnvObject {
  base: string;
  assetsOutDir: string;
}

interface Config {
  [key: string]: ConfigEnvObject;
}

const buildConfig: Config = {
  local: {
    base: "/",
    assetsOutDir: "",
  },
  develop: {
    base: "/",
    assetsOutDir: "",
  },
  production: {
    base: "/",
    assetsOutDir: "",
  },
};

export default buildConfig;
