# [5.0.0-beta.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0-beta.5...v5.0.0-beta.5) (2025-07-30)



# [5.0.0-beta.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0-beta.4...v5.0.0-beta.4) (2025-07-13)



# [5.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0-beta.3...v5.0.0-beta.3) (2025-07-07)



# [5.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0-beta.2...v5.0.0-beta.2) (2025-06-18)



# [5.0.0-beta.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0-beta.1...v5.0.0-beta.1) (2025-06-16)



# [5.0.0-beta.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0-beta.0...v5.0.0-beta.0) (2025-05-18)



## [4.5.4](https://github.com/qmhc/vite-plugin-dts/compare/v4.5.3...v4.5.4) (2025-05-15)

### Bug Fixes

- correct specify root for rollup types ([062e6d3](https://github.com/qmhc/vite-plugin-dts/commit/062e6d3fe8fe0413c8dc7ad075b956a2cd8e1391)), closes [#425](https://github.com/qmhc/vite-plugin-dts/issues/425)
- should collect diagnostics when transform ([#423](https://github.com/qmhc/vite-plugin-dts/issues/423)) ([3d0cc1b](https://github.com/qmhc/vite-plugin-dts/commit/3d0cc1b7f91d0afd388c022fe31280600c79a0b0))
- use entry name instead of entry path to generate indexName ([#424](https://github.com/qmhc/vite-plugin-dts/issues/424)) ([e8049d9](https://github.com/qmhc/vite-plugin-dts/commit/e8049d931f77a5d33097fd52039904b20e4fbc0b))

## [4.5.3](https://github.com/qmhc/vite-plugin-dts/compare/v4.5.1...v4.5.3) (2025-03-03)

### Bug Fixes

- degrade @vue/language-core version ([f47ec80](https://github.com/qmhc/vite-plugin-dts/commit/f47ec80baca800a7a5e95e129f325477e8f7fe6c))

## [4.5.2](https://github.com/qmhc/vite-plugin-dts/compare/v4.5.1...v4.5.2) (2025-03-03)

### Bug Fixes

- degrade @vue/language-core version ([f47ec80](https://github.com/qmhc/vite-plugin-dts/commit/f47ec80baca800a7a5e95e129f325477e8f7fe6c))

## [4.5.1](https://github.com/qmhc/vite-plugin-dts/compare/v4.5.0...v4.5.1) (2025-02-28)

### Bug Fixes

- not overriding noUnusedParameters of compiler options ([#408](https://github.com/qmhc/vite-plugin-dts/issues/408)) ([76a5913](https://github.com/qmhc/vite-plugin-dts/commit/76a5913f4a57033706d9b75ff6a4a6495291a531))
- should process alias for module declaration ([41167d5](https://github.com/qmhc/vite-plugin-dts/commit/41167d5853dbae36f93a466bc242bd9199709eca)), closes [#409](https://github.com/qmhc/vite-plugin-dts/issues/409)

# [4.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v4.4.0...v4.5.0) (2025-01-10)

# [4.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v4.3.0...v4.4.0) (2024-12-19)

### Bug Fixes

- correctly generate declaration for custom SFC ([acf627d](https://github.com/qmhc/vite-plugin-dts/commit/acf627dc5ffe7eb392436a9952381f466d306d6b)), closes [#394](https://github.com/qmhc/vite-plugin-dts/issues/394)

### Features

- add support for `${configDir}` in path ([#393](https://github.com/qmhc/vite-plugin-dts/issues/393)) ([97e19c0](https://github.com/qmhc/vite-plugin-dts/commit/97e19c07f0c7bc740c93b98b93b27d4862036f9f))
- resolve file if wildcard element is used ([#396](https://github.com/qmhc/vite-plugin-dts/issues/396)) ([bb4650d](https://github.com/qmhc/vite-plugin-dts/commit/bb4650d0f2fc39982822dfeb8fd4197e706b8e55)), closes [#330](https://github.com/qmhc/vite-plugin-dts/issues/330)

# [4.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v4.2.4...v4.3.0) (2024-10-22)

### Features

- upgrade api-extractor and typescript ([#390](https://github.com/qmhc/vite-plugin-dts/issues/390)) ([94cdb59](https://github.com/qmhc/vite-plugin-dts/commit/94cdb59f02ec71348492fbca79dc4a324e607a95))

## [4.2.4](https://github.com/qmhc/vite-plugin-dts/compare/v4.2.3...v4.2.4) (2024-10-11)

### Bug Fixes

- provide default baseUrl and correctly parse tsconfig paths ([#386](https://github.com/qmhc/vite-plugin-dts/issues/386)) ([dc3cbfe](https://github.com/qmhc/vite-plugin-dts/commit/dc3cbfe3451c548fa928bd666c5b467a5fc03a1a)), closes [#330](https://github.com/qmhc/vite-plugin-dts/issues/330) [#330](https://github.com/qmhc/vite-plugin-dts/issues/330)
- should re-emit all source files when change in watch mode ([a7e1c0c](https://github.com/qmhc/vite-plugin-dts/commit/a7e1c0cb80cf25056e02e04414af9412eeeea750)), closes [#383](https://github.com/qmhc/vite-plugin-dts/issues/383)

## [4.2.3](https://github.com/qmhc/vite-plugin-dts/compare/v4.2.2...v4.2.3) (2024-09-30)

### Bug Fixes

- patch for volar with pnp mode ([3bc780a](https://github.com/qmhc/vite-plugin-dts/commit/3bc780abdfec43ec4ae89d9b60877793564e051c)), closes [#385](https://github.com/qmhc/vite-plugin-dts/issues/385)

## [4.2.2](https://github.com/qmhc/vite-plugin-dts/compare/v4.2.1...v4.2.2) (2024-09-24)

### Bug Fixes

- correctly get package info in pnp mode ([984f487](https://github.com/qmhc/vite-plugin-dts/commit/984f487457691ed6fde1e25cb15dc1dc123511f9)), closes [#384](https://github.com/qmhc/vite-plugin-dts/issues/384)

## [4.2.1](https://github.com/qmhc/vite-plugin-dts/compare/v4.2.0...v4.2.1) (2024-09-08)

### Bug Fixes

- remove api-extractor patch ([770d5b1](https://github.com/qmhc/vite-plugin-dts/commit/770d5b175c8512a0472bceacf10ba425a9ffb2ae))

# [4.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v4.1.1...v4.2.0) (2024-09-08)

### Features

- upgrade vue language tools to v2.1 ([#382](https://github.com/qmhc/vite-plugin-dts/issues/382)) ([b76fe5e](https://github.com/qmhc/vite-plugin-dts/commit/b76fe5e9f116d6e4397187b1d037ceea6394edf7))

## [4.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v4.1.0...v4.1.1) (2024-09-06)

### Bug Fixes

- correct resolve Vue when create program ([0621332](https://github.com/qmhc/vite-plugin-dts/commit/0621332f46606b20365f1b2efdd45ef826e32186)), closes [#380](https://github.com/qmhc/vite-plugin-dts/issues/380)

# [4.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v4.0.3...v4.1.0) (2024-09-01)

### Bug Fixes

- correctly parse tsconfig paths with nested imports ([#376](https://github.com/qmhc/vite-plugin-dts/issues/376)) ([10118ae](https://github.com/qmhc/vite-plugin-dts/commit/10118aea62fa1ec70b4d93a9d02f05e8642bd891)), closes [#330](https://github.com/qmhc/vite-plugin-dts/issues/330)
- only clean vue suffix when no duplicated name ([068e711](https://github.com/qmhc/vite-plugin-dts/commit/068e7119ef6d8e1c99ea18d6a0f56194f32be77d)), closes [#372](https://github.com/qmhc/vite-plugin-dts/issues/372)

### Features

- auto switch to original program if no Vue ([a04a191](https://github.com/qmhc/vite-plugin-dts/commit/a04a191566e996defc071344f59cc76414fce61d)), closes [#363](https://github.com/qmhc/vite-plugin-dts/issues/363)

## [4.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v4.0.2...v4.0.3) (2024-08-14)

### Bug Fixes

- normalize typescript lib path for rollup ([#366](https://github.com/qmhc/vite-plugin-dts/issues/366)) ([b0c63df](https://github.com/qmhc/vite-plugin-dts/commit/b0c63dfaf701dc11d2f9cbb2cef5079efe7402e7))

## [4.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v4.0.1...v4.0.2) (2024-08-09)

### Bug Fixes

- ensure inserted index file be a module ([f93e98c](https://github.com/qmhc/vite-plugin-dts/commit/f93e98cd84b486ba426c25304c6ce891acec7745)), closes [#365](https://github.com/qmhc/vite-plugin-dts/issues/365)

## [4.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v4.0.0...v4.0.1) (2024-08-07)

### Bug Fixes

- correctly match normal export ([589901f](https://github.com/qmhc/vite-plugin-dts/commit/589901fead8b3aef589f0652b27277f6e0d0d2ac)), closes [#362](https://github.com/qmhc/vite-plugin-dts/issues/362)

# [4.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v4.0.0-beta.2...v4.0.0) (2024-08-06)

### Bug Fixes

- remove global types for vue declaration files ([e873107](https://github.com/qmhc/vite-plugin-dts/commit/e8731077f326a2fc1fbf304c6a2d77bd96c6b216)), closes [#354](https://github.com/qmhc/vite-plugin-dts/issues/354)
- resolve module preserve to esnext for rollup ([710400a](https://github.com/qmhc/vite-plugin-dts/commit/710400a276c53960dd949243d26f555bf91a421f)), closes [#358](https://github.com/qmhc/vite-plugin-dts/issues/358)
- sync diff line to mappings after transform ([cd5ba32](https://github.com/qmhc/vite-plugin-dts/commit/cd5ba32148ac43a380a24e56d10cf18be59e3e3c)), closes [#356](https://github.com/qmhc/vite-plugin-dts/issues/356)
- typescript lib path resolution for rollup in monorepo ([#360](https://github.com/qmhc/vite-plugin-dts/issues/360)) ([da4af65](https://github.com/qmhc/vite-plugin-dts/commit/da4af6542ea5cf44bd36504ee1a9598dd5b2e92a))

# [4.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v4.0.0-beta.1...v4.0.0-beta.2) (2024-07-30)

### Bug Fixes

- ignore namespace from declaration collect ([b9c3947](https://github.com/qmhc/vite-plugin-dts/commit/b9c394707e74908364284630f1a8c905abadc7f4)), closes [#352](https://github.com/qmhc/vite-plugin-dts/issues/352)
- more accurately generate index file ([e080ce5](https://github.com/qmhc/vite-plugin-dts/commit/e080ce5410468ff6659b5a06a390a6f818216a38)), closes [#345](https://github.com/qmhc/vite-plugin-dts/issues/345)

### Features

- upgrade volar ([1935414](https://github.com/qmhc/vite-plugin-dts/commit/193541411dfefa5c002a9db4e129200e3fa665d2)), closes [#354](https://github.com/qmhc/vite-plugin-dts/issues/354) [#355](https://github.com/qmhc/vite-plugin-dts/issues/355)

# [4.0.0-beta.1](https://github.com/qmhc/vite-plugin-dts/compare/v4.0.0-beta.0...v4.0.0-beta.1) (2024-07-18)

### Bug Fixes

- should parse files option into include ([b219453](https://github.com/qmhc/vite-plugin-dts/commit/b219453f9aea53c5690509bd77ed0cb1c1d11248)), closes [#337](https://github.com/qmhc/vite-plugin-dts/issues/337)

### Features

- dynamic query svelte version ([1769133](https://github.com/qmhc/vite-plugin-dts/commit/1769133f3fc77ae88bc726e37836f649962d6518)), closes [#299](https://github.com/qmhc/vite-plugin-dts/issues/299)

# [4.0.0-beta.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.9.1...v4.0.0-beta.0) (2024-07-17)

### Bug Fixes

- support module extension for rollup types ([#339](https://github.com/qmhc/vite-plugin-dts/issues/339)) ([bd1b52a](https://github.com/qmhc/vite-plugin-dts/commit/bd1b52a7ce275843976a2674a84f2b2e28a89bb9))

### Features

- support export sugared syntax in package.json ([#340](https://github.com/qmhc/vite-plugin-dts/issues/340)) ([2fd3c6b](https://github.com/qmhc/vite-plugin-dts/commit/2fd3c6bd6c9c305c76cd50cfe5b0c56211de60c4))
- upgrade Volar to 2 ([#336](https://github.com/qmhc/vite-plugin-dts/issues/336)) ([7a5fe9a](https://github.com/qmhc/vite-plugin-dts/commit/7a5fe9a55d8503f4af88e935f4b7d3399a4a832e))

## [3.9.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.9.0...v3.9.1) (2024-05-05)

### Bug Fixes

- correctly process cleaning .vue paths ([0a3ad73](https://github.com/qmhc/vite-plugin-dts/commit/0a3ad732f269eeaf838ee44604e143595ac60916)), closes [#325](https://github.com/qmhc/vite-plugin-dts/issues/325)

# [3.9.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.8.3...v3.9.0) (2024-04-23)

### Features

- add afterRollup option ([791a1b7](https://github.com/qmhc/vite-plugin-dts/commit/791a1b7455e8715e068aef84e4c9877157d8cf22)), closes [#322](https://github.com/qmhc/vite-plugin-dts/issues/322)

## [3.8.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.8.2...v3.8.3) (2024-04-15)

### Bug Fixes

- correctly test export default ([b84c6e2](https://github.com/qmhc/vite-plugin-dts/commit/b84c6e298e3bb7f6922aa9abf6ff9ce6268eb552)), closes [#319](https://github.com/qmhc/vite-plugin-dts/issues/319)

## [3.8.2](https://github.com/qmhc/vite-plugin-dts/compare/v3.8.1...v3.8.2) (2024-04-12)

### Bug Fixes

- correctly process aliases which are inside generic types ([0d204d9](https://github.com/qmhc/vite-plugin-dts/commit/0d204d9cfb4738588290bd4e5f443622d75607e9)), closes [#317](https://github.com/qmhc/vite-plugin-dts/issues/317)
- ignore walk for module declaration node ([1d65015](https://github.com/qmhc/vite-plugin-dts/commit/1d65015cba51e2911fd8cb01a1fd853bd77590e5)), closes [#318](https://github.com/qmhc/vite-plugin-dts/issues/318)

## [3.8.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.8.0...v3.8.1) (2024-03-28)

### Bug Fixes

- correct process property names in imports ([fb320fb](https://github.com/qmhc/vite-plugin-dts/commit/fb320fb8140cd7559f4a8c3f8277927720b6936d)), closes [#316](https://github.com/qmhc/vite-plugin-dts/issues/316)

# [3.8.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.7.3...v3.8.0) (2024-03-27)

### Bug Fixes

- add syntactic and semantic diagnostics ([#310](https://github.com/qmhc/vite-plugin-dts/issues/310)) ([7c10782](https://github.com/qmhc/vite-plugin-dts/commit/7c10782284ebe728ab0d8850269fcc1ecae8310e))

### Features

- collect declared modules when rollup types ([39606bd](https://github.com/qmhc/vite-plugin-dts/commit/39606bd34534e2783300e351ba8bbed7f70d6d6a)), closes [#240](https://github.com/qmhc/vite-plugin-dts/issues/240)

## [3.7.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.7.2...v3.7.3) (2024-02-21)

### Bug Fixes

- incorrect process for removing pure import ([d0c0c86](https://github.com/qmhc/vite-plugin-dts/commit/d0c0c867d614c120e7e02a1727699ff18e2b4570)), closes [#301](https://github.com/qmhc/vite-plugin-dts/issues/301)

## [3.7.2](https://github.com/qmhc/vite-plugin-dts/compare/v3.7.1...v3.7.2) (2024-01-24)

### Bug Fixes

- correct match result for alias form tsconfig ([88469d0](https://github.com/qmhc/vite-plugin-dts/commit/88469d0e6a8883a18e93e185da8060b66cf60550)), closes [#298](https://github.com/qmhc/vite-plugin-dts/issues/298)

## [3.7.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.7.0...v3.7.1) (2024-01-15)

### Bug Fixes

- improve aliases replacement logic ([e8827cb](https://github.com/qmhc/vite-plugin-dts/commit/e8827cb6c8be1406e4e3a9a24639b7b54ca20d53)), closes [#294](https://github.com/qmhc/vite-plugin-dts/issues/294)
- manually collect compiler options for types rollup ([0d0b255](https://github.com/qmhc/vite-plugin-dts/commit/0d0b255ad2731746a3ad2b484ee756cd92994651)), closes [#297](https://github.com/qmhc/vite-plugin-dts/issues/297)

# [3.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.6.4...v3.7.0) (2023-12-25)

### Bug Fixes

- incorrect alias transform if using a regexp that ends with slash ([213aa39](https://github.com/qmhc/vite-plugin-dts/commit/213aa39eb7de988afc8a188b485d2656c66a317a)), closes [#290](https://github.com/qmhc/vite-plugin-dts/issues/290)

### Features

- add emittedFiles parameter for afterBuild hook ([b06d2c4](https://github.com/qmhc/vite-plugin-dts/commit/b06d2c4ba9bf3f2a4e75f6b2f61308faedb42a84))

## [3.6.4](https://github.com/qmhc/vite-plugin-dts/compare/v3.6.3...v3.6.4) (2023-11-30)

### Bug Fixes

- should match `as default` export syntax ([6e2d16d](https://github.com/qmhc/vite-plugin-dts/commit/6e2d16dadf5ef90002e9f26ece14cf4e3d587db9)), closes [#285](https://github.com/qmhc/vite-plugin-dts/issues/285)
- using more noticeable diagnostics log ([4ad9a81](https://github.com/qmhc/vite-plugin-dts/commit/4ad9a810d0f42cefc489d2754638baf8cf5f9919))

## [3.6.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.6.2...v3.6.3) (2023-10-30)

### Bug Fixes

- make inject moduleResolution as patch for Vue ([a6f12dc](https://github.com/qmhc/vite-plugin-dts/commit/a6f12dcb52d10941c41a67ca18a3da01d57a4fda)), closes [#280](https://github.com/qmhc/vite-plugin-dts/issues/280)

## [3.6.2](https://github.com/qmhc/vite-plugin-dts/compare/v3.6.1...v3.6.2) (2023-10-27)

### Bug Fixes

- remove passing projectReferences to program ([fc1209c](https://github.com/qmhc/vite-plugin-dts/commit/fc1209c42b9ce2fc0ad4d8227c2cd594500e95f0)), closes [#279](https://github.com/qmhc/vite-plugin-dts/issues/279)

## [3.6.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.6.0...v3.6.1) (2023-10-24)

### Bug Fixes

- ensure `moduleResolution` option in compilerOptions ([01528a4](https://github.com/qmhc/vite-plugin-dts/commit/01528a45050ecae81ff2b2a836839e0e3d468824)), closes [#277](https://github.com/qmhc/vite-plugin-dts/issues/277)
- ensure `rollupTypes` work with `cleanVueFileName` ([261f7bc](https://github.com/qmhc/vite-plugin-dts/commit/261f7bc9579787c7a09dbeef4ef5eb60905a0b8c)), closes [#276](https://github.com/qmhc/vite-plugin-dts/issues/276)

# [3.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.5.4...v3.6.0) (2023-09-26)

### Features

- support custom api-extractor invoke options ([f8c61e5](https://github.com/qmhc/vite-plugin-dts/commit/f8c61e55c26964f46d730eb1309c13b181e54bc2)), closes [#270](https://github.com/qmhc/vite-plugin-dts/issues/270)

## [3.5.4](https://github.com/qmhc/vite-plugin-dts/compare/v3.5.3...v3.5.4) (2023-09-21)

### Bug Fixes

- ensure relative to config path if not specify include/exclude ([a7bab4d](https://github.com/qmhc/vite-plugin-dts/commit/a7bab4d1e23d791dd0d0d91f4cc935032d4c6986)), closes [#272](https://github.com/qmhc/vite-plugin-dts/issues/272)

## [3.5.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.5.2...v3.5.3) (2023-08-29)

### Bug Fixes

- improve fine types path logic ([f1ac4d6](https://github.com/qmhc/vite-plugin-dts/commit/f1ac4d67351c80224d6165b4791b452f4618ee2e))
- minor typo in docs ([#264](https://github.com/qmhc/vite-plugin-dts/issues/264)) ([1d17e9c](https://github.com/qmhc/vite-plugin-dts/commit/1d17e9c7668a6cd18370226f4aa97cd653a86e4c))
- remove typescript version log of api-extractor ([f161ade](https://github.com/qmhc/vite-plugin-dts/commit/f161ade82c4edb91458fcd62435fc1a4c126e217))

## [3.5.2](https://github.com/qmhc/vite-plugin-dts/compare/v3.5.1...v3.5.2) (2023-08-12)

### Reverts

- fails to generate types are already in out dir ([#260](https://github.com/qmhc/vite-plugin-dts/issues/260)) ([86298b6](https://github.com/qmhc/vite-plugin-dts/commit/86298b69676da532c02f557de15254dbe78df8bf))

## [3.5.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.5.0...v3.5.1) (2023-08-06)

### Bug Fixes

- obviate effect of declarationDir config ([7dee40b](https://github.com/qmhc/vite-plugin-dts/commit/7dee40b1ff79f4250d2af543457e73d8dd71e7c6)), closes [#258](https://github.com/qmhc/vite-plugin-dts/issues/258)

# [3.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.4.0...v3.5.0) (2023-08-04)

### Bug Fixes

- ensure resolved type entry path ends with .d.ts ([3767fdf](https://github.com/qmhc/vite-plugin-dts/commit/3767fdfc1cf1789bfa5cab48f93fa9ec0f55cf12))
- unexpected undefined aliases ([fc51b68](https://github.com/qmhc/vite-plugin-dts/commit/fc51b6827eb47b8781384e0501b8242a91f63912)), closes [#257](https://github.com/qmhc/vite-plugin-dts/issues/257)

### Features

- support emit declaration files only ([#253](https://github.com/qmhc/vite-plugin-dts/issues/253)) ([a23d063](https://github.com/qmhc/vite-plugin-dts/commit/a23d06317925c0ccd9a77227590ce18cec44195a))

# [3.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.3.1...v3.4.0) (2023-07-30)

### Bug Fixes

- fails to generate hen types are already in out dir ([284c77f](https://github.com/qmhc/vite-plugin-dts/commit/284c77ff65741f2cddbca3eba380b4a624cec3c7)), closes [#254](https://github.com/qmhc/vite-plugin-dts/issues/254)

### Features

- support override the config of api-extractor ([8f5929c](https://github.com/qmhc/vite-plugin-dts/commit/8f5929c1812ce8ccbff3d3dfd353f42006b761f7))

## [3.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.3.0...v3.3.1) (2023-07-17)

### Bug Fixes

- correct sources path calculate ([0d84180](https://github.com/qmhc/vite-plugin-dts/commit/0d84180ddd237c4bf00c4e0c8e24d9b5d4423db8)), closes [#245](https://github.com/qmhc/vite-plugin-dts/issues/245)
- ensure lib name is valid ([7cfe2ea](https://github.com/qmhc/vite-plugin-dts/commit/7cfe2eac1d1a346d50e83a8ca1ad7a82bb76cbbc)), closes [#247](https://github.com/qmhc/vite-plugin-dts/issues/247)
- unexpected remove reportFileName config ([27fe3c7](https://github.com/qmhc/vite-plugin-dts/commit/27fe3c775b3bdb894c6c3a992c59d255999676a4)), closes [#246](https://github.com/qmhc/vite-plugin-dts/issues/246)

# [3.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.2.0...v3.3.0) (2023-07-14)

### Bug Fixes

- should pass full path to resolver.support ([7088a0c](https://github.com/qmhc/vite-plugin-dts/commit/7088a0c064c604ffdc528b32aa4f025fb9d607ca))
- using raw target when rolling up types ([e53c815](https://github.com/qmhc/vite-plugin-dts/commit/e53c81515ec03000816ea1ad65e0971e78bab689)), closes [#242](https://github.com/qmhc/vite-plugin-dts/issues/242)

### Features

- beforeWriteFile supports return Promise ([5e5b93c](https://github.com/qmhc/vite-plugin-dts/commit/5e5b93cfcb7e906c431c081e910f0edb97b8378c))
- support sourcemap to `.vue` files ([#243](https://github.com/qmhc/vite-plugin-dts/issues/243)) ([7445046](https://github.com/qmhc/vite-plugin-dts/commit/744504652c06bbbe1718edce5729bb7af1431135))

# [3.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.1.1...v3.2.0) (2023-07-08)

### Bug Fixes

- ensure paths are absolute when process public root ([3628877](https://github.com/qmhc/vite-plugin-dts/commit/3628877f447e6383365024dc43dacfa963f41036)), closes [#238](https://github.com/qmhc/vite-plugin-dts/issues/238)
- normalize paths of resolver transform returns ([3b5a945](https://github.com/qmhc/vite-plugin-dts/commit/3b5a94524a9a00de94ebff015934bb72ad71b192))

### Features

- create resolver for json files ([#237](https://github.com/qmhc/vite-plugin-dts/issues/237)) ([53c58c8](https://github.com/qmhc/vite-plugin-dts/commit/53c58c8071cb892e969cec693f6e75a11eea3fec))
- support parse paths of tsconfig.json to aliases ([#236](https://github.com/qmhc/vite-plugin-dts/issues/236)) ([68fc12a](https://github.com/qmhc/vite-plugin-dts/commit/68fc12af50683fef12f302bc95c3ce6da679ae74))

## [3.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.1.0...v3.1.1) (2023-07-07)

### Bug Fixes

- ensure aliases init when using Rollup ([22c69a4](https://github.com/qmhc/vite-plugin-dts/commit/22c69a4df9cffd0444a64de09221e1ec30d7f8c2))

# [3.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.3...v3.1.0) (2023-07-05)

### Features

- support custom resolvers to transform files ([#233](https://github.com/qmhc/vite-plugin-dts/issues/233)) ([be43a4d](https://github.com/qmhc/vite-plugin-dts/commit/be43a4dfd96ae76bb851dde675d222d51ea46e92))

## [3.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.2...v3.0.3) (2023-07-03)

### Bug Fixes

- incorrect lib path process when rollup types ([292b8b7](https://github.com/qmhc/vite-plugin-dts/commit/292b8b7be90e05d2d19febde2e57ec126aba0d33)), closes [#232](https://github.com/qmhc/vite-plugin-dts/issues/232)

## [3.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.1...v3.0.2) (2023-06-30)

### Bug Fixes

- error if exists same lib when transfrom dynamic imports ([c187278](https://github.com/qmhc/vite-plugin-dts/commit/c187278044972ecab077abada4a761398c74223c))

## [3.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0...v3.0.1) (2023-06-30)

### Bug Fixes

- correctly process default dynamic imports ([99105b0](https://github.com/qmhc/vite-plugin-dts/commit/99105b004325ade3c8ccc19c5375fa60716db300)), closes [#222](https://github.com/qmhc/vite-plugin-dts/issues/222)
- ensure collect manual dts for js source files ([5b7c5e5](https://github.com/qmhc/vite-plugin-dts/commit/5b7c5e52c71e457b904dd2f28b430dc9db267cf7)), closes [#184](https://github.com/qmhc/vite-plugin-dts/issues/184)

# [3.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.3...v3.0.0) (2023-06-30)

### Bug Fixes

- correct path process when specify entryRoot ([fc15dac](https://github.com/qmhc/vite-plugin-dts/commit/fc15dacf0561fc598e25f6de435edf97d6edfdf1)), closes [#229](https://github.com/qmhc/vite-plugin-dts/issues/229) [#230](https://github.com/qmhc/vite-plugin-dts/issues/230)
- correct time cost recording ([57eb430](https://github.com/qmhc/vite-plugin-dts/commit/57eb4309aeec4b5773bfa10c6e48a41c2fd23c69))

### Features

- add strictOutput to limit output write ([07224d1](https://github.com/qmhc/vite-plugin-dts/commit/07224d15576ee6528c9068d8a80fcbbf502018f0))

# [3.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2023-06-27)

### Bug Fixes

- incorrect entryRoot when in single inner entry ([96d32d1](https://github.com/qmhc/vite-plugin-dts/commit/96d32d127b73d48ce192424c4596fe24a2d24619))
- promise A+ specification for `isPromise` method ([#228](https://github.com/qmhc/vite-plugin-dts/issues/228)) ([3454a35](https://github.com/qmhc/vite-plugin-dts/commit/3454a356683a97752b0161a0e5be0328aa55a4f3))

# [3.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.3.0...v3.0.0-beta.2) (2023-06-27)

### Features

- transfer to use Volar, support Rollup, improve watch mode ([#226](https://github.com/qmhc/vite-plugin-dts/issues/226)) ([bb7949c](https://github.com/qmhc/vite-plugin-dts/commit/bb7949c841141b2305640d953be4dddf45ce7d1a))

### BREAKING CHANGES

- Deprecated options: `noEmitOnError`, `skipDiagnostics`
  and `libFolderPath`. Rename options: `outputDir` -> `outDir`,
  `tsConfigFilePath` -> `tsconfigPath`.

# [2.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.1.0...v2.3.0) (2023-04-17)

### Features

- compatible with svelte ([#197](https://github.com/qmhc/vite-plugin-dts/issues/197)) ([5d38517](https://github.com/qmhc/vite-plugin-dts/commit/5d38517ee16fdfc2009725b9146bfe38c49d1709))
- supports multiple extends in tsconfig.json ([#202](https://github.com/qmhc/vite-plugin-dts/issues/202)) ([9fdac66](https://github.com/qmhc/vite-plugin-dts/commit/9fdac66c0cfd827791208a31fbbefd1fad4ac2bf)), closes [#200](https://github.com/qmhc/vite-plugin-dts/issues/200)

# [2.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.2...v2.1.0) (2023-03-08)

### Features

- add bundledPackages configuration ([#186](https://github.com/qmhc/vite-plugin-dts/issues/186)) ([8997680](https://github.com/qmhc/vite-plugin-dts/commit/8997680776d8f35ae5248cc73b2d6a734e5dbc4a))

## [2.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.1...v2.0.2) (2023-02-23)

### Bug Fixes

- recursively resolve extended tsconfig path ([#181](https://github.com/qmhc/vite-plugin-dts/issues/181)) ([7ca8502](https://github.com/qmhc/vite-plugin-dts/commit/7ca85026e9a3e345c334222af5ffa823bda380a7))

## [2.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0...v2.0.1) (2023-02-23)

### Bug Fixes

- **vue:** correctly remove components for normal script ([6dbd9af](https://github.com/qmhc/vite-plugin-dts/commit/6dbd9af3bbd8175ef8a1cee4054ba38f330eef0c))
- **vue:** error when parse no argument function ([4db63b4](https://github.com/qmhc/vite-plugin-dts/commit/4db63b4b1b48686146f07e7e69dcbd4a82b33efb))

# [2.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.3...v2.0.0) (2023-02-23)

### Bug Fixes

- ensure watch all the files defined in include ([42a755c](https://github.com/qmhc/vite-plugin-dts/commit/42a755cf502cdfa8dc9dab0f600e8cc2a46eec18)), closes [#151](https://github.com/qmhc/vite-plugin-dts/issues/151)
- incorrect path resolve when copy dts source files ([434f69e](https://github.com/qmhc/vite-plugin-dts/commit/434f69e9629db5b2e74e609ffbc5f9cd436c1177)), closes [#179](https://github.com/qmhc/vite-plugin-dts/issues/179)
- **react:** unlimited init order when using with react plugin ([92b82ff](https://github.com/qmhc/vite-plugin-dts/commit/92b82ff47e0480c86c76e298feaa7cea8e06f7fa)), closes [#148](https://github.com/qmhc/vite-plugin-dts/issues/148)

### BREAKING CHANGES

- `copyDtsFiles` option now default to false.

# [2.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2023-02-21)

### Bug Fixes

- support manually create dts for source file ([2174868](https://github.com/qmhc/vite-plugin-dts/commit/2174868158766fd16a72f9f44b979d2c62d8ab07)), closes [#178](https://github.com/qmhc/vite-plugin-dts/issues/178)

### Features

- support parse types entry from exports in package.json ([f033cf8](https://github.com/qmhc/vite-plugin-dts/commit/f033cf876b51d7e11f1aa562567f3fd1f97d04f5))

# [2.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2023-02-20)

### Bug Fixes

- should re-transform when file changed in watch mode ([eafdd3c](https://github.com/qmhc/vite-plugin-dts/commit/eafdd3ce7d6757f93a378130b8e34f41e17e4004)), closes [#99](https://github.com/qmhc/vite-plugin-dts/issues/99)
- **vue:** preprocess not direct exported component ([8bd769e](https://github.com/qmhc/vite-plugin-dts/commit/8bd769e013f845a8e486d354d9f8517bd7b02e72))

### Features

- support specify log level of plugin ([2c1aeb0](https://github.com/qmhc/vite-plugin-dts/commit/2c1aeb01637aa4511f4e4c26b891b6e7ea235d50)), closes [#177](https://github.com/qmhc/vite-plugin-dts/issues/177)

# [2.0.0-beta.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2023-02-17)

### Bug Fixes

- **vue:** conversion error when using outside ts props ([25307cf](https://github.com/qmhc/vite-plugin-dts/commit/25307cf6ef89aa8501c8c35ff8ca519021adafea)), closes [#175](https://github.com/qmhc/vite-plugin-dts/issues/175)
- **vue:** remove components option before inferring ([90f8ac1](https://github.com/qmhc/vite-plugin-dts/commit/90f8ac160412de418bc7dc31c97f4ca7daa524ca))

# [2.0.0-beta.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.3...v2.0.0-beta.0) (2023-02-16)

### Bug Fixes

- override composite for root tsconfig ([df1d0f4](https://github.com/qmhc/vite-plugin-dts/commit/df1d0f42d0d9d9341d7766f5c147e7e3fa3733cf)), closes [#153](https://github.com/qmhc/vite-plugin-dts/issues/153)
- **vue:** ignore css vars when compile ([6d2369a](https://github.com/qmhc/vite-plugin-dts/commit/6d2369afe31c18b3dff45296d74b90aba86bb656)), closes [#167](https://github.com/qmhc/vite-plugin-dts/issues/167)

### Features

- **vue:** accurate types inferring for exposed and props ([#173](https://github.com/qmhc/vite-plugin-dts/issues/173)) ([c25448c](https://github.com/qmhc/vite-plugin-dts/commit/c25448c90f3b3969d51dbfa31ad5dc3ce2a9a2aa))

## [1.7.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.2...v1.7.3) (2023-02-14)

### Bug Fixes

- incorrect compilerOptions when rollup dts ([9dd8d9c](https://github.com/qmhc/vite-plugin-dts/commit/9dd8d9c41bed7f79e24ee890c1f28d867346326e)), closes [#171](https://github.com/qmhc/vite-plugin-dts/issues/171)
- normalize `mts` and `cts` declaration files extension ([410288a](https://github.com/qmhc/vite-plugin-dts/commit/410288ac65d7fb4a3065d93c6d7be9e2a8dd3f77)), closes [#169](https://github.com/qmhc/vite-plugin-dts/issues/169)

## [1.7.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.1...v1.7.2) (2023-01-31)

### Bug Fixes

- correct .d.ts extension in multiple outputs ([5c9709c](https://github.com/qmhc/vite-plugin-dts/commit/5c9709c4082ee36f2f28b4ad6e21b846aa27d5d6)), closes [#144](https://github.com/qmhc/vite-plugin-dts/issues/144)
- insertTypesEntry config supports publishConfig.types ([#164](https://github.com/qmhc/vite-plugin-dts/issues/164)) ([dae4ef9](https://github.com/qmhc/vite-plugin-dts/commit/dae4ef9de1175cf5bdc5a7dedfa60d7bab381dba))
- mark typescript as external dependency ([#160](https://github.com/qmhc/vite-plugin-dts/issues/160)) ([31e10d4](https://github.com/qmhc/vite-plugin-dts/commit/31e10d4ec2a37148ad63fdfb141264d6c4966135))

## [1.7.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.0...v1.7.1) (2022-11-14)

### Bug Fixes

- ensure exulde working when transform ([aea8ebd](https://github.com/qmhc/vite-plugin-dts/commit/aea8ebdc4eac489bc62ccebf3552421bd43d318c)), closes [#143](https://github.com/qmhc/vite-plugin-dts/issues/143) [#140](https://github.com/qmhc/vite-plugin-dts/issues/140) [#97](https://github.com/qmhc/vite-plugin-dts/issues/97)
- import vite plugin type via dynamic import ([8bd73c8](https://github.com/qmhc/vite-plugin-dts/commit/8bd73c8fae010ba0d32df8b144345b7f641a6085)), closes [#139](https://github.com/qmhc/vite-plugin-dts/issues/139)

# [1.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.6...v1.7.0) (2022-11-07)

### Bug Fixes

- compiler missing plugin `decorators-legacy` ([#138](https://github.com/qmhc/vite-plugin-dts/issues/138)) ([717af2f](https://github.com/qmhc/vite-plugin-dts/commit/717af2f4bc1b5bd549339179bc5b75dbbd9a348a))
- derprecate logDiagnostics option ([e405328](https://github.com/qmhc/vite-plugin-dts/commit/e405328f64870919a3ee4100fac087870ed4662e))
- incorrect compiler address resolution ([#133](https://github.com/qmhc/vite-plugin-dts/issues/133)) ([01cc125](https://github.com/qmhc/vite-plugin-dts/commit/01cc125ea98b1994e364487f73d71b0cb6ebcdbf))

### Features

- support customize typescript lib path ([27b83f3](https://github.com/qmhc/vite-plugin-dts/commit/27b83f3423f50307852257f3747c112f2f3cd325)), closes [#134](https://github.com/qmhc/vite-plugin-dts/issues/134)
- support multiple entries for lib mode ([1fafe54](https://github.com/qmhc/vite-plugin-dts/commit/1fafe54991431ce86a404ecb7e179ef1aa8aff0a)), closes [#136](https://github.com/qmhc/vite-plugin-dts/issues/136)

## [1.6.6](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.5...v1.6.6) (2022-10-13)

### Bug Fixes

- adapt @microsoft/api-extractor 7.33+ ([5acb4be](https://github.com/qmhc/vite-plugin-dts/commit/5acb4be4d1e4fe41e42a38ec9e92eeeb6f3a9c15))
- always ship included dts files into soure ([fc345e3](https://github.com/qmhc/vite-plugin-dts/commit/fc345e31b79fd7ca40581727d1964f80d1b9db82)), closes [#126](https://github.com/qmhc/vite-plugin-dts/issues/126)

## [1.6.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.4...v1.6.5) (2022-10-06)

### Bug Fixes

- remove pnpm limitation in preinstall to support npm@6 ([d7167b8](https://github.com/qmhc/vite-plugin-dts/commit/d7167b83381c54075e0e9114c07fe9451b6ffa2d)), closes [#123](https://github.com/qmhc/vite-plugin-dts/issues/123)

## [1.6.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.3...v1.6.4) (2022-09-30)

### Bug Fixes

- patch cjs vars for esm scope ([57e093d](https://github.com/qmhc/vite-plugin-dts/commit/57e093d734e4b81bbeeecbd694b269cca698f914)), closes [#119](https://github.com/qmhc/vite-plugin-dts/issues/119) [#122](https://github.com/qmhc/vite-plugin-dts/issues/122)

## [1.6.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.2...v1.6.3) (2022-09-30)

### Bug Fixes

- both support cjs and esm(using by tsx) ([38bd6a6](https://github.com/qmhc/vite-plugin-dts/commit/38bd6a6789fe375dd5da0aec1ea9b6816751719a))

## [1.6.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.1...v1.6.2) (2022-09-30)

### Bug Fixes

- ensure generate dts for type only files ([f3f4919](https://github.com/qmhc/vite-plugin-dts/commit/f3f4919fa441a27b7d842f1e64dd8d711bd05ec9)), closes [#118](https://github.com/qmhc/vite-plugin-dts/issues/118)

## [1.6.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.0...v1.6.1) (2022-09-28)

### Bug Fixes

- path error in cjs running ([0832af4](https://github.com/qmhc/vite-plugin-dts/commit/0832af4ab49d8166e14b6897bb1538ec6ddf3bb5))

# [1.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.5.0...v1.6.0) (2022-09-28)

### Bug Fixes

- correct compilerOptions.outDir for project init ([8699219](https://github.com/qmhc/vite-plugin-dts/commit/86992194411017e75b1d17c3f72d631267ec187b))
- type error occurred while define `defineProps` retruns as `props` ([41eb53a](https://github.com/qmhc/vite-plugin-dts/commit/41eb53a4da681d2c809dc8a7674a03284acbea02)), closes [#113](https://github.com/qmhc/vite-plugin-dts/issues/113)

### Features

- skip write file when `beforeWriteFile` return exact `false` ([9404ebc](https://github.com/qmhc/vite-plugin-dts/commit/9404ebc811b919a59a21b954d4ba4d43be255390)), closes [#110](https://github.com/qmhc/vite-plugin-dts/issues/110)

# [1.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.1...v1.5.0) (2022-09-11)

### Features

- improve aliasesExclude to support more flexible definition ([f652523](https://github.com/qmhc/vite-plugin-dts/commit/f6525235758b0d29347feb7f21a5085dc81b13a4)), closes [#93](https://github.com/qmhc/vite-plugin-dts/issues/93)

## [1.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.0...v1.4.1) (2022-08-01)

### Bug Fixes

- includes `extends` field when parse tsconfig.json ([#96](https://github.com/qmhc/vite-plugin-dts/issues/96)) ([2631de0](https://github.com/qmhc/vite-plugin-dts/commit/2631de0725e89083752fd590ff604f3f763abd3a))

# [1.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.1...v1.4.0) (2022-07-20)

### Bug Fixes

- ensure emit dts when no script sfc in vue component ([869a466](https://github.com/qmhc/vite-plugin-dts/commit/869a4662af2e690b2e1e63faf941a9e1343dd6ea)), closes [#88](https://github.com/qmhc/vite-plugin-dts/issues/88)

### Features

- support vue 2.7 ([c4e2c4b](https://github.com/qmhc/vite-plugin-dts/commit/c4e2c4b479da837ab697220284ac3c54e89c54a0)), closes [#87](https://github.com/qmhc/vite-plugin-dts/issues/87)

## [1.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.0...v1.3.1) (2022-07-18)

### Bug Fixes

- dynamiclly adjust the exports of inserted index file ([abc9431](https://github.com/qmhc/vite-plugin-dts/commit/abc943143b97dbec0935b62171b16faeebd6fbf4)), closes [#81](https://github.com/qmhc/vite-plugin-dts/issues/81) [#86](https://github.com/qmhc/vite-plugin-dts/issues/86)
- missing inserted entry when multiple outputs ([39ff8ab](https://github.com/qmhc/vite-plugin-dts/commit/39ff8abc0e1dda232c3cf1e6f25ff8daddb37acb))

# [1.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.1...v1.3.0) (2022-07-13)

### Bug Fixes

- aliasesExclude not work when includes empty value ([#85](https://github.com/qmhc/vite-plugin-dts/issues/85)) ([8b9b9aa](https://github.com/qmhc/vite-plugin-dts/commit/8b9b9aa4e9d1c4fa84a2945f4f2421c9269240ff))
- correct type files generate when root is set ([#68](https://github.com/qmhc/vite-plugin-dts/issues/68)) ([0b491bd](https://github.com/qmhc/vite-plugin-dts/commit/0b491bd3720c5b6065dd00a00f9b95e39bf6c8fe))

### Features

- support multiple output dirs ([cd19ee7](https://github.com/qmhc/vite-plugin-dts/commit/cd19ee7f4cf25906a3ffcd89a6c93baf7c7266ed))

## [1.2.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.0...v1.2.1) (2022-07-05)

### Bug Fixes

- add parser plugins param for vue compiler ([7d6bd16](https://github.com/qmhc/vite-plugin-dts/commit/7d6bd16af88701152bf8847e160acf6169bd0918)), closes [#78](https://github.com/qmhc/vite-plugin-dts/issues/78)
- insert entry fail when no default export in source entry ([#82](https://github.com/qmhc/vite-plugin-dts/issues/82)) ([1a4b161](https://github.com/qmhc/vite-plugin-dts/commit/1a4b161647ba1826c3bfa7c9ca5ee7ca4c3ee4bf))

# [1.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.1...v1.2.0) (2022-05-24)

### Bug Fixes

- support read typings form package.json ([6b1bb29](https://github.com/qmhc/vite-plugin-dts/commit/6b1bb2951512733091b950f5767bfe5a1cbe8992))

### Features

- add `aliasesExclude` option ([#75](https://github.com/qmhc/vite-plugin-dts/issues/75)) ([7588ba4](https://github.com/qmhc/vite-plugin-dts/commit/7588ba4755c19e25ca2482b95cb99a59621e693e)), closes [#73](https://github.com/qmhc/vite-plugin-dts/issues/73)
- support override compilerOptions when rollup up ([995612d](https://github.com/qmhc/vite-plugin-dts/commit/995612d5eafa6b610a9ab8826ee7b8691c673b4e)), closes [#74](https://github.com/qmhc/vite-plugin-dts/issues/74)

## [1.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.0...v1.1.1) (2022-04-25)

### Bug Fixes

- incorrect rollup entry path ([a9309d8](https://github.com/qmhc/vite-plugin-dts/commit/a9309d8ca8c0531d1579d3a541cd67ac0a37ce1b))

# [1.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.5...v1.1.0) (2022-04-18)

### Bug Fixes

- lose the type of entry export default ([50f55de](https://github.com/qmhc/vite-plugin-dts/commit/50f55de3ec89d7995056c428a37d16e0cd2a6a4a))

### Features

- support rollup dts files after output ([1d87b44](https://github.com/qmhc/vite-plugin-dts/commit/1d87b44dff3c54a5b1b983b060d3d0d4972c1d94))

## [1.0.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.4...v1.0.5) (2022-04-02)

### Bug Fixes

- entryRoot option not work ([#66](https://github.com/qmhc/vite-plugin-dts/issues/66)) ([bca6423](https://github.com/qmhc/vite-plugin-dts/commit/bca64236076a28dbdd7e6e373c46f3af3723b4e1))

## [1.0.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.3...v1.0.4) (2022-03-28)

### Bug Fixes

- transfer 'debug' to dependencies ([7af9232](https://github.com/qmhc/vite-plugin-dts/commit/7af9232e381f6d572a543706d640c6ecdb5a6c00))

## [1.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.2...v1.0.3) (2022-03-25)

### Bug Fixes

- **example:** cannot resolve types through symlinks ([0914a6a](https://github.com/qmhc/vite-plugin-dts/commit/0914a6ad8dde3514f94e586798d6d73a9c2ac165)), closes [#63](https://github.com/qmhc/vite-plugin-dts/issues/63)

## [1.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.1...v1.0.2) (2022-03-24)

### Bug Fixes

- incorrect entryRoot calculation in linux an mac ([0136990](https://github.com/qmhc/vite-plugin-dts/commit/01369903f484eb74ae6fa23b49537fa64d610706)), closes [#62](https://github.com/qmhc/vite-plugin-dts/issues/62)

## [1.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0...v1.0.1) (2022-03-22)

### Bug Fixes

- missing some libs defind in dependencies ([ab7960f](https://github.com/qmhc/vite-plugin-dts/commit/ab7960f0d957aad6945ef469274bca3e142baa87))

# [1.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.10...v1.0.0) (2022-03-22)

### Features

- support entryRoot option ([c939e35](https://github.com/qmhc/vite-plugin-dts/commit/c939e358dfecacaf2dfd2b0d42118c16462c260a)), closes [#59](https://github.com/qmhc/vite-plugin-dts/issues/59)

### BREAKING CHANGES

- The calculating output paths funtion of root option is
  assigned to entryRoot option, and currently will auto calculating the
  smallest public path as the default value for entryRoot option.

## [0.9.10](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.9...v0.9.10) (2022-03-12)

### Bug Fixes

- make default include same as tsconfig.json ([5ca7fc5](https://github.com/qmhc/vite-plugin-dts/commit/5ca7fc51ab321d4b25ce9856c0e52894c1264d44)), closes [#58](https://github.com/qmhc/vite-plugin-dts/issues/58)

## [0.9.9](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.8...v0.9.9) (2022-01-11)

### Bug Fixes

- should filter vite virtual files ([5fb24ba](https://github.com/qmhc/vite-plugin-dts/commit/5fb24ba2c40ad2ef81e45c33533aada3bb5aefd3)), closes [#50](https://github.com/qmhc/vite-plugin-dts/issues/50)

## [0.9.8](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.7...v0.9.8) (2022-01-10)

### Bug Fixes

- put `copyDtsFiles` option in use ([#53](https://github.com/qmhc/vite-plugin-dts/issues/53)) ([261700f](https://github.com/qmhc/vite-plugin-dts/commit/261700f80a60b3bc1f22f391e00d9999205fe0d2)), closes [#52](https://github.com/qmhc/vite-plugin-dts/issues/52)

## [0.9.7](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.6...v0.9.7) (2021-12-30)

### Bug Fixes

- inserted entry not through beforeWriteFile ([e16b9b1](https://github.com/qmhc/vite-plugin-dts/commit/e16b9b15c66df887bac0ca0b6be05e4d1f8628ed)), closes [#48](https://github.com/qmhc/vite-plugin-dts/issues/48)

## [0.9.6](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.5...v0.9.6) (2021-11-23)

### Bug Fixes

- aliases are not resolved when find ends with '/' ([f04aab2](https://github.com/qmhc/vite-plugin-dts/commit/f04aab21f9f6dc02316a9ff3a9cd43e90cd97828)), closes [#37](https://github.com/qmhc/vite-plugin-dts/issues/37)
- not equally transform dts source files ([ede5146](https://github.com/qmhc/vite-plugin-dts/commit/ede514649282aec786549d490e8127824913914c))

## [0.9.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.4...v0.9.5) (2021-11-21)

### Bug Fixes

- ensure dts source files through beforeWriteFile hook ([3265412](https://github.com/qmhc/vite-plugin-dts/commit/3265412e26dd8736fefab0cf99e920d01bb246c5)), closes [#43](https://github.com/qmhc/vite-plugin-dts/issues/43)

## [0.9.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.3...v0.9.4) (2021-11-10)

### Bug Fixes

- cannot resolve types defined in dts files ([666ca09](https://github.com/qmhc/vite-plugin-dts/commit/666ca0925075bed6926f648a210f37d56af9577b)), closes [#42](https://github.com/qmhc/vite-plugin-dts/issues/42)
- take unused error when using setup-script ([c4145b7](https://github.com/qmhc/vite-plugin-dts/commit/c4145b7352359c79b8ba7c01a1c4afeace4dbc7c))

## [0.9.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.2...v0.9.3) (2021-11-03)

### Bug Fixes

- support require for cjs exports ([cc5aff9](https://github.com/qmhc/vite-plugin-dts/commit/cc5aff9b9906fc87f6012fb66566fd1937a9381e)), closes [#39](https://github.com/qmhc/vite-plugin-dts/issues/39)

## [0.9.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.1...v0.9.2) (2021-10-20)

### Bug Fixes

- support optional @vue/compiler-sfc ([34e1958](https://github.com/qmhc/vite-plugin-dts/commit/34e19587aa64c802cfbd99c5c8018bde8d0e1e2f))

## [0.9.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.3...v0.9.1) (2021-10-18)

### Bug Fixes

- watch mode not update ts/js files ([32a5699](https://github.com/qmhc/vite-plugin-dts/commit/32a5699a9b4f5a24b2a2a870ced43850a0573f82))

### Features

- add afterBuild hook option ([#34](https://github.com/qmhc/vite-plugin-dts/issues/34)) ([e836689](https://github.com/qmhc/vite-plugin-dts/commit/e83668988dab189d185ed9637032f7f80ba1e4db))
- afterDiagnostic and afterBuild support async ([c92d548](https://github.com/qmhc/vite-plugin-dts/commit/c92d54826b81f50fbb38fa909df730b323b75b24))
- skip dependencies by default ([8ca3ed3](https://github.com/qmhc/vite-plugin-dts/commit/8ca3ed30dfcc23c2dd9822fe6ef460a6c832dfe2))

## [0.8.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.2...v0.8.3) (2021-10-11)

### Bug Fixes

- support tsconfig.json using comments ([6e6e446](https://github.com/qmhc/vite-plugin-dts/commit/6e6e44683592060ebd27d1c5712058f2f0f0aeb6)), closes [#31](https://github.com/qmhc/vite-plugin-dts/issues/31)

## [0.8.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.1...v0.8.2) (2021-09-30)

### Bug Fixes

- create correct source for tsx/jsx script ([#29](https://github.com/qmhc/vite-plugin-dts/issues/29)) ([109721e](https://github.com/qmhc/vite-plugin-dts/commit/109721e89007cd702fe73fded44cc6b7efeef46e))

## [0.8.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.0...v0.8.1) (2021-09-22)

### Bug Fixes

- declarationDir make no file generated ([3313a19](https://github.com/qmhc/vite-plugin-dts/commit/3313a19da669bda7fa8fff3a5211652bc22e7413)), closes [#27](https://github.com/qmhc/vite-plugin-dts/issues/27)
- rewrite noEmit option when init porject ([735d26b](https://github.com/qmhc/vite-plugin-dts/commit/735d26b3cad9a90dd272a08448d238045306a1ba)), closes [#28](https://github.com/qmhc/vite-plugin-dts/issues/28)

# [0.8.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.7.0...v0.8.0) (2021-09-13)

### Bug Fixes

- adapt vue@3.2.6+ setup script ([1b62755](https://github.com/qmhc/vite-plugin-dts/commit/1b62755947972a67a034830cc7478fa1a65924c4))
- ouput files out of include bounds ([e1cdedf](https://github.com/qmhc/vite-plugin-dts/commit/e1cdedfc8b41a311d2c22674bd132f23242482ac)), closes [#24](https://github.com/qmhc/vite-plugin-dts/issues/24)

### Features

- add afterDiagnostic option ([7d43ece](https://github.com/qmhc/vite-plugin-dts/commit/7d43ece8fcb9b71d645982a45b01cd9136c525d8)), closes [#22](https://github.com/qmhc/vite-plugin-dts/issues/22)
- support build watch mode ([a920d97](https://github.com/qmhc/vite-plugin-dts/commit/a920d97825dced453f5f70d8776944c02b50e14b)), closes [#5](https://github.com/qmhc/vite-plugin-dts/issues/5)

# [0.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.6.0...v0.7.0) (2021-08-23)

### Bug Fixes

- support using script-setup alongside script ([39517ad](https://github.com/qmhc/vite-plugin-dts/commit/39517ad7119a4b97be7a2d874b43cb73cfa95f07)), closes [#21](https://github.com/qmhc/vite-plugin-dts/issues/21)

### Features

- add noEmitOnError and logDiagnostics options ([8a840fe](https://github.com/qmhc/vite-plugin-dts/commit/8a840fe2692e07e8e881c58ca8f6887d08493cc9))

# [0.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.3...v0.6.0) (2021-08-14)

### Bug Fixes

- resolve alias when using default import ([3121d5b](https://github.com/qmhc/vite-plugin-dts/commit/3121d5bd56a6863e5175c95b00d7a3dedc0cff6d)), closes [#20](https://github.com/qmhc/vite-plugin-dts/issues/20)

### Features

- add copyDtsFiles option ([bdab8c4](https://github.com/qmhc/vite-plugin-dts/commit/bdab8c4b4efa894209c2edeffbbe4d79680eafe9)), closes [#19](https://github.com/qmhc/vite-plugin-dts/issues/19)

## [0.5.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.2...v0.5.3) (2021-07-22)

### Bug Fixes

- add allowJs option dynamically ([36f8de2](https://github.com/qmhc/vite-plugin-dts/commit/36f8de28c68cd52945faeb375cd2931c6ad0468a)), closes [#17](https://github.com/qmhc/vite-plugin-dts/issues/17)
- add js and jsx files when allowJs ([0e1e6f7](https://github.com/qmhc/vite-plugin-dts/commit/0e1e6f7c09c85e169568b2c77c66d452d04a28a2))

## [0.5.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.1...v0.5.2) (2021-07-01)

### Bug Fixes

- cannot require @vue/compiler-sfc in monorepo ([fd9b5c1](https://github.com/qmhc/vite-plugin-dts/commit/fd9b5c1c018feb87e374cdf6671b7b8be14e775b)), closes [#14](https://github.com/qmhc/vite-plugin-dts/issues/14)

## [0.5.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.0...v0.5.1) (2021-06-18)

### Bug Fixes

- support insert entry from '.tsx' file ([e38b7c4](https://github.com/qmhc/vite-plugin-dts/commit/e38b7c4686a8d7405583a97078e97fbef4757da6))

# [0.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.3...v0.5.0) (2021-06-15)

### Bug Fixes

- ignore none export files ([f9c41bc](https://github.com/qmhc/vite-plugin-dts/commit/f9c41bc4e2fd498b53aa366a5f8f2a57589b6176))
- rename insertIndexEntry to insertTypesEntry ([c9d392e](https://github.com/qmhc/vite-plugin-dts/commit/c9d392ec3def98b541bb597c5ed38933b225fe5e))

### Features

- add clearPureImport option ([0357f69](https://github.com/qmhc/vite-plugin-dts/commit/0357f69485204f24d9830a4de59558a23eb66e19))
- defaults insert entry base on pkg.types ([9c71f28](https://github.com/qmhc/vite-plugin-dts/commit/9c71f28eac50d23a42d92bd79ac6d09f1be0544d))
- optional insert index type entry ([592a701](https://github.com/qmhc/vite-plugin-dts/commit/592a701d6213f955306df9de0c7f1d3243a28faa))

## [0.4.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.2...v0.4.3) (2021-06-11)

### Bug Fixes

- back off optional chaining and nullish coalescing ([8e09129](https://github.com/qmhc/vite-plugin-dts/commit/8e09129c1600a013a2c3c50983ab7f358216757f)), closes [#2](https://github.com/qmhc/vite-plugin-dts/issues/2)
- transform fs/promise to fs-extra ([1794b0b](https://github.com/qmhc/vite-plugin-dts/commit/1794b0b93baf4212b4efc5ef06a697adf70e4933)), closes [#4](https://github.com/qmhc/vite-plugin-dts/issues/4)

### Performance Improvements

- use menory result generate bundle ([858bf31](https://github.com/qmhc/vite-plugin-dts/commit/858bf317d16c995feb73e53339d61f7602e36484))

## [0.4.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.1...v0.4.2) (2021-06-09)

### Bug Fixes

- incomplete remove pure import ([a1fd54e](https://github.com/qmhc/vite-plugin-dts/commit/a1fd54e769f1b50ee5858d33879b2a6732625797))
- mamual set include and exclude ([b6fb510](https://github.com/qmhc/vite-plugin-dts/commit/b6fb5106206df9de83276687dd1451fa3d882067))
- more accurate normalize glob ([1d65c47](https://github.com/qmhc/vite-plugin-dts/commit/1d65c47811344a6b566a8dcf22cd22d9298d5a02))
- set rootDir if not set in compilerOptions ([a1d83d2](https://github.com/qmhc/vite-plugin-dts/commit/a1d83d2aa56a32ebef11b9d98fa508a6d9fbd412)), closes [#3](https://github.com/qmhc/vite-plugin-dts/issues/3)
- transform alias include dynamic imports ([a6919b4](https://github.com/qmhc/vite-plugin-dts/commit/a6919b4760cf5cbefbdad1ac674b8a8275dc27dd))
- transform alias include dynamic imports ([3a5511e](https://github.com/qmhc/vite-plugin-dts/commit/3a5511e3e0b961d7f4ac393da623502a186a0538))

## [0.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.0...v0.4.1) (2021-06-08)

### Bug Fixes

- dynamic import regexp endings include ']' and ')' ([e5f37a6](https://github.com/qmhc/vite-plugin-dts/commit/e5f37a6d9e232e268ea1b2ec2eadb6c7bc7d7115))

# [0.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.5...v0.4.0) (2021-06-08)

### Bug Fixes

- bundle only once for multiple formats ([be37fbf](https://github.com/qmhc/vite-plugin-dts/commit/be37fbfcbd03dd23c73908a2d7f2d019437e003a))

### Features

- bundle all from tsconfig include ([252554a](https://github.com/qmhc/vite-plugin-dts/commit/252554af1fa403af1ee00dba16a1c7938e7374c6))

### BREAKING CHANGES

- Deprecated include and exclude options

## [0.3.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.4...v0.3.5) (2021-06-08)

### Bug Fixes

- includes prue type export files ([1341359](https://github.com/qmhc/vite-plugin-dts/commit/1341359b9943fd961ec0d3d40d71252e77c73390))
- incorrect path in transform alias ([d686ff9](https://github.com/qmhc/vite-plugin-dts/commit/d686ff94157c400d7f235331a47fbb9d452afeb9))

## [0.3.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.3...v0.3.4) (2021-06-07)

### Bug Fixes

- remove pure import ([fe241de](https://github.com/qmhc/vite-plugin-dts/commit/fe241de5b583cb5bf2dde83383a8a43e53724ce1))
- static import include relative path ([4065217](https://github.com/qmhc/vite-plugin-dts/commit/40652178b9071509269e6b66cbbbcb3562cf349d))

## [0.3.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.2...v0.3.3) (2021-06-07)

### Bug Fixes

- keep output relative to root not to entry dir ([e83ec64](https://github.com/qmhc/vite-plugin-dts/commit/e83ec643536f888166055a5495db3e2fd1030584))

### BREAKING CHANGES

- Ouput declaration structure no longer relative to entry dir

## [0.3.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.1...v0.3.2) (2021-06-07)

### Bug Fixes

- default root base on vite config ([787ebc1](https://github.com/qmhc/vite-plugin-dts/commit/787ebc175d07370628589a6fc73e325b29655a0b))

## [0.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.0...v0.3.1) (2021-06-06)

### Bug Fixes

- vue file explicit type lost ([d0d8803](https://github.com/qmhc/vite-plugin-dts/commit/d0d88038fb51d71dfb71ab4d0223600801d50349))

# [0.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.2.0...v0.3.0) (2021-06-06)

### Bug Fixes

- transform alias import to relative path ([6d5a2d5](https://github.com/qmhc/vite-plugin-dts/commit/6d5a2d5b5ba691b5572727cbf42b340d05964951))

### Features

- projectOptions refine to compilerOptions and tsConfigFilePath ([eb61113](https://github.com/qmhc/vite-plugin-dts/commit/eb611135446fff7bc82e3bd0d1d2b856a829de98))

### BREAKING CHANGES

- projectOptions no longer supported, the project init should be up to the plugin.

# [0.2.0](https://github.com/qmhc/vite-plugin-dts/compare/b2f0c0aa6eea5b48703248eca3294c5d845404ba...v0.2.0) (2021-06-05)

### Features

- add beforeWriteFile hook ([139e818](https://github.com/qmhc/vite-plugin-dts/commit/139e818cecfa80d4208b3f5ced55e7db57bf7e52))
- add outputDir option ([f289723](https://github.com/qmhc/vite-plugin-dts/commit/f289723672279795c0b96aaac3abf83dd8913b20))
- add transform dynamic import to static ([b2f0c0a](https://github.com/qmhc/vite-plugin-dts/commit/b2f0c0aa6eea5b48703248eca3294c5d845404ba))

## [3.5.4](https://github.com/qmhc/vite-plugin-dts/compare/v3.5.3...v3.5.4) (2023-09-21)

### Bug Fixes

- ensure relative to config path if not specify include/exclude ([a7bab4d](https://github.com/qmhc/vite-plugin-dts/commit/a7bab4d1e23d791dd0d0d91f4cc935032d4c6986)), closes [#272](https://github.com/qmhc/vite-plugin-dts/issues/272)

## [3.5.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.5.2...v3.5.3) (2023-08-29)

### Bug Fixes

- improve fine types path logic ([f1ac4d6](https://github.com/qmhc/vite-plugin-dts/commit/f1ac4d67351c80224d6165b4791b452f4618ee2e))
- minor typo in docs ([#264](https://github.com/qmhc/vite-plugin-dts/issues/264)) ([1d17e9c](https://github.com/qmhc/vite-plugin-dts/commit/1d17e9c7668a6cd18370226f4aa97cd653a86e4c))
- remove typescript version log of api-extractor ([f161ade](https://github.com/qmhc/vite-plugin-dts/commit/f161ade82c4edb91458fcd62435fc1a4c126e217))

## [3.5.2](https://github.com/qmhc/vite-plugin-dts/compare/v3.5.1...v3.5.2) (2023-08-12)

### Reverts

- fails to generate types are already in out dir ([#260](https://github.com/qmhc/vite-plugin-dts/issues/260)) ([86298b6](https://github.com/qmhc/vite-plugin-dts/commit/86298b69676da532c02f557de15254dbe78df8bf))

## [3.5.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.5.0...v3.5.1) (2023-08-06)

### Bug Fixes

- obviate effect of declarationDir config ([7dee40b](https://github.com/qmhc/vite-plugin-dts/commit/7dee40b1ff79f4250d2af543457e73d8dd71e7c6)), closes [#258](https://github.com/qmhc/vite-plugin-dts/issues/258)

# [3.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.4.0...v3.5.0) (2023-08-04)

### Bug Fixes

- ensure resolved type entry path ends with .d.ts ([3767fdf](https://github.com/qmhc/vite-plugin-dts/commit/3767fdfc1cf1789bfa5cab48f93fa9ec0f55cf12))
- unexpected undefined aliases ([fc51b68](https://github.com/qmhc/vite-plugin-dts/commit/fc51b6827eb47b8781384e0501b8242a91f63912)), closes [#257](https://github.com/qmhc/vite-plugin-dts/issues/257)

### Features

- support emit declaration files only ([#253](https://github.com/qmhc/vite-plugin-dts/issues/253)) ([a23d063](https://github.com/qmhc/vite-plugin-dts/commit/a23d06317925c0ccd9a77227590ce18cec44195a))

# [3.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.3.1...v3.4.0) (2023-07-30)

### Bug Fixes

- fails to generate hen types are already in out dir ([284c77f](https://github.com/qmhc/vite-plugin-dts/commit/284c77ff65741f2cddbca3eba380b4a624cec3c7)), closes [#254](https://github.com/qmhc/vite-plugin-dts/issues/254)

### Features

- support override the config of api-extractor ([8f5929c](https://github.com/qmhc/vite-plugin-dts/commit/8f5929c1812ce8ccbff3d3dfd353f42006b761f7))

## [3.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.3.0...v3.3.1) (2023-07-17)

### Bug Fixes

- correct sources path calculate ([0d84180](https://github.com/qmhc/vite-plugin-dts/commit/0d84180ddd237c4bf00c4e0c8e24d9b5d4423db8)), closes [#245](https://github.com/qmhc/vite-plugin-dts/issues/245)
- ensure lib name is valid ([7cfe2ea](https://github.com/qmhc/vite-plugin-dts/commit/7cfe2eac1d1a346d50e83a8ca1ad7a82bb76cbbc)), closes [#247](https://github.com/qmhc/vite-plugin-dts/issues/247)
- unexpected remove reportFileName config ([27fe3c7](https://github.com/qmhc/vite-plugin-dts/commit/27fe3c775b3bdb894c6c3a992c59d255999676a4)), closes [#246](https://github.com/qmhc/vite-plugin-dts/issues/246)

# [3.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.2.0...v3.3.0) (2023-07-14)

### Bug Fixes

- should pass full path to resolver.support ([7088a0c](https://github.com/qmhc/vite-plugin-dts/commit/7088a0c064c604ffdc528b32aa4f025fb9d607ca))
- using raw target when rolling up types ([e53c815](https://github.com/qmhc/vite-plugin-dts/commit/e53c81515ec03000816ea1ad65e0971e78bab689)), closes [#242](https://github.com/qmhc/vite-plugin-dts/issues/242)

### Features

- beforeWriteFile supports return Promise ([5e5b93c](https://github.com/qmhc/vite-plugin-dts/commit/5e5b93cfcb7e906c431c081e910f0edb97b8378c))
- support sourcemap to `.vue` files ([#243](https://github.com/qmhc/vite-plugin-dts/issues/243)) ([7445046](https://github.com/qmhc/vite-plugin-dts/commit/744504652c06bbbe1718edce5729bb7af1431135))

# [3.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.1.1...v3.2.0) (2023-07-08)

### Bug Fixes

- ensure paths are absolute when process public root ([3628877](https://github.com/qmhc/vite-plugin-dts/commit/3628877f447e6383365024dc43dacfa963f41036)), closes [#238](https://github.com/qmhc/vite-plugin-dts/issues/238)
- normalize paths of resolver transform returns ([3b5a945](https://github.com/qmhc/vite-plugin-dts/commit/3b5a94524a9a00de94ebff015934bb72ad71b192))

### Features

- create resolver for json files ([#237](https://github.com/qmhc/vite-plugin-dts/issues/237)) ([53c58c8](https://github.com/qmhc/vite-plugin-dts/commit/53c58c8071cb892e969cec693f6e75a11eea3fec))
- support parse paths of tsconfig.json to aliases ([#236](https://github.com/qmhc/vite-plugin-dts/issues/236)) ([68fc12a](https://github.com/qmhc/vite-plugin-dts/commit/68fc12af50683fef12f302bc95c3ce6da679ae74))

## [3.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.1.0...v3.1.1) (2023-07-07)

### Bug Fixes

- ensure aliases init when using Rollup ([22c69a4](https://github.com/qmhc/vite-plugin-dts/commit/22c69a4df9cffd0444a64de09221e1ec30d7f8c2))

# [3.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.3...v3.1.0) (2023-07-05)

### Features

- support custom resolvers to transform files ([#233](https://github.com/qmhc/vite-plugin-dts/issues/233)) ([be43a4d](https://github.com/qmhc/vite-plugin-dts/commit/be43a4dfd96ae76bb851dde675d222d51ea46e92))

## [3.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.2...v3.0.3) (2023-07-03)

### Bug Fixes

- incorrect lib path process when rollup types ([292b8b7](https://github.com/qmhc/vite-plugin-dts/commit/292b8b7be90e05d2d19febde2e57ec126aba0d33)), closes [#232](https://github.com/qmhc/vite-plugin-dts/issues/232)

## [3.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.1...v3.0.2) (2023-06-30)

### Bug Fixes

- error if exists same lib when transfrom dynamic imports ([c187278](https://github.com/qmhc/vite-plugin-dts/commit/c187278044972ecab077abada4a761398c74223c))

## [3.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0...v3.0.1) (2023-06-30)

### Bug Fixes

- correctly process default dynamic imports ([99105b0](https://github.com/qmhc/vite-plugin-dts/commit/99105b004325ade3c8ccc19c5375fa60716db300)), closes [#222](https://github.com/qmhc/vite-plugin-dts/issues/222)
- ensure collect manual dts for js source files ([5b7c5e5](https://github.com/qmhc/vite-plugin-dts/commit/5b7c5e52c71e457b904dd2f28b430dc9db267cf7)), closes [#184](https://github.com/qmhc/vite-plugin-dts/issues/184)

# [3.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.3...v3.0.0) (2023-06-30)

### Bug Fixes

- correct path process when specify entryRoot ([fc15dac](https://github.com/qmhc/vite-plugin-dts/commit/fc15dacf0561fc598e25f6de435edf97d6edfdf1)), closes [#229](https://github.com/qmhc/vite-plugin-dts/issues/229) [#230](https://github.com/qmhc/vite-plugin-dts/issues/230)
- correct time cost recording ([57eb430](https://github.com/qmhc/vite-plugin-dts/commit/57eb4309aeec4b5773bfa10c6e48a41c2fd23c69))

### Features

- add strictOutput to limit output write ([07224d1](https://github.com/qmhc/vite-plugin-dts/commit/07224d15576ee6528c9068d8a80fcbbf502018f0))

# [3.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2023-06-27)

### Bug Fixes

- incorrect entryRoot when in single inner entry ([96d32d1](https://github.com/qmhc/vite-plugin-dts/commit/96d32d127b73d48ce192424c4596fe24a2d24619))
- promise A+ specification for `isPromise` method ([#228](https://github.com/qmhc/vite-plugin-dts/issues/228)) ([3454a35](https://github.com/qmhc/vite-plugin-dts/commit/3454a356683a97752b0161a0e5be0328aa55a4f3))

# [3.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.3.0...v3.0.0-beta.2) (2023-06-27)

### Features

- transfer to use Volar, support Rollup, improve watch mode ([#226](https://github.com/qmhc/vite-plugin-dts/issues/226)) ([bb7949c](https://github.com/qmhc/vite-plugin-dts/commit/bb7949c841141b2305640d953be4dddf45ce7d1a))

### BREAKING CHANGES

- Deprecated options: `noEmitOnError`, `skipDiagnostics`
  and `libFolderPath`. Rename options: `outputDir` -> `outDir`,
  `tsConfigFilePath` -> `tsconfigPath`.

# [2.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.1.0...v2.3.0) (2023-04-17)

### Features

- compatible with svelte ([#197](https://github.com/qmhc/vite-plugin-dts/issues/197)) ([5d38517](https://github.com/qmhc/vite-plugin-dts/commit/5d38517ee16fdfc2009725b9146bfe38c49d1709))
- supports multiple extends in tsconfig.json ([#202](https://github.com/qmhc/vite-plugin-dts/issues/202)) ([9fdac66](https://github.com/qmhc/vite-plugin-dts/commit/9fdac66c0cfd827791208a31fbbefd1fad4ac2bf)), closes [#200](https://github.com/qmhc/vite-plugin-dts/issues/200)

# [2.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.2...v2.1.0) (2023-03-08)

### Features

- add bundledPackages configuration ([#186](https://github.com/qmhc/vite-plugin-dts/issues/186)) ([8997680](https://github.com/qmhc/vite-plugin-dts/commit/8997680776d8f35ae5248cc73b2d6a734e5dbc4a))

## [2.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.1...v2.0.2) (2023-02-23)

### Bug Fixes

- recursively resolve extended tsconfig path ([#181](https://github.com/qmhc/vite-plugin-dts/issues/181)) ([7ca8502](https://github.com/qmhc/vite-plugin-dts/commit/7ca85026e9a3e345c334222af5ffa823bda380a7))

## [2.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0...v2.0.1) (2023-02-23)

### Bug Fixes

- **vue:** correctly remove components for normal script ([6dbd9af](https://github.com/qmhc/vite-plugin-dts/commit/6dbd9af3bbd8175ef8a1cee4054ba38f330eef0c))
- **vue:** error when parse no argument function ([4db63b4](https://github.com/qmhc/vite-plugin-dts/commit/4db63b4b1b48686146f07e7e69dcbd4a82b33efb))

# [2.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.3...v2.0.0) (2023-02-23)

### Bug Fixes

- ensure watch all the files defined in include ([42a755c](https://github.com/qmhc/vite-plugin-dts/commit/42a755cf502cdfa8dc9dab0f600e8cc2a46eec18)), closes [#151](https://github.com/qmhc/vite-plugin-dts/issues/151)
- incorrect path resolve when copy dts source files ([434f69e](https://github.com/qmhc/vite-plugin-dts/commit/434f69e9629db5b2e74e609ffbc5f9cd436c1177)), closes [#179](https://github.com/qmhc/vite-plugin-dts/issues/179)
- **react:** unlimited init order when using with react plugin ([92b82ff](https://github.com/qmhc/vite-plugin-dts/commit/92b82ff47e0480c86c76e298feaa7cea8e06f7fa)), closes [#148](https://github.com/qmhc/vite-plugin-dts/issues/148)

### BREAKING CHANGES

- `copyDtsFiles` option now default to false.

# [2.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2023-02-21)

### Bug Fixes

- support manually create dts for source file ([2174868](https://github.com/qmhc/vite-plugin-dts/commit/2174868158766fd16a72f9f44b979d2c62d8ab07)), closes [#178](https://github.com/qmhc/vite-plugin-dts/issues/178)

### Features

- support parse types entry from exports in package.json ([f033cf8](https://github.com/qmhc/vite-plugin-dts/commit/f033cf876b51d7e11f1aa562567f3fd1f97d04f5))

# [2.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2023-02-20)

### Bug Fixes

- should re-transform when file changed in watch mode ([eafdd3c](https://github.com/qmhc/vite-plugin-dts/commit/eafdd3ce7d6757f93a378130b8e34f41e17e4004)), closes [#99](https://github.com/qmhc/vite-plugin-dts/issues/99)
- **vue:** preprocess not direct exported component ([8bd769e](https://github.com/qmhc/vite-plugin-dts/commit/8bd769e013f845a8e486d354d9f8517bd7b02e72))

### Features

- support specify log level of plugin ([2c1aeb0](https://github.com/qmhc/vite-plugin-dts/commit/2c1aeb01637aa4511f4e4c26b891b6e7ea235d50)), closes [#177](https://github.com/qmhc/vite-plugin-dts/issues/177)

# [2.0.0-beta.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2023-02-17)

### Bug Fixes

- **vue:** conversion error when using outside ts props ([25307cf](https://github.com/qmhc/vite-plugin-dts/commit/25307cf6ef89aa8501c8c35ff8ca519021adafea)), closes [#175](https://github.com/qmhc/vite-plugin-dts/issues/175)
- **vue:** remove components option before inferring ([90f8ac1](https://github.com/qmhc/vite-plugin-dts/commit/90f8ac160412de418bc7dc31c97f4ca7daa524ca))

# [2.0.0-beta.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.3...v2.0.0-beta.0) (2023-02-16)

### Bug Fixes

- override composite for root tsconfig ([df1d0f4](https://github.com/qmhc/vite-plugin-dts/commit/df1d0f42d0d9d9341d7766f5c147e7e3fa3733cf)), closes [#153](https://github.com/qmhc/vite-plugin-dts/issues/153)
- **vue:** ignore css vars when compile ([6d2369a](https://github.com/qmhc/vite-plugin-dts/commit/6d2369afe31c18b3dff45296d74b90aba86bb656)), closes [#167](https://github.com/qmhc/vite-plugin-dts/issues/167)

### Features

- **vue:** accurate types inferring for exposed and props ([#173](https://github.com/qmhc/vite-plugin-dts/issues/173)) ([c25448c](https://github.com/qmhc/vite-plugin-dts/commit/c25448c90f3b3969d51dbfa31ad5dc3ce2a9a2aa))

## [1.7.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.2...v1.7.3) (2023-02-14)

### Bug Fixes

- incorrect compilerOptions when rollup dts ([9dd8d9c](https://github.com/qmhc/vite-plugin-dts/commit/9dd8d9c41bed7f79e24ee890c1f28d867346326e)), closes [#171](https://github.com/qmhc/vite-plugin-dts/issues/171)
- normalize `mts` and `cts` declaration files extension ([410288a](https://github.com/qmhc/vite-plugin-dts/commit/410288ac65d7fb4a3065d93c6d7be9e2a8dd3f77)), closes [#169](https://github.com/qmhc/vite-plugin-dts/issues/169)

## [1.7.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.1...v1.7.2) (2023-01-31)

### Bug Fixes

- correct .d.ts extension in multiple outputs ([5c9709c](https://github.com/qmhc/vite-plugin-dts/commit/5c9709c4082ee36f2f28b4ad6e21b846aa27d5d6)), closes [#144](https://github.com/qmhc/vite-plugin-dts/issues/144)
- insertTypesEntry config supports publishConfig.types ([#164](https://github.com/qmhc/vite-plugin-dts/issues/164)) ([dae4ef9](https://github.com/qmhc/vite-plugin-dts/commit/dae4ef9de1175cf5bdc5a7dedfa60d7bab381dba))
- mark typescript as external dependency ([#160](https://github.com/qmhc/vite-plugin-dts/issues/160)) ([31e10d4](https://github.com/qmhc/vite-plugin-dts/commit/31e10d4ec2a37148ad63fdfb141264d6c4966135))

## [1.7.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.0...v1.7.1) (2022-11-14)

### Bug Fixes

- ensure exulde working when transform ([aea8ebd](https://github.com/qmhc/vite-plugin-dts/commit/aea8ebdc4eac489bc62ccebf3552421bd43d318c)), closes [#143](https://github.com/qmhc/vite-plugin-dts/issues/143) [#140](https://github.com/qmhc/vite-plugin-dts/issues/140) [#97](https://github.com/qmhc/vite-plugin-dts/issues/97)
- import vite plugin type via dynamic import ([8bd73c8](https://github.com/qmhc/vite-plugin-dts/commit/8bd73c8fae010ba0d32df8b144345b7f641a6085)), closes [#139](https://github.com/qmhc/vite-plugin-dts/issues/139)

# [1.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.6...v1.7.0) (2022-11-07)

### Bug Fixes

- compiler missing plugin `decorators-legacy` ([#138](https://github.com/qmhc/vite-plugin-dts/issues/138)) ([717af2f](https://github.com/qmhc/vite-plugin-dts/commit/717af2f4bc1b5bd549339179bc5b75dbbd9a348a))
- derprecate logDiagnostics option ([e405328](https://github.com/qmhc/vite-plugin-dts/commit/e405328f64870919a3ee4100fac087870ed4662e))
- incorrect compiler address resolution ([#133](https://github.com/qmhc/vite-plugin-dts/issues/133)) ([01cc125](https://github.com/qmhc/vite-plugin-dts/commit/01cc125ea98b1994e364487f73d71b0cb6ebcdbf))

### Features

- support customize typescript lib path ([27b83f3](https://github.com/qmhc/vite-plugin-dts/commit/27b83f3423f50307852257f3747c112f2f3cd325)), closes [#134](https://github.com/qmhc/vite-plugin-dts/issues/134)
- support multiple entries for lib mode ([1fafe54](https://github.com/qmhc/vite-plugin-dts/commit/1fafe54991431ce86a404ecb7e179ef1aa8aff0a)), closes [#136](https://github.com/qmhc/vite-plugin-dts/issues/136)

## [1.6.6](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.5...v1.6.6) (2022-10-13)

### Bug Fixes

- adapt @microsoft/api-extractor 7.33+ ([5acb4be](https://github.com/qmhc/vite-plugin-dts/commit/5acb4be4d1e4fe41e42a38ec9e92eeeb6f3a9c15))
- always ship included dts files into soure ([fc345e3](https://github.com/qmhc/vite-plugin-dts/commit/fc345e31b79fd7ca40581727d1964f80d1b9db82)), closes [#126](https://github.com/qmhc/vite-plugin-dts/issues/126)

## [1.6.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.4...v1.6.5) (2022-10-06)

### Bug Fixes

- remove pnpm limitation in preinstall to support npm@6 ([d7167b8](https://github.com/qmhc/vite-plugin-dts/commit/d7167b83381c54075e0e9114c07fe9451b6ffa2d)), closes [#123](https://github.com/qmhc/vite-plugin-dts/issues/123)

## [1.6.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.3...v1.6.4) (2022-09-30)

### Bug Fixes

- patch cjs vars for esm scope ([57e093d](https://github.com/qmhc/vite-plugin-dts/commit/57e093d734e4b81bbeeecbd694b269cca698f914)), closes [#119](https://github.com/qmhc/vite-plugin-dts/issues/119) [#122](https://github.com/qmhc/vite-plugin-dts/issues/122)

## [1.6.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.2...v1.6.3) (2022-09-30)

### Bug Fixes

- both support cjs and esm(using by tsx) ([38bd6a6](https://github.com/qmhc/vite-plugin-dts/commit/38bd6a6789fe375dd5da0aec1ea9b6816751719a))

## [1.6.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.1...v1.6.2) (2022-09-30)

### Bug Fixes

- ensure generate dts for type only files ([f3f4919](https://github.com/qmhc/vite-plugin-dts/commit/f3f4919fa441a27b7d842f1e64dd8d711bd05ec9)), closes [#118](https://github.com/qmhc/vite-plugin-dts/issues/118)

## [1.6.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.0...v1.6.1) (2022-09-28)

### Bug Fixes

- path error in cjs running ([0832af4](https://github.com/qmhc/vite-plugin-dts/commit/0832af4ab49d8166e14b6897bb1538ec6ddf3bb5))

# [1.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.5.0...v1.6.0) (2022-09-28)

### Bug Fixes

- correct compilerOptions.outDir for project init ([8699219](https://github.com/qmhc/vite-plugin-dts/commit/86992194411017e75b1d17c3f72d631267ec187b))
- type error occurred while define `defineProps` retruns as `props` ([41eb53a](https://github.com/qmhc/vite-plugin-dts/commit/41eb53a4da681d2c809dc8a7674a03284acbea02)), closes [#113](https://github.com/qmhc/vite-plugin-dts/issues/113)

### Features

- skip write file when `beforeWriteFile` return exact `false` ([9404ebc](https://github.com/qmhc/vite-plugin-dts/commit/9404ebc811b919a59a21b954d4ba4d43be255390)), closes [#110](https://github.com/qmhc/vite-plugin-dts/issues/110)

# [1.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.1...v1.5.0) (2022-09-11)

### Features

- improve aliasesExclude to support more flexible definition ([f652523](https://github.com/qmhc/vite-plugin-dts/commit/f6525235758b0d29347feb7f21a5085dc81b13a4)), closes [#93](https://github.com/qmhc/vite-plugin-dts/issues/93)

## [1.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.0...v1.4.1) (2022-08-01)

### Bug Fixes

- includes `extends` field when parse tsconfig.json ([#96](https://github.com/qmhc/vite-plugin-dts/issues/96)) ([2631de0](https://github.com/qmhc/vite-plugin-dts/commit/2631de0725e89083752fd590ff604f3f763abd3a))

# [1.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.1...v1.4.0) (2022-07-20)

### Bug Fixes

- ensure emit dts when no script sfc in vue component ([869a466](https://github.com/qmhc/vite-plugin-dts/commit/869a4662af2e690b2e1e63faf941a9e1343dd6ea)), closes [#88](https://github.com/qmhc/vite-plugin-dts/issues/88)

### Features

- support vue 2.7 ([c4e2c4b](https://github.com/qmhc/vite-plugin-dts/commit/c4e2c4b479da837ab697220284ac3c54e89c54a0)), closes [#87](https://github.com/qmhc/vite-plugin-dts/issues/87)

## [1.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.0...v1.3.1) (2022-07-18)

### Bug Fixes

- dynamiclly adjust the exports of inserted index file ([abc9431](https://github.com/qmhc/vite-plugin-dts/commit/abc943143b97dbec0935b62171b16faeebd6fbf4)), closes [#81](https://github.com/qmhc/vite-plugin-dts/issues/81) [#86](https://github.com/qmhc/vite-plugin-dts/issues/86)
- missing inserted entry when multiple outputs ([39ff8ab](https://github.com/qmhc/vite-plugin-dts/commit/39ff8abc0e1dda232c3cf1e6f25ff8daddb37acb))

# [1.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.1...v1.3.0) (2022-07-13)

### Bug Fixes

- aliasesExclude not work when includes empty value ([#85](https://github.com/qmhc/vite-plugin-dts/issues/85)) ([8b9b9aa](https://github.com/qmhc/vite-plugin-dts/commit/8b9b9aa4e9d1c4fa84a2945f4f2421c9269240ff))
- correct type files generate when root is set ([#68](https://github.com/qmhc/vite-plugin-dts/issues/68)) ([0b491bd](https://github.com/qmhc/vite-plugin-dts/commit/0b491bd3720c5b6065dd00a00f9b95e39bf6c8fe))

### Features

- support multiple output dirs ([cd19ee7](https://github.com/qmhc/vite-plugin-dts/commit/cd19ee7f4cf25906a3ffcd89a6c93baf7c7266ed))

## [1.2.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.0...v1.2.1) (2022-07-05)

### Bug Fixes

- add parser plugins param for vue compiler ([7d6bd16](https://github.com/qmhc/vite-plugin-dts/commit/7d6bd16af88701152bf8847e160acf6169bd0918)), closes [#78](https://github.com/qmhc/vite-plugin-dts/issues/78)
- insert entry fail when no default export in source entry ([#82](https://github.com/qmhc/vite-plugin-dts/issues/82)) ([1a4b161](https://github.com/qmhc/vite-plugin-dts/commit/1a4b161647ba1826c3bfa7c9ca5ee7ca4c3ee4bf))

# [1.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.1...v1.2.0) (2022-05-24)

### Bug Fixes

- support read typings form package.json ([6b1bb29](https://github.com/qmhc/vite-plugin-dts/commit/6b1bb2951512733091b950f5767bfe5a1cbe8992))

### Features

- add `aliasesExclude` option ([#75](https://github.com/qmhc/vite-plugin-dts/issues/75)) ([7588ba4](https://github.com/qmhc/vite-plugin-dts/commit/7588ba4755c19e25ca2482b95cb99a59621e693e)), closes [#73](https://github.com/qmhc/vite-plugin-dts/issues/73)
- support override compilerOptions when rollup up ([995612d](https://github.com/qmhc/vite-plugin-dts/commit/995612d5eafa6b610a9ab8826ee7b8691c673b4e)), closes [#74](https://github.com/qmhc/vite-plugin-dts/issues/74)

## [1.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.0...v1.1.1) (2022-04-25)

### Bug Fixes

- incorrect rollup entry path ([a9309d8](https://github.com/qmhc/vite-plugin-dts/commit/a9309d8ca8c0531d1579d3a541cd67ac0a37ce1b))

# [1.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.5...v1.1.0) (2022-04-18)

### Bug Fixes

- lose the type of entry export default ([50f55de](https://github.com/qmhc/vite-plugin-dts/commit/50f55de3ec89d7995056c428a37d16e0cd2a6a4a))

### Features

- support rollup dts files after output ([1d87b44](https://github.com/qmhc/vite-plugin-dts/commit/1d87b44dff3c54a5b1b983b060d3d0d4972c1d94))

## [1.0.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.4...v1.0.5) (2022-04-02)

### Bug Fixes

- entryRoot option not work ([#66](https://github.com/qmhc/vite-plugin-dts/issues/66)) ([bca6423](https://github.com/qmhc/vite-plugin-dts/commit/bca64236076a28dbdd7e6e373c46f3af3723b4e1))

## [1.0.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.3...v1.0.4) (2022-03-28)

### Bug Fixes

- transfer 'debug' to dependencies ([7af9232](https://github.com/qmhc/vite-plugin-dts/commit/7af9232e381f6d572a543706d640c6ecdb5a6c00))

## [1.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.2...v1.0.3) (2022-03-25)

### Bug Fixes

- **example:** cannot resolve types through symlinks ([0914a6a](https://github.com/qmhc/vite-plugin-dts/commit/0914a6ad8dde3514f94e586798d6d73a9c2ac165)), closes [#63](https://github.com/qmhc/vite-plugin-dts/issues/63)

## [1.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.1...v1.0.2) (2022-03-24)

### Bug Fixes

- incorrect entryRoot calculation in linux an mac ([0136990](https://github.com/qmhc/vite-plugin-dts/commit/01369903f484eb74ae6fa23b49537fa64d610706)), closes [#62](https://github.com/qmhc/vite-plugin-dts/issues/62)

## [1.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0...v1.0.1) (2022-03-22)

### Bug Fixes

- missing some libs defind in dependencies ([ab7960f](https://github.com/qmhc/vite-plugin-dts/commit/ab7960f0d957aad6945ef469274bca3e142baa87))

# [1.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.10...v1.0.0) (2022-03-22)

### Features

- support entryRoot option ([c939e35](https://github.com/qmhc/vite-plugin-dts/commit/c939e358dfecacaf2dfd2b0d42118c16462c260a)), closes [#59](https://github.com/qmhc/vite-plugin-dts/issues/59)

### BREAKING CHANGES

- The calculating output paths funtion of root option is
  assigned to entryRoot option, and currently will auto calculating the
  smallest public path as the default value for entryRoot option.

## [0.9.10](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.9...v0.9.10) (2022-03-12)

### Bug Fixes

- make default include same as tsconfig.json ([5ca7fc5](https://github.com/qmhc/vite-plugin-dts/commit/5ca7fc51ab321d4b25ce9856c0e52894c1264d44)), closes [#58](https://github.com/qmhc/vite-plugin-dts/issues/58)

## [0.9.9](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.8...v0.9.9) (2022-01-11)

### Bug Fixes

- should filter vite virtual files ([5fb24ba](https://github.com/qmhc/vite-plugin-dts/commit/5fb24ba2c40ad2ef81e45c33533aada3bb5aefd3)), closes [#50](https://github.com/qmhc/vite-plugin-dts/issues/50)

## [0.9.8](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.7...v0.9.8) (2022-01-10)

### Bug Fixes

- put `copyDtsFiles` option in use ([#53](https://github.com/qmhc/vite-plugin-dts/issues/53)) ([261700f](https://github.com/qmhc/vite-plugin-dts/commit/261700f80a60b3bc1f22f391e00d9999205fe0d2)), closes [#52](https://github.com/qmhc/vite-plugin-dts/issues/52)

## [0.9.7](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.6...v0.9.7) (2021-12-30)

### Bug Fixes

- inserted entry not through beforeWriteFile ([e16b9b1](https://github.com/qmhc/vite-plugin-dts/commit/e16b9b15c66df887bac0ca0b6be05e4d1f8628ed)), closes [#48](https://github.com/qmhc/vite-plugin-dts/issues/48)

## [0.9.6](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.5...v0.9.6) (2021-11-23)

### Bug Fixes

- aliases are not resolved when find ends with '/' ([f04aab2](https://github.com/qmhc/vite-plugin-dts/commit/f04aab21f9f6dc02316a9ff3a9cd43e90cd97828)), closes [#37](https://github.com/qmhc/vite-plugin-dts/issues/37)
- not equally transform dts source files ([ede5146](https://github.com/qmhc/vite-plugin-dts/commit/ede514649282aec786549d490e8127824913914c))

## [0.9.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.4...v0.9.5) (2021-11-21)

### Bug Fixes

- ensure dts source files through beforeWriteFile hook ([3265412](https://github.com/qmhc/vite-plugin-dts/commit/3265412e26dd8736fefab0cf99e920d01bb246c5)), closes [#43](https://github.com/qmhc/vite-plugin-dts/issues/43)

## [0.9.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.3...v0.9.4) (2021-11-10)

### Bug Fixes

- cannot resolve types defined in dts files ([666ca09](https://github.com/qmhc/vite-plugin-dts/commit/666ca0925075bed6926f648a210f37d56af9577b)), closes [#42](https://github.com/qmhc/vite-plugin-dts/issues/42)
- take unused error when using setup-script ([c4145b7](https://github.com/qmhc/vite-plugin-dts/commit/c4145b7352359c79b8ba7c01a1c4afeace4dbc7c))

## [0.9.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.2...v0.9.3) (2021-11-03)

### Bug Fixes

- support require for cjs exports ([cc5aff9](https://github.com/qmhc/vite-plugin-dts/commit/cc5aff9b9906fc87f6012fb66566fd1937a9381e)), closes [#39](https://github.com/qmhc/vite-plugin-dts/issues/39)

## [0.9.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.1...v0.9.2) (2021-10-20)

### Bug Fixes

- support optional @vue/compiler-sfc ([34e1958](https://github.com/qmhc/vite-plugin-dts/commit/34e19587aa64c802cfbd99c5c8018bde8d0e1e2f))

## [0.9.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.3...v0.9.1) (2021-10-18)

### Bug Fixes

- watch mode not update ts/js files ([32a5699](https://github.com/qmhc/vite-plugin-dts/commit/32a5699a9b4f5a24b2a2a870ced43850a0573f82))

### Features

- add afterBuild hook option ([#34](https://github.com/qmhc/vite-plugin-dts/issues/34)) ([e836689](https://github.com/qmhc/vite-plugin-dts/commit/e83668988dab189d185ed9637032f7f80ba1e4db))
- afterDiagnostic and afterBuild support async ([c92d548](https://github.com/qmhc/vite-plugin-dts/commit/c92d54826b81f50fbb38fa909df730b323b75b24))
- skip dependencies by default ([8ca3ed3](https://github.com/qmhc/vite-plugin-dts/commit/8ca3ed30dfcc23c2dd9822fe6ef460a6c832dfe2))

## [0.8.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.2...v0.8.3) (2021-10-11)

### Bug Fixes

- support tsconfig.json using comments ([6e6e446](https://github.com/qmhc/vite-plugin-dts/commit/6e6e44683592060ebd27d1c5712058f2f0f0aeb6)), closes [#31](https://github.com/qmhc/vite-plugin-dts/issues/31)

## [0.8.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.1...v0.8.2) (2021-09-30)

### Bug Fixes

- create correct source for tsx/jsx script ([#29](https://github.com/qmhc/vite-plugin-dts/issues/29)) ([109721e](https://github.com/qmhc/vite-plugin-dts/commit/109721e89007cd702fe73fded44cc6b7efeef46e))

## [0.8.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.0...v0.8.1) (2021-09-22)

### Bug Fixes

- declarationDir make no file generated ([3313a19](https://github.com/qmhc/vite-plugin-dts/commit/3313a19da669bda7fa8fff3a5211652bc22e7413)), closes [#27](https://github.com/qmhc/vite-plugin-dts/issues/27)
- rewrite noEmit option when init porject ([735d26b](https://github.com/qmhc/vite-plugin-dts/commit/735d26b3cad9a90dd272a08448d238045306a1ba)), closes [#28](https://github.com/qmhc/vite-plugin-dts/issues/28)

# [0.8.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.7.0...v0.8.0) (2021-09-13)

### Bug Fixes

- adapt vue@3.2.6+ setup script ([1b62755](https://github.com/qmhc/vite-plugin-dts/commit/1b62755947972a67a034830cc7478fa1a65924c4))
- ouput files out of include bounds ([e1cdedf](https://github.com/qmhc/vite-plugin-dts/commit/e1cdedfc8b41a311d2c22674bd132f23242482ac)), closes [#24](https://github.com/qmhc/vite-plugin-dts/issues/24)

### Features

- add afterDiagnostic option ([7d43ece](https://github.com/qmhc/vite-plugin-dts/commit/7d43ece8fcb9b71d645982a45b01cd9136c525d8)), closes [#22](https://github.com/qmhc/vite-plugin-dts/issues/22)
- support build watch mode ([a920d97](https://github.com/qmhc/vite-plugin-dts/commit/a920d97825dced453f5f70d8776944c02b50e14b)), closes [#5](https://github.com/qmhc/vite-plugin-dts/issues/5)

# [0.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.6.0...v0.7.0) (2021-08-23)

### Bug Fixes

- support using script-setup alongside script ([39517ad](https://github.com/qmhc/vite-plugin-dts/commit/39517ad7119a4b97be7a2d874b43cb73cfa95f07)), closes [#21](https://github.com/qmhc/vite-plugin-dts/issues/21)

### Features

- add noEmitOnError and logDiagnostics options ([8a840fe](https://github.com/qmhc/vite-plugin-dts/commit/8a840fe2692e07e8e881c58ca8f6887d08493cc9))

# [0.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.3...v0.6.0) (2021-08-14)

### Bug Fixes

- resolve alias when using default import ([3121d5b](https://github.com/qmhc/vite-plugin-dts/commit/3121d5bd56a6863e5175c95b00d7a3dedc0cff6d)), closes [#20](https://github.com/qmhc/vite-plugin-dts/issues/20)

### Features

- add copyDtsFiles option ([bdab8c4](https://github.com/qmhc/vite-plugin-dts/commit/bdab8c4b4efa894209c2edeffbbe4d79680eafe9)), closes [#19](https://github.com/qmhc/vite-plugin-dts/issues/19)

## [0.5.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.2...v0.5.3) (2021-07-22)

### Bug Fixes

- add allowJs option dynamically ([36f8de2](https://github.com/qmhc/vite-plugin-dts/commit/36f8de28c68cd52945faeb375cd2931c6ad0468a)), closes [#17](https://github.com/qmhc/vite-plugin-dts/issues/17)
- add js and jsx files when allowJs ([0e1e6f7](https://github.com/qmhc/vite-plugin-dts/commit/0e1e6f7c09c85e169568b2c77c66d452d04a28a2))

## [0.5.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.1...v0.5.2) (2021-07-01)

### Bug Fixes

- cannot require @vue/compiler-sfc in monorepo ([fd9b5c1](https://github.com/qmhc/vite-plugin-dts/commit/fd9b5c1c018feb87e374cdf6671b7b8be14e775b)), closes [#14](https://github.com/qmhc/vite-plugin-dts/issues/14)

## [0.5.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.0...v0.5.1) (2021-06-18)

### Bug Fixes

- support insert entry from '.tsx' file ([e38b7c4](https://github.com/qmhc/vite-plugin-dts/commit/e38b7c4686a8d7405583a97078e97fbef4757da6))

# [0.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.3...v0.5.0) (2021-06-15)

### Bug Fixes

- ignore none export files ([f9c41bc](https://github.com/qmhc/vite-plugin-dts/commit/f9c41bc4e2fd498b53aa366a5f8f2a57589b6176))
- rename insertIndexEntry to insertTypesEntry ([c9d392e](https://github.com/qmhc/vite-plugin-dts/commit/c9d392ec3def98b541bb597c5ed38933b225fe5e))

### Features

- add clearPureImport option ([0357f69](https://github.com/qmhc/vite-plugin-dts/commit/0357f69485204f24d9830a4de59558a23eb66e19))
- defaults insert entry base on pkg.types ([9c71f28](https://github.com/qmhc/vite-plugin-dts/commit/9c71f28eac50d23a42d92bd79ac6d09f1be0544d))
- optional insert index type entry ([592a701](https://github.com/qmhc/vite-plugin-dts/commit/592a701d6213f955306df9de0c7f1d3243a28faa))

## [0.4.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.2...v0.4.3) (2021-06-11)

### Bug Fixes

- back off optional chaining and nullish coalescing ([8e09129](https://github.com/qmhc/vite-plugin-dts/commit/8e09129c1600a013a2c3c50983ab7f358216757f)), closes [#2](https://github.com/qmhc/vite-plugin-dts/issues/2)
- transform fs/promise to fs-extra ([1794b0b](https://github.com/qmhc/vite-plugin-dts/commit/1794b0b93baf4212b4efc5ef06a697adf70e4933)), closes [#4](https://github.com/qmhc/vite-plugin-dts/issues/4)

### Performance Improvements

- use menory result generate bundle ([858bf31](https://github.com/qmhc/vite-plugin-dts/commit/858bf317d16c995feb73e53339d61f7602e36484))

## [0.4.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.1...v0.4.2) (2021-06-09)

### Bug Fixes

- incomplete remove pure import ([a1fd54e](https://github.com/qmhc/vite-plugin-dts/commit/a1fd54e769f1b50ee5858d33879b2a6732625797))
- mamual set include and exclude ([b6fb510](https://github.com/qmhc/vite-plugin-dts/commit/b6fb5106206df9de83276687dd1451fa3d882067))
- more accurate normalize glob ([1d65c47](https://github.com/qmhc/vite-plugin-dts/commit/1d65c47811344a6b566a8dcf22cd22d9298d5a02))
- set rootDir if not set in compilerOptions ([a1d83d2](https://github.com/qmhc/vite-plugin-dts/commit/a1d83d2aa56a32ebef11b9d98fa508a6d9fbd412)), closes [#3](https://github.com/qmhc/vite-plugin-dts/issues/3)
- transform alias include dynamic imports ([a6919b4](https://github.com/qmhc/vite-plugin-dts/commit/a6919b4760cf5cbefbdad1ac674b8a8275dc27dd))
- transform alias include dynamic imports ([3a5511e](https://github.com/qmhc/vite-plugin-dts/commit/3a5511e3e0b961d7f4ac393da623502a186a0538))

## [0.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.0...v0.4.1) (2021-06-08)

### Bug Fixes

- dynamic import regexp endings include ']' and ')' ([e5f37a6](https://github.com/qmhc/vite-plugin-dts/commit/e5f37a6d9e232e268ea1b2ec2eadb6c7bc7d7115))

# [0.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.5...v0.4.0) (2021-06-08)

### Bug Fixes

- bundle only once for multiple formats ([be37fbf](https://github.com/qmhc/vite-plugin-dts/commit/be37fbfcbd03dd23c73908a2d7f2d019437e003a))

### Features

- bundle all from tsconfig include ([252554a](https://github.com/qmhc/vite-plugin-dts/commit/252554af1fa403af1ee00dba16a1c7938e7374c6))

### BREAKING CHANGES

- Deprecated include and exclude options

## [0.3.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.4...v0.3.5) (2021-06-08)

### Bug Fixes

- includes prue type export files ([1341359](https://github.com/qmhc/vite-plugin-dts/commit/1341359b9943fd961ec0d3d40d71252e77c73390))
- incorrect path in transform alias ([d686ff9](https://github.com/qmhc/vite-plugin-dts/commit/d686ff94157c400d7f235331a47fbb9d452afeb9))

## [0.3.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.3...v0.3.4) (2021-06-07)

### Bug Fixes

- remove pure import ([fe241de](https://github.com/qmhc/vite-plugin-dts/commit/fe241de5b583cb5bf2dde83383a8a43e53724ce1))
- static import include relative path ([4065217](https://github.com/qmhc/vite-plugin-dts/commit/40652178b9071509269e6b66cbbbcb3562cf349d))

## [0.3.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.2...v0.3.3) (2021-06-07)

### Bug Fixes

- keep output relative to root not to entry dir ([e83ec64](https://github.com/qmhc/vite-plugin-dts/commit/e83ec643536f888166055a5495db3e2fd1030584))

### BREAKING CHANGES

- Ouput declaration structure no longer relative to entry dir

## [0.3.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.1...v0.3.2) (2021-06-07)

### Bug Fixes

- default root base on vite config ([787ebc1](https://github.com/qmhc/vite-plugin-dts/commit/787ebc175d07370628589a6fc73e325b29655a0b))

## [0.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.0...v0.3.1) (2021-06-06)

### Bug Fixes

- vue file explicit type lost ([d0d8803](https://github.com/qmhc/vite-plugin-dts/commit/d0d88038fb51d71dfb71ab4d0223600801d50349))

# [0.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.2.0...v0.3.0) (2021-06-06)

### Bug Fixes

- transform alias import to relative path ([6d5a2d5](https://github.com/qmhc/vite-plugin-dts/commit/6d5a2d5b5ba691b5572727cbf42b340d05964951))

### Features

- projectOptions refine to compilerOptions and tsConfigFilePath ([eb61113](https://github.com/qmhc/vite-plugin-dts/commit/eb611135446fff7bc82e3bd0d1d2b856a829de98))

### BREAKING CHANGES

- projectOptions no longer supported, the project init should be up to the plugin.

# [0.2.0](https://github.com/qmhc/vite-plugin-dts/compare/b2f0c0aa6eea5b48703248eca3294c5d845404ba...v0.2.0) (2021-06-05)

### Features

- add beforeWriteFile hook ([139e818](https://github.com/qmhc/vite-plugin-dts/commit/139e818cecfa80d4208b3f5ced55e7db57bf7e52))
- add outputDir option ([f289723](https://github.com/qmhc/vite-plugin-dts/commit/f289723672279795c0b96aaac3abf83dd8913b20))
- add transform dynamic import to static ([b2f0c0a](https://github.com/qmhc/vite-plugin-dts/commit/b2f0c0aa6eea5b48703248eca3294c5d845404ba))

## [3.5.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.5.2...v3.5.3) (2023-08-29)

### Bug Fixes

- improve fine types path logic ([f1ac4d6](https://github.com/qmhc/vite-plugin-dts/commit/f1ac4d67351c80224d6165b4791b452f4618ee2e))
- minor typo in docs ([#264](https://github.com/qmhc/vite-plugin-dts/issues/264)) ([1d17e9c](https://github.com/qmhc/vite-plugin-dts/commit/1d17e9c7668a6cd18370226f4aa97cd653a86e4c))
- remove typescript version log of api-extractor ([f161ade](https://github.com/qmhc/vite-plugin-dts/commit/f161ade82c4edb91458fcd62435fc1a4c126e217))

## [3.5.2](https://github.com/qmhc/vite-plugin-dts/compare/v3.5.1...v3.5.2) (2023-08-12)

### Reverts

- fails to generate types are already in out dir ([#260](https://github.com/qmhc/vite-plugin-dts/issues/260)) ([86298b6](https://github.com/qmhc/vite-plugin-dts/commit/86298b69676da532c02f557de15254dbe78df8bf))

## [3.5.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.5.0...v3.5.1) (2023-08-06)

### Bug Fixes

- obviate effect of declarationDir config ([7dee40b](https://github.com/qmhc/vite-plugin-dts/commit/7dee40b1ff79f4250d2af543457e73d8dd71e7c6)), closes [#258](https://github.com/qmhc/vite-plugin-dts/issues/258)

# [3.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.4.0...v3.5.0) (2023-08-04)

### Bug Fixes

- ensure resolved type entry path ends with .d.ts ([3767fdf](https://github.com/qmhc/vite-plugin-dts/commit/3767fdfc1cf1789bfa5cab48f93fa9ec0f55cf12))
- unexpected undefined aliases ([fc51b68](https://github.com/qmhc/vite-plugin-dts/commit/fc51b6827eb47b8781384e0501b8242a91f63912)), closes [#257](https://github.com/qmhc/vite-plugin-dts/issues/257)

### Features

- support emit declaration files only ([#253](https://github.com/qmhc/vite-plugin-dts/issues/253)) ([a23d063](https://github.com/qmhc/vite-plugin-dts/commit/a23d06317925c0ccd9a77227590ce18cec44195a))

# [3.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.3.1...v3.4.0) (2023-07-30)

### Bug Fixes

- fails to generate hen types are already in out dir ([284c77f](https://github.com/qmhc/vite-plugin-dts/commit/284c77ff65741f2cddbca3eba380b4a624cec3c7)), closes [#254](https://github.com/qmhc/vite-plugin-dts/issues/254)

### Features

- support override the config of api-extractor ([8f5929c](https://github.com/qmhc/vite-plugin-dts/commit/8f5929c1812ce8ccbff3d3dfd353f42006b761f7))

## [3.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.3.0...v3.3.1) (2023-07-17)

### Bug Fixes

- correct sources path calculate ([0d84180](https://github.com/qmhc/vite-plugin-dts/commit/0d84180ddd237c4bf00c4e0c8e24d9b5d4423db8)), closes [#245](https://github.com/qmhc/vite-plugin-dts/issues/245)
- ensure lib name is valid ([7cfe2ea](https://github.com/qmhc/vite-plugin-dts/commit/7cfe2eac1d1a346d50e83a8ca1ad7a82bb76cbbc)), closes [#247](https://github.com/qmhc/vite-plugin-dts/issues/247)
- unexpected remove reportFileName config ([27fe3c7](https://github.com/qmhc/vite-plugin-dts/commit/27fe3c775b3bdb894c6c3a992c59d255999676a4)), closes [#246](https://github.com/qmhc/vite-plugin-dts/issues/246)

# [3.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.2.0...v3.3.0) (2023-07-14)

### Bug Fixes

- should pass full path to resolver.support ([7088a0c](https://github.com/qmhc/vite-plugin-dts/commit/7088a0c064c604ffdc528b32aa4f025fb9d607ca))
- using raw target when rolling up types ([e53c815](https://github.com/qmhc/vite-plugin-dts/commit/e53c81515ec03000816ea1ad65e0971e78bab689)), closes [#242](https://github.com/qmhc/vite-plugin-dts/issues/242)

### Features

- beforeWriteFile supports return Promise ([5e5b93c](https://github.com/qmhc/vite-plugin-dts/commit/5e5b93cfcb7e906c431c081e910f0edb97b8378c))
- support sourcemap to `.vue` files ([#243](https://github.com/qmhc/vite-plugin-dts/issues/243)) ([7445046](https://github.com/qmhc/vite-plugin-dts/commit/744504652c06bbbe1718edce5729bb7af1431135))

# [3.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.1.1...v3.2.0) (2023-07-08)

### Bug Fixes

- ensure paths are absolute when process public root ([3628877](https://github.com/qmhc/vite-plugin-dts/commit/3628877f447e6383365024dc43dacfa963f41036)), closes [#238](https://github.com/qmhc/vite-plugin-dts/issues/238)
- normalize paths of resolver transform returns ([3b5a945](https://github.com/qmhc/vite-plugin-dts/commit/3b5a94524a9a00de94ebff015934bb72ad71b192))

### Features

- create resolver for json files ([#237](https://github.com/qmhc/vite-plugin-dts/issues/237)) ([53c58c8](https://github.com/qmhc/vite-plugin-dts/commit/53c58c8071cb892e969cec693f6e75a11eea3fec))
- support parse paths of tsconfig.json to aliases ([#236](https://github.com/qmhc/vite-plugin-dts/issues/236)) ([68fc12a](https://github.com/qmhc/vite-plugin-dts/commit/68fc12af50683fef12f302bc95c3ce6da679ae74))

## [3.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.1.0...v3.1.1) (2023-07-07)

### Bug Fixes

- ensure aliases init when using Rollup ([22c69a4](https://github.com/qmhc/vite-plugin-dts/commit/22c69a4df9cffd0444a64de09221e1ec30d7f8c2))

# [3.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.3...v3.1.0) (2023-07-05)

### Features

- support custom resolvers to transform files ([#233](https://github.com/qmhc/vite-plugin-dts/issues/233)) ([be43a4d](https://github.com/qmhc/vite-plugin-dts/commit/be43a4dfd96ae76bb851dde675d222d51ea46e92))

## [3.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.2...v3.0.3) (2023-07-03)

### Bug Fixes

- incorrect lib path process when rollup types ([292b8b7](https://github.com/qmhc/vite-plugin-dts/commit/292b8b7be90e05d2d19febde2e57ec126aba0d33)), closes [#232](https://github.com/qmhc/vite-plugin-dts/issues/232)

## [3.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.1...v3.0.2) (2023-06-30)

### Bug Fixes

- error if exists same lib when transfrom dynamic imports ([c187278](https://github.com/qmhc/vite-plugin-dts/commit/c187278044972ecab077abada4a761398c74223c))

## [3.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0...v3.0.1) (2023-06-30)

### Bug Fixes

- correctly process default dynamic imports ([99105b0](https://github.com/qmhc/vite-plugin-dts/commit/99105b004325ade3c8ccc19c5375fa60716db300)), closes [#222](https://github.com/qmhc/vite-plugin-dts/issues/222)
- ensure collect manual dts for js source files ([5b7c5e5](https://github.com/qmhc/vite-plugin-dts/commit/5b7c5e52c71e457b904dd2f28b430dc9db267cf7)), closes [#184](https://github.com/qmhc/vite-plugin-dts/issues/184)

# [3.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.3...v3.0.0) (2023-06-30)

### Bug Fixes

- correct path process when specify entryRoot ([fc15dac](https://github.com/qmhc/vite-plugin-dts/commit/fc15dacf0561fc598e25f6de435edf97d6edfdf1)), closes [#229](https://github.com/qmhc/vite-plugin-dts/issues/229) [#230](https://github.com/qmhc/vite-plugin-dts/issues/230)
- correct time cost recording ([57eb430](https://github.com/qmhc/vite-plugin-dts/commit/57eb4309aeec4b5773bfa10c6e48a41c2fd23c69))

### Features

- add strictOutput to limit output write ([07224d1](https://github.com/qmhc/vite-plugin-dts/commit/07224d15576ee6528c9068d8a80fcbbf502018f0))

# [3.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2023-06-27)

### Bug Fixes

- incorrect entryRoot when in single inner entry ([96d32d1](https://github.com/qmhc/vite-plugin-dts/commit/96d32d127b73d48ce192424c4596fe24a2d24619))
- promise A+ specification for `isPromise` method ([#228](https://github.com/qmhc/vite-plugin-dts/issues/228)) ([3454a35](https://github.com/qmhc/vite-plugin-dts/commit/3454a356683a97752b0161a0e5be0328aa55a4f3))

# [3.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.3.0...v3.0.0-beta.2) (2023-06-27)

### Features

- transfer to use Volar, support Rollup, improve watch mode ([#226](https://github.com/qmhc/vite-plugin-dts/issues/226)) ([bb7949c](https://github.com/qmhc/vite-plugin-dts/commit/bb7949c841141b2305640d953be4dddf45ce7d1a))

### BREAKING CHANGES

- Deprecated options: `noEmitOnError`, `skipDiagnostics`
  and `libFolderPath`. Rename options: `outputDir` -> `outDir`,
  `tsConfigFilePath` -> `tsconfigPath`.

# [2.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.1.0...v2.3.0) (2023-04-17)

### Features

- compatible with svelte ([#197](https://github.com/qmhc/vite-plugin-dts/issues/197)) ([5d38517](https://github.com/qmhc/vite-plugin-dts/commit/5d38517ee16fdfc2009725b9146bfe38c49d1709))
- supports multiple extends in tsconfig.json ([#202](https://github.com/qmhc/vite-plugin-dts/issues/202)) ([9fdac66](https://github.com/qmhc/vite-plugin-dts/commit/9fdac66c0cfd827791208a31fbbefd1fad4ac2bf)), closes [#200](https://github.com/qmhc/vite-plugin-dts/issues/200)

# [2.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.2...v2.1.0) (2023-03-08)

### Features

- add bundledPackages configuration ([#186](https://github.com/qmhc/vite-plugin-dts/issues/186)) ([8997680](https://github.com/qmhc/vite-plugin-dts/commit/8997680776d8f35ae5248cc73b2d6a734e5dbc4a))

## [2.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.1...v2.0.2) (2023-02-23)

### Bug Fixes

- recursively resolve extended tsconfig path ([#181](https://github.com/qmhc/vite-plugin-dts/issues/181)) ([7ca8502](https://github.com/qmhc/vite-plugin-dts/commit/7ca85026e9a3e345c334222af5ffa823bda380a7))

## [2.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0...v2.0.1) (2023-02-23)

### Bug Fixes

- **vue:** correctly remove components for normal script ([6dbd9af](https://github.com/qmhc/vite-plugin-dts/commit/6dbd9af3bbd8175ef8a1cee4054ba38f330eef0c))
- **vue:** error when parse no argument function ([4db63b4](https://github.com/qmhc/vite-plugin-dts/commit/4db63b4b1b48686146f07e7e69dcbd4a82b33efb))

# [2.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.3...v2.0.0) (2023-02-23)

### Bug Fixes

- ensure watch all the files defined in include ([42a755c](https://github.com/qmhc/vite-plugin-dts/commit/42a755cf502cdfa8dc9dab0f600e8cc2a46eec18)), closes [#151](https://github.com/qmhc/vite-plugin-dts/issues/151)
- incorrect path resolve when copy dts source files ([434f69e](https://github.com/qmhc/vite-plugin-dts/commit/434f69e9629db5b2e74e609ffbc5f9cd436c1177)), closes [#179](https://github.com/qmhc/vite-plugin-dts/issues/179)
- **react:** unlimited init order when using with react plugin ([92b82ff](https://github.com/qmhc/vite-plugin-dts/commit/92b82ff47e0480c86c76e298feaa7cea8e06f7fa)), closes [#148](https://github.com/qmhc/vite-plugin-dts/issues/148)

### BREAKING CHANGES

- `copyDtsFiles` option now default to false.

# [2.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2023-02-21)

### Bug Fixes

- support manually create dts for source file ([2174868](https://github.com/qmhc/vite-plugin-dts/commit/2174868158766fd16a72f9f44b979d2c62d8ab07)), closes [#178](https://github.com/qmhc/vite-plugin-dts/issues/178)

### Features

- support parse types entry from exports in package.json ([f033cf8](https://github.com/qmhc/vite-plugin-dts/commit/f033cf876b51d7e11f1aa562567f3fd1f97d04f5))

# [2.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2023-02-20)

### Bug Fixes

- should re-transform when file changed in watch mode ([eafdd3c](https://github.com/qmhc/vite-plugin-dts/commit/eafdd3ce7d6757f93a378130b8e34f41e17e4004)), closes [#99](https://github.com/qmhc/vite-plugin-dts/issues/99)
- **vue:** preprocess not direct exported component ([8bd769e](https://github.com/qmhc/vite-plugin-dts/commit/8bd769e013f845a8e486d354d9f8517bd7b02e72))

### Features

- support specify log level of plugin ([2c1aeb0](https://github.com/qmhc/vite-plugin-dts/commit/2c1aeb01637aa4511f4e4c26b891b6e7ea235d50)), closes [#177](https://github.com/qmhc/vite-plugin-dts/issues/177)

# [2.0.0-beta.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2023-02-17)

### Bug Fixes

- **vue:** conversion error when using outside ts props ([25307cf](https://github.com/qmhc/vite-plugin-dts/commit/25307cf6ef89aa8501c8c35ff8ca519021adafea)), closes [#175](https://github.com/qmhc/vite-plugin-dts/issues/175)
- **vue:** remove components option before inferring ([90f8ac1](https://github.com/qmhc/vite-plugin-dts/commit/90f8ac160412de418bc7dc31c97f4ca7daa524ca))

# [2.0.0-beta.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.3...v2.0.0-beta.0) (2023-02-16)

### Bug Fixes

- override composite for root tsconfig ([df1d0f4](https://github.com/qmhc/vite-plugin-dts/commit/df1d0f42d0d9d9341d7766f5c147e7e3fa3733cf)), closes [#153](https://github.com/qmhc/vite-plugin-dts/issues/153)
- **vue:** ignore css vars when compile ([6d2369a](https://github.com/qmhc/vite-plugin-dts/commit/6d2369afe31c18b3dff45296d74b90aba86bb656)), closes [#167](https://github.com/qmhc/vite-plugin-dts/issues/167)

### Features

- **vue:** accurate types inferring for exposed and props ([#173](https://github.com/qmhc/vite-plugin-dts/issues/173)) ([c25448c](https://github.com/qmhc/vite-plugin-dts/commit/c25448c90f3b3969d51dbfa31ad5dc3ce2a9a2aa))

## [1.7.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.2...v1.7.3) (2023-02-14)

### Bug Fixes

- incorrect compilerOptions when rollup dts ([9dd8d9c](https://github.com/qmhc/vite-plugin-dts/commit/9dd8d9c41bed7f79e24ee890c1f28d867346326e)), closes [#171](https://github.com/qmhc/vite-plugin-dts/issues/171)
- normalize `mts` and `cts` declaration files extension ([410288a](https://github.com/qmhc/vite-plugin-dts/commit/410288ac65d7fb4a3065d93c6d7be9e2a8dd3f77)), closes [#169](https://github.com/qmhc/vite-plugin-dts/issues/169)

## [1.7.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.1...v1.7.2) (2023-01-31)

### Bug Fixes

- correct .d.ts extension in multiple outputs ([5c9709c](https://github.com/qmhc/vite-plugin-dts/commit/5c9709c4082ee36f2f28b4ad6e21b846aa27d5d6)), closes [#144](https://github.com/qmhc/vite-plugin-dts/issues/144)
- insertTypesEntry config supports publishConfig.types ([#164](https://github.com/qmhc/vite-plugin-dts/issues/164)) ([dae4ef9](https://github.com/qmhc/vite-plugin-dts/commit/dae4ef9de1175cf5bdc5a7dedfa60d7bab381dba))
- mark typescript as external dependency ([#160](https://github.com/qmhc/vite-plugin-dts/issues/160)) ([31e10d4](https://github.com/qmhc/vite-plugin-dts/commit/31e10d4ec2a37148ad63fdfb141264d6c4966135))

## [1.7.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.0...v1.7.1) (2022-11-14)

### Bug Fixes

- ensure exulde working when transform ([aea8ebd](https://github.com/qmhc/vite-plugin-dts/commit/aea8ebdc4eac489bc62ccebf3552421bd43d318c)), closes [#143](https://github.com/qmhc/vite-plugin-dts/issues/143) [#140](https://github.com/qmhc/vite-plugin-dts/issues/140) [#97](https://github.com/qmhc/vite-plugin-dts/issues/97)
- import vite plugin type via dynamic import ([8bd73c8](https://github.com/qmhc/vite-plugin-dts/commit/8bd73c8fae010ba0d32df8b144345b7f641a6085)), closes [#139](https://github.com/qmhc/vite-plugin-dts/issues/139)

# [1.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.6...v1.7.0) (2022-11-07)

### Bug Fixes

- compiler missing plugin `decorators-legacy` ([#138](https://github.com/qmhc/vite-plugin-dts/issues/138)) ([717af2f](https://github.com/qmhc/vite-plugin-dts/commit/717af2f4bc1b5bd549339179bc5b75dbbd9a348a))
- derprecate logDiagnostics option ([e405328](https://github.com/qmhc/vite-plugin-dts/commit/e405328f64870919a3ee4100fac087870ed4662e))
- incorrect compiler address resolution ([#133](https://github.com/qmhc/vite-plugin-dts/issues/133)) ([01cc125](https://github.com/qmhc/vite-plugin-dts/commit/01cc125ea98b1994e364487f73d71b0cb6ebcdbf))

### Features

- support customize typescript lib path ([27b83f3](https://github.com/qmhc/vite-plugin-dts/commit/27b83f3423f50307852257f3747c112f2f3cd325)), closes [#134](https://github.com/qmhc/vite-plugin-dts/issues/134)
- support multiple entries for lib mode ([1fafe54](https://github.com/qmhc/vite-plugin-dts/commit/1fafe54991431ce86a404ecb7e179ef1aa8aff0a)), closes [#136](https://github.com/qmhc/vite-plugin-dts/issues/136)

## [1.6.6](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.5...v1.6.6) (2022-10-13)

### Bug Fixes

- adapt @microsoft/api-extractor 7.33+ ([5acb4be](https://github.com/qmhc/vite-plugin-dts/commit/5acb4be4d1e4fe41e42a38ec9e92eeeb6f3a9c15))
- always ship included dts files into soure ([fc345e3](https://github.com/qmhc/vite-plugin-dts/commit/fc345e31b79fd7ca40581727d1964f80d1b9db82)), closes [#126](https://github.com/qmhc/vite-plugin-dts/issues/126)

## [1.6.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.4...v1.6.5) (2022-10-06)

### Bug Fixes

- remove pnpm limitation in preinstall to support npm@6 ([d7167b8](https://github.com/qmhc/vite-plugin-dts/commit/d7167b83381c54075e0e9114c07fe9451b6ffa2d)), closes [#123](https://github.com/qmhc/vite-plugin-dts/issues/123)

## [1.6.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.3...v1.6.4) (2022-09-30)

### Bug Fixes

- patch cjs vars for esm scope ([57e093d](https://github.com/qmhc/vite-plugin-dts/commit/57e093d734e4b81bbeeecbd694b269cca698f914)), closes [#119](https://github.com/qmhc/vite-plugin-dts/issues/119) [#122](https://github.com/qmhc/vite-plugin-dts/issues/122)

## [1.6.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.2...v1.6.3) (2022-09-30)

### Bug Fixes

- both support cjs and esm(using by tsx) ([38bd6a6](https://github.com/qmhc/vite-plugin-dts/commit/38bd6a6789fe375dd5da0aec1ea9b6816751719a))

## [1.6.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.1...v1.6.2) (2022-09-30)

### Bug Fixes

- ensure generate dts for type only files ([f3f4919](https://github.com/qmhc/vite-plugin-dts/commit/f3f4919fa441a27b7d842f1e64dd8d711bd05ec9)), closes [#118](https://github.com/qmhc/vite-plugin-dts/issues/118)

## [1.6.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.0...v1.6.1) (2022-09-28)

### Bug Fixes

- path error in cjs running ([0832af4](https://github.com/qmhc/vite-plugin-dts/commit/0832af4ab49d8166e14b6897bb1538ec6ddf3bb5))

# [1.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.5.0...v1.6.0) (2022-09-28)

### Bug Fixes

- correct compilerOptions.outDir for project init ([8699219](https://github.com/qmhc/vite-plugin-dts/commit/86992194411017e75b1d17c3f72d631267ec187b))
- type error occurred while define `defineProps` retruns as `props` ([41eb53a](https://github.com/qmhc/vite-plugin-dts/commit/41eb53a4da681d2c809dc8a7674a03284acbea02)), closes [#113](https://github.com/qmhc/vite-plugin-dts/issues/113)

### Features

- skip write file when `beforeWriteFile` return exact `false` ([9404ebc](https://github.com/qmhc/vite-plugin-dts/commit/9404ebc811b919a59a21b954d4ba4d43be255390)), closes [#110](https://github.com/qmhc/vite-plugin-dts/issues/110)

# [1.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.1...v1.5.0) (2022-09-11)

### Features

- improve aliasesExclude to support more flexible definition ([f652523](https://github.com/qmhc/vite-plugin-dts/commit/f6525235758b0d29347feb7f21a5085dc81b13a4)), closes [#93](https://github.com/qmhc/vite-plugin-dts/issues/93)

## [1.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.0...v1.4.1) (2022-08-01)

### Bug Fixes

- includes `extends` field when parse tsconfig.json ([#96](https://github.com/qmhc/vite-plugin-dts/issues/96)) ([2631de0](https://github.com/qmhc/vite-plugin-dts/commit/2631de0725e89083752fd590ff604f3f763abd3a))

# [1.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.1...v1.4.0) (2022-07-20)

### Bug Fixes

- ensure emit dts when no script sfc in vue component ([869a466](https://github.com/qmhc/vite-plugin-dts/commit/869a4662af2e690b2e1e63faf941a9e1343dd6ea)), closes [#88](https://github.com/qmhc/vite-plugin-dts/issues/88)

### Features

- support vue 2.7 ([c4e2c4b](https://github.com/qmhc/vite-plugin-dts/commit/c4e2c4b479da837ab697220284ac3c54e89c54a0)), closes [#87](https://github.com/qmhc/vite-plugin-dts/issues/87)

## [1.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.0...v1.3.1) (2022-07-18)

### Bug Fixes

- dynamiclly adjust the exports of inserted index file ([abc9431](https://github.com/qmhc/vite-plugin-dts/commit/abc943143b97dbec0935b62171b16faeebd6fbf4)), closes [#81](https://github.com/qmhc/vite-plugin-dts/issues/81) [#86](https://github.com/qmhc/vite-plugin-dts/issues/86)
- missing inserted entry when multiple outputs ([39ff8ab](https://github.com/qmhc/vite-plugin-dts/commit/39ff8abc0e1dda232c3cf1e6f25ff8daddb37acb))

# [1.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.1...v1.3.0) (2022-07-13)

### Bug Fixes

- aliasesExclude not work when includes empty value ([#85](https://github.com/qmhc/vite-plugin-dts/issues/85)) ([8b9b9aa](https://github.com/qmhc/vite-plugin-dts/commit/8b9b9aa4e9d1c4fa84a2945f4f2421c9269240ff))
- correct type files generate when root is set ([#68](https://github.com/qmhc/vite-plugin-dts/issues/68)) ([0b491bd](https://github.com/qmhc/vite-plugin-dts/commit/0b491bd3720c5b6065dd00a00f9b95e39bf6c8fe))

### Features

- support multiple output dirs ([cd19ee7](https://github.com/qmhc/vite-plugin-dts/commit/cd19ee7f4cf25906a3ffcd89a6c93baf7c7266ed))

## [1.2.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.0...v1.2.1) (2022-07-05)

### Bug Fixes

- add parser plugins param for vue compiler ([7d6bd16](https://github.com/qmhc/vite-plugin-dts/commit/7d6bd16af88701152bf8847e160acf6169bd0918)), closes [#78](https://github.com/qmhc/vite-plugin-dts/issues/78)
- insert entry fail when no default export in source entry ([#82](https://github.com/qmhc/vite-plugin-dts/issues/82)) ([1a4b161](https://github.com/qmhc/vite-plugin-dts/commit/1a4b161647ba1826c3bfa7c9ca5ee7ca4c3ee4bf))

# [1.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.1...v1.2.0) (2022-05-24)

### Bug Fixes

- support read typings form package.json ([6b1bb29](https://github.com/qmhc/vite-plugin-dts/commit/6b1bb2951512733091b950f5767bfe5a1cbe8992))

### Features

- add `aliasesExclude` option ([#75](https://github.com/qmhc/vite-plugin-dts/issues/75)) ([7588ba4](https://github.com/qmhc/vite-plugin-dts/commit/7588ba4755c19e25ca2482b95cb99a59621e693e)), closes [#73](https://github.com/qmhc/vite-plugin-dts/issues/73)
- support override compilerOptions when rollup up ([995612d](https://github.com/qmhc/vite-plugin-dts/commit/995612d5eafa6b610a9ab8826ee7b8691c673b4e)), closes [#74](https://github.com/qmhc/vite-plugin-dts/issues/74)

## [1.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.0...v1.1.1) (2022-04-25)

### Bug Fixes

- incorrect rollup entry path ([a9309d8](https://github.com/qmhc/vite-plugin-dts/commit/a9309d8ca8c0531d1579d3a541cd67ac0a37ce1b))

# [1.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.5...v1.1.0) (2022-04-18)

### Bug Fixes

- lose the type of entry export default ([50f55de](https://github.com/qmhc/vite-plugin-dts/commit/50f55de3ec89d7995056c428a37d16e0cd2a6a4a))

### Features

- support rollup dts files after output ([1d87b44](https://github.com/qmhc/vite-plugin-dts/commit/1d87b44dff3c54a5b1b983b060d3d0d4972c1d94))

## [1.0.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.4...v1.0.5) (2022-04-02)

### Bug Fixes

- entryRoot option not work ([#66](https://github.com/qmhc/vite-plugin-dts/issues/66)) ([bca6423](https://github.com/qmhc/vite-plugin-dts/commit/bca64236076a28dbdd7e6e373c46f3af3723b4e1))

## [1.0.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.3...v1.0.4) (2022-03-28)

### Bug Fixes

- transfer 'debug' to dependencies ([7af9232](https://github.com/qmhc/vite-plugin-dts/commit/7af9232e381f6d572a543706d640c6ecdb5a6c00))

## [1.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.2...v1.0.3) (2022-03-25)

### Bug Fixes

- **example:** cannot resolve types through symlinks ([0914a6a](https://github.com/qmhc/vite-plugin-dts/commit/0914a6ad8dde3514f94e586798d6d73a9c2ac165)), closes [#63](https://github.com/qmhc/vite-plugin-dts/issues/63)

## [1.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.1...v1.0.2) (2022-03-24)

### Bug Fixes

- incorrect entryRoot calculation in linux an mac ([0136990](https://github.com/qmhc/vite-plugin-dts/commit/01369903f484eb74ae6fa23b49537fa64d610706)), closes [#62](https://github.com/qmhc/vite-plugin-dts/issues/62)

## [1.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0...v1.0.1) (2022-03-22)

### Bug Fixes

- missing some libs defind in dependencies ([ab7960f](https://github.com/qmhc/vite-plugin-dts/commit/ab7960f0d957aad6945ef469274bca3e142baa87))

# [1.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.10...v1.0.0) (2022-03-22)

### Features

- support entryRoot option ([c939e35](https://github.com/qmhc/vite-plugin-dts/commit/c939e358dfecacaf2dfd2b0d42118c16462c260a)), closes [#59](https://github.com/qmhc/vite-plugin-dts/issues/59)

### BREAKING CHANGES

- The calculating output paths funtion of root option is
  assigned to entryRoot option, and currently will auto calculating the
  smallest public path as the default value for entryRoot option.

## [0.9.10](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.9...v0.9.10) (2022-03-12)

### Bug Fixes

- make default include same as tsconfig.json ([5ca7fc5](https://github.com/qmhc/vite-plugin-dts/commit/5ca7fc51ab321d4b25ce9856c0e52894c1264d44)), closes [#58](https://github.com/qmhc/vite-plugin-dts/issues/58)

## [0.9.9](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.8...v0.9.9) (2022-01-11)

### Bug Fixes

- should filter vite virtual files ([5fb24ba](https://github.com/qmhc/vite-plugin-dts/commit/5fb24ba2c40ad2ef81e45c33533aada3bb5aefd3)), closes [#50](https://github.com/qmhc/vite-plugin-dts/issues/50)

## [0.9.8](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.7...v0.9.8) (2022-01-10)

### Bug Fixes

- put `copyDtsFiles` option in use ([#53](https://github.com/qmhc/vite-plugin-dts/issues/53)) ([261700f](https://github.com/qmhc/vite-plugin-dts/commit/261700f80a60b3bc1f22f391e00d9999205fe0d2)), closes [#52](https://github.com/qmhc/vite-plugin-dts/issues/52)

## [0.9.7](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.6...v0.9.7) (2021-12-30)

### Bug Fixes

- inserted entry not through beforeWriteFile ([e16b9b1](https://github.com/qmhc/vite-plugin-dts/commit/e16b9b15c66df887bac0ca0b6be05e4d1f8628ed)), closes [#48](https://github.com/qmhc/vite-plugin-dts/issues/48)

## [0.9.6](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.5...v0.9.6) (2021-11-23)

### Bug Fixes

- aliases are not resolved when find ends with '/' ([f04aab2](https://github.com/qmhc/vite-plugin-dts/commit/f04aab21f9f6dc02316a9ff3a9cd43e90cd97828)), closes [#37](https://github.com/qmhc/vite-plugin-dts/issues/37)
- not equally transform dts source files ([ede5146](https://github.com/qmhc/vite-plugin-dts/commit/ede514649282aec786549d490e8127824913914c))

## [0.9.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.4...v0.9.5) (2021-11-21)

### Bug Fixes

- ensure dts source files through beforeWriteFile hook ([3265412](https://github.com/qmhc/vite-plugin-dts/commit/3265412e26dd8736fefab0cf99e920d01bb246c5)), closes [#43](https://github.com/qmhc/vite-plugin-dts/issues/43)

## [0.9.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.3...v0.9.4) (2021-11-10)

### Bug Fixes

- cannot resolve types defined in dts files ([666ca09](https://github.com/qmhc/vite-plugin-dts/commit/666ca0925075bed6926f648a210f37d56af9577b)), closes [#42](https://github.com/qmhc/vite-plugin-dts/issues/42)
- take unused error when using setup-script ([c4145b7](https://github.com/qmhc/vite-plugin-dts/commit/c4145b7352359c79b8ba7c01a1c4afeace4dbc7c))

## [0.9.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.2...v0.9.3) (2021-11-03)

### Bug Fixes

- support require for cjs exports ([cc5aff9](https://github.com/qmhc/vite-plugin-dts/commit/cc5aff9b9906fc87f6012fb66566fd1937a9381e)), closes [#39](https://github.com/qmhc/vite-plugin-dts/issues/39)

## [0.9.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.1...v0.9.2) (2021-10-20)

### Bug Fixes

- support optional @vue/compiler-sfc ([34e1958](https://github.com/qmhc/vite-plugin-dts/commit/34e19587aa64c802cfbd99c5c8018bde8d0e1e2f))

## [0.9.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.3...v0.9.1) (2021-10-18)

### Bug Fixes

- watch mode not update ts/js files ([32a5699](https://github.com/qmhc/vite-plugin-dts/commit/32a5699a9b4f5a24b2a2a870ced43850a0573f82))

### Features

- add afterBuild hook option ([#34](https://github.com/qmhc/vite-plugin-dts/issues/34)) ([e836689](https://github.com/qmhc/vite-plugin-dts/commit/e83668988dab189d185ed9637032f7f80ba1e4db))
- afterDiagnostic and afterBuild support async ([c92d548](https://github.com/qmhc/vite-plugin-dts/commit/c92d54826b81f50fbb38fa909df730b323b75b24))
- skip dependencies by default ([8ca3ed3](https://github.com/qmhc/vite-plugin-dts/commit/8ca3ed30dfcc23c2dd9822fe6ef460a6c832dfe2))

## [0.8.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.2...v0.8.3) (2021-10-11)

### Bug Fixes

- support tsconfig.json using comments ([6e6e446](https://github.com/qmhc/vite-plugin-dts/commit/6e6e44683592060ebd27d1c5712058f2f0f0aeb6)), closes [#31](https://github.com/qmhc/vite-plugin-dts/issues/31)

## [0.8.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.1...v0.8.2) (2021-09-30)

### Bug Fixes

- create correct source for tsx/jsx script ([#29](https://github.com/qmhc/vite-plugin-dts/issues/29)) ([109721e](https://github.com/qmhc/vite-plugin-dts/commit/109721e89007cd702fe73fded44cc6b7efeef46e))

## [0.8.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.0...v0.8.1) (2021-09-22)

### Bug Fixes

- declarationDir make no file generated ([3313a19](https://github.com/qmhc/vite-plugin-dts/commit/3313a19da669bda7fa8fff3a5211652bc22e7413)), closes [#27](https://github.com/qmhc/vite-plugin-dts/issues/27)
- rewrite noEmit option when init porject ([735d26b](https://github.com/qmhc/vite-plugin-dts/commit/735d26b3cad9a90dd272a08448d238045306a1ba)), closes [#28](https://github.com/qmhc/vite-plugin-dts/issues/28)

# [0.8.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.7.0...v0.8.0) (2021-09-13)

### Bug Fixes

- adapt vue@3.2.6+ setup script ([1b62755](https://github.com/qmhc/vite-plugin-dts/commit/1b62755947972a67a034830cc7478fa1a65924c4))
- ouput files out of include bounds ([e1cdedf](https://github.com/qmhc/vite-plugin-dts/commit/e1cdedfc8b41a311d2c22674bd132f23242482ac)), closes [#24](https://github.com/qmhc/vite-plugin-dts/issues/24)

### Features

- add afterDiagnostic option ([7d43ece](https://github.com/qmhc/vite-plugin-dts/commit/7d43ece8fcb9b71d645982a45b01cd9136c525d8)), closes [#22](https://github.com/qmhc/vite-plugin-dts/issues/22)
- support build watch mode ([a920d97](https://github.com/qmhc/vite-plugin-dts/commit/a920d97825dced453f5f70d8776944c02b50e14b)), closes [#5](https://github.com/qmhc/vite-plugin-dts/issues/5)

# [0.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.6.0...v0.7.0) (2021-08-23)

### Bug Fixes

- support using script-setup alongside script ([39517ad](https://github.com/qmhc/vite-plugin-dts/commit/39517ad7119a4b97be7a2d874b43cb73cfa95f07)), closes [#21](https://github.com/qmhc/vite-plugin-dts/issues/21)

### Features

- add noEmitOnError and logDiagnostics options ([8a840fe](https://github.com/qmhc/vite-plugin-dts/commit/8a840fe2692e07e8e881c58ca8f6887d08493cc9))

# [0.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.3...v0.6.0) (2021-08-14)

### Bug Fixes

- resolve alias when using default import ([3121d5b](https://github.com/qmhc/vite-plugin-dts/commit/3121d5bd56a6863e5175c95b00d7a3dedc0cff6d)), closes [#20](https://github.com/qmhc/vite-plugin-dts/issues/20)

### Features

- add copyDtsFiles option ([bdab8c4](https://github.com/qmhc/vite-plugin-dts/commit/bdab8c4b4efa894209c2edeffbbe4d79680eafe9)), closes [#19](https://github.com/qmhc/vite-plugin-dts/issues/19)

## [0.5.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.2...v0.5.3) (2021-07-22)

### Bug Fixes

- add allowJs option dynamically ([36f8de2](https://github.com/qmhc/vite-plugin-dts/commit/36f8de28c68cd52945faeb375cd2931c6ad0468a)), closes [#17](https://github.com/qmhc/vite-plugin-dts/issues/17)
- add js and jsx files when allowJs ([0e1e6f7](https://github.com/qmhc/vite-plugin-dts/commit/0e1e6f7c09c85e169568b2c77c66d452d04a28a2))

## [0.5.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.1...v0.5.2) (2021-07-01)

### Bug Fixes

- cannot require @vue/compiler-sfc in monorepo ([fd9b5c1](https://github.com/qmhc/vite-plugin-dts/commit/fd9b5c1c018feb87e374cdf6671b7b8be14e775b)), closes [#14](https://github.com/qmhc/vite-plugin-dts/issues/14)

## [0.5.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.0...v0.5.1) (2021-06-18)

### Bug Fixes

- support insert entry from '.tsx' file ([e38b7c4](https://github.com/qmhc/vite-plugin-dts/commit/e38b7c4686a8d7405583a97078e97fbef4757da6))

# [0.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.3...v0.5.0) (2021-06-15)

### Bug Fixes

- ignore none export files ([f9c41bc](https://github.com/qmhc/vite-plugin-dts/commit/f9c41bc4e2fd498b53aa366a5f8f2a57589b6176))
- rename insertIndexEntry to insertTypesEntry ([c9d392e](https://github.com/qmhc/vite-plugin-dts/commit/c9d392ec3def98b541bb597c5ed38933b225fe5e))

### Features

- add clearPureImport option ([0357f69](https://github.com/qmhc/vite-plugin-dts/commit/0357f69485204f24d9830a4de59558a23eb66e19))
- defaults insert entry base on pkg.types ([9c71f28](https://github.com/qmhc/vite-plugin-dts/commit/9c71f28eac50d23a42d92bd79ac6d09f1be0544d))
- optional insert index type entry ([592a701](https://github.com/qmhc/vite-plugin-dts/commit/592a701d6213f955306df9de0c7f1d3243a28faa))

## [0.4.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.2...v0.4.3) (2021-06-11)

### Bug Fixes

- back off optional chaining and nullish coalescing ([8e09129](https://github.com/qmhc/vite-plugin-dts/commit/8e09129c1600a013a2c3c50983ab7f358216757f)), closes [#2](https://github.com/qmhc/vite-plugin-dts/issues/2)
- transform fs/promise to fs-extra ([1794b0b](https://github.com/qmhc/vite-plugin-dts/commit/1794b0b93baf4212b4efc5ef06a697adf70e4933)), closes [#4](https://github.com/qmhc/vite-plugin-dts/issues/4)

### Performance Improvements

- use menory result generate bundle ([858bf31](https://github.com/qmhc/vite-plugin-dts/commit/858bf317d16c995feb73e53339d61f7602e36484))

## [0.4.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.1...v0.4.2) (2021-06-09)

### Bug Fixes

- incomplete remove pure import ([a1fd54e](https://github.com/qmhc/vite-plugin-dts/commit/a1fd54e769f1b50ee5858d33879b2a6732625797))
- mamual set include and exclude ([b6fb510](https://github.com/qmhc/vite-plugin-dts/commit/b6fb5106206df9de83276687dd1451fa3d882067))
- more accurate normalize glob ([1d65c47](https://github.com/qmhc/vite-plugin-dts/commit/1d65c47811344a6b566a8dcf22cd22d9298d5a02))
- set rootDir if not set in compilerOptions ([a1d83d2](https://github.com/qmhc/vite-plugin-dts/commit/a1d83d2aa56a32ebef11b9d98fa508a6d9fbd412)), closes [#3](https://github.com/qmhc/vite-plugin-dts/issues/3)
- transform alias include dynamic imports ([a6919b4](https://github.com/qmhc/vite-plugin-dts/commit/a6919b4760cf5cbefbdad1ac674b8a8275dc27dd))
- transform alias include dynamic imports ([3a5511e](https://github.com/qmhc/vite-plugin-dts/commit/3a5511e3e0b961d7f4ac393da623502a186a0538))

## [0.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.0...v0.4.1) (2021-06-08)

### Bug Fixes

- dynamic import regexp endings include ']' and ')' ([e5f37a6](https://github.com/qmhc/vite-plugin-dts/commit/e5f37a6d9e232e268ea1b2ec2eadb6c7bc7d7115))

# [0.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.5...v0.4.0) (2021-06-08)

### Bug Fixes

- bundle only once for multiple formats ([be37fbf](https://github.com/qmhc/vite-plugin-dts/commit/be37fbfcbd03dd23c73908a2d7f2d019437e003a))

### Features

- bundle all from tsconfig include ([252554a](https://github.com/qmhc/vite-plugin-dts/commit/252554af1fa403af1ee00dba16a1c7938e7374c6))

### BREAKING CHANGES

- Deprecated include and exclude options

## [0.3.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.4...v0.3.5) (2021-06-08)

### Bug Fixes

- includes prue type export files ([1341359](https://github.com/qmhc/vite-plugin-dts/commit/1341359b9943fd961ec0d3d40d71252e77c73390))
- incorrect path in transform alias ([d686ff9](https://github.com/qmhc/vite-plugin-dts/commit/d686ff94157c400d7f235331a47fbb9d452afeb9))

## [0.3.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.3...v0.3.4) (2021-06-07)

### Bug Fixes

- remove pure import ([fe241de](https://github.com/qmhc/vite-plugin-dts/commit/fe241de5b583cb5bf2dde83383a8a43e53724ce1))
- static import include relative path ([4065217](https://github.com/qmhc/vite-plugin-dts/commit/40652178b9071509269e6b66cbbbcb3562cf349d))

## [0.3.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.2...v0.3.3) (2021-06-07)

### Bug Fixes

- keep output relative to root not to entry dir ([e83ec64](https://github.com/qmhc/vite-plugin-dts/commit/e83ec643536f888166055a5495db3e2fd1030584))

### BREAKING CHANGES

- Ouput declaration structure no longer relative to entry dir

## [0.3.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.1...v0.3.2) (2021-06-07)

### Bug Fixes

- default root base on vite config ([787ebc1](https://github.com/qmhc/vite-plugin-dts/commit/787ebc175d07370628589a6fc73e325b29655a0b))

## [0.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.0...v0.3.1) (2021-06-06)

### Bug Fixes

- vue file explicit type lost ([d0d8803](https://github.com/qmhc/vite-plugin-dts/commit/d0d88038fb51d71dfb71ab4d0223600801d50349))

# [0.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.2.0...v0.3.0) (2021-06-06)

### Bug Fixes

- transform alias import to relative path ([6d5a2d5](https://github.com/qmhc/vite-plugin-dts/commit/6d5a2d5b5ba691b5572727cbf42b340d05964951))

### Features

- projectOptions refine to compilerOptions and tsConfigFilePath ([eb61113](https://github.com/qmhc/vite-plugin-dts/commit/eb611135446fff7bc82e3bd0d1d2b856a829de98))

### BREAKING CHANGES

- projectOptions no longer supported, the project init should be up to the plugin.

# [0.2.0](https://github.com/qmhc/vite-plugin-dts/compare/b2f0c0aa6eea5b48703248eca3294c5d845404ba...v0.2.0) (2021-06-05)

### Features

- add beforeWriteFile hook ([139e818](https://github.com/qmhc/vite-plugin-dts/commit/139e818cecfa80d4208b3f5ced55e7db57bf7e52))
- add outputDir option ([f289723](https://github.com/qmhc/vite-plugin-dts/commit/f289723672279795c0b96aaac3abf83dd8913b20))
- add transform dynamic import to static ([b2f0c0a](https://github.com/qmhc/vite-plugin-dts/commit/b2f0c0aa6eea5b48703248eca3294c5d845404ba))

## [3.5.2](https://github.com/qmhc/vite-plugin-dts/compare/v3.5.1...v3.5.2) (2023-08-12)

### Reverts

- fails to generate types are already in out dir ([#260](https://github.com/qmhc/vite-plugin-dts/issues/260)) ([86298b6](https://github.com/qmhc/vite-plugin-dts/commit/86298b69676da532c02f557de15254dbe78df8bf))

## [3.5.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.5.0...v3.5.1) (2023-08-06)

### Bug Fixes

- obviate effect of declarationDir config ([7dee40b](https://github.com/qmhc/vite-plugin-dts/commit/7dee40b1ff79f4250d2af543457e73d8dd71e7c6)), closes [#258](https://github.com/qmhc/vite-plugin-dts/issues/258)

# [3.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.4.0...v3.5.0) (2023-08-04)

### Bug Fixes

- ensure resolved type entry path ends with .d.ts ([3767fdf](https://github.com/qmhc/vite-plugin-dts/commit/3767fdfc1cf1789bfa5cab48f93fa9ec0f55cf12))
- unexpected undefined aliases ([fc51b68](https://github.com/qmhc/vite-plugin-dts/commit/fc51b6827eb47b8781384e0501b8242a91f63912)), closes [#257](https://github.com/qmhc/vite-plugin-dts/issues/257)

### Features

- support emit declaration files only ([#253](https://github.com/qmhc/vite-plugin-dts/issues/253)) ([a23d063](https://github.com/qmhc/vite-plugin-dts/commit/a23d06317925c0ccd9a77227590ce18cec44195a))

# [3.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.3.1...v3.4.0) (2023-07-30)

### Bug Fixes

- fails to generate hen types are already in out dir ([284c77f](https://github.com/qmhc/vite-plugin-dts/commit/284c77ff65741f2cddbca3eba380b4a624cec3c7)), closes [#254](https://github.com/qmhc/vite-plugin-dts/issues/254)

### Features

- support override the config of api-extractor ([8f5929c](https://github.com/qmhc/vite-plugin-dts/commit/8f5929c1812ce8ccbff3d3dfd353f42006b761f7))

## [3.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.3.0...v3.3.1) (2023-07-17)

### Bug Fixes

- correct sources path calculate ([0d84180](https://github.com/qmhc/vite-plugin-dts/commit/0d84180ddd237c4bf00c4e0c8e24d9b5d4423db8)), closes [#245](https://github.com/qmhc/vite-plugin-dts/issues/245)
- ensure lib name is valid ([7cfe2ea](https://github.com/qmhc/vite-plugin-dts/commit/7cfe2eac1d1a346d50e83a8ca1ad7a82bb76cbbc)), closes [#247](https://github.com/qmhc/vite-plugin-dts/issues/247)
- unexpected remove reportFileName config ([27fe3c7](https://github.com/qmhc/vite-plugin-dts/commit/27fe3c775b3bdb894c6c3a992c59d255999676a4)), closes [#246](https://github.com/qmhc/vite-plugin-dts/issues/246)

# [3.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.2.0...v3.3.0) (2023-07-14)

### Bug Fixes

- should pass full path to resolver.support ([7088a0c](https://github.com/qmhc/vite-plugin-dts/commit/7088a0c064c604ffdc528b32aa4f025fb9d607ca))
- using raw target when rolling up types ([e53c815](https://github.com/qmhc/vite-plugin-dts/commit/e53c81515ec03000816ea1ad65e0971e78bab689)), closes [#242](https://github.com/qmhc/vite-plugin-dts/issues/242)

### Features

- beforeWriteFile supports return Promise ([5e5b93c](https://github.com/qmhc/vite-plugin-dts/commit/5e5b93cfcb7e906c431c081e910f0edb97b8378c))
- support sourcemap to `.vue` files ([#243](https://github.com/qmhc/vite-plugin-dts/issues/243)) ([7445046](https://github.com/qmhc/vite-plugin-dts/commit/744504652c06bbbe1718edce5729bb7af1431135))

# [3.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.1.1...v3.2.0) (2023-07-08)

### Bug Fixes

- ensure paths are absolute when process public root ([3628877](https://github.com/qmhc/vite-plugin-dts/commit/3628877f447e6383365024dc43dacfa963f41036)), closes [#238](https://github.com/qmhc/vite-plugin-dts/issues/238)
- normalize paths of resolver transform returns ([3b5a945](https://github.com/qmhc/vite-plugin-dts/commit/3b5a94524a9a00de94ebff015934bb72ad71b192))

### Features

- create resolver for json files ([#237](https://github.com/qmhc/vite-plugin-dts/issues/237)) ([53c58c8](https://github.com/qmhc/vite-plugin-dts/commit/53c58c8071cb892e969cec693f6e75a11eea3fec))
- support parse paths of tsconfig.json to aliases ([#236](https://github.com/qmhc/vite-plugin-dts/issues/236)) ([68fc12a](https://github.com/qmhc/vite-plugin-dts/commit/68fc12af50683fef12f302bc95c3ce6da679ae74))

## [3.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.1.0...v3.1.1) (2023-07-07)

### Bug Fixes

- ensure aliases init when using Rollup ([22c69a4](https://github.com/qmhc/vite-plugin-dts/commit/22c69a4df9cffd0444a64de09221e1ec30d7f8c2))

# [3.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.3...v3.1.0) (2023-07-05)

### Features

- support custom resolvers to transform files ([#233](https://github.com/qmhc/vite-plugin-dts/issues/233)) ([be43a4d](https://github.com/qmhc/vite-plugin-dts/commit/be43a4dfd96ae76bb851dde675d222d51ea46e92))

## [3.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.2...v3.0.3) (2023-07-03)

### Bug Fixes

- incorrect lib path process when rollup types ([292b8b7](https://github.com/qmhc/vite-plugin-dts/commit/292b8b7be90e05d2d19febde2e57ec126aba0d33)), closes [#232](https://github.com/qmhc/vite-plugin-dts/issues/232)

## [3.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.1...v3.0.2) (2023-06-30)

### Bug Fixes

- error if exists same lib when transfrom dynamic imports ([c187278](https://github.com/qmhc/vite-plugin-dts/commit/c187278044972ecab077abada4a761398c74223c))

## [3.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0...v3.0.1) (2023-06-30)

### Bug Fixes

- correctly process default dynamic imports ([99105b0](https://github.com/qmhc/vite-plugin-dts/commit/99105b004325ade3c8ccc19c5375fa60716db300)), closes [#222](https://github.com/qmhc/vite-plugin-dts/issues/222)
- ensure collect manual dts for js source files ([5b7c5e5](https://github.com/qmhc/vite-plugin-dts/commit/5b7c5e52c71e457b904dd2f28b430dc9db267cf7)), closes [#184](https://github.com/qmhc/vite-plugin-dts/issues/184)

# [3.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.3...v3.0.0) (2023-06-30)

### Bug Fixes

- correct path process when specify entryRoot ([fc15dac](https://github.com/qmhc/vite-plugin-dts/commit/fc15dacf0561fc598e25f6de435edf97d6edfdf1)), closes [#229](https://github.com/qmhc/vite-plugin-dts/issues/229) [#230](https://github.com/qmhc/vite-plugin-dts/issues/230)
- correct time cost recording ([57eb430](https://github.com/qmhc/vite-plugin-dts/commit/57eb4309aeec4b5773bfa10c6e48a41c2fd23c69))

### Features

- add strictOutput to limit output write ([07224d1](https://github.com/qmhc/vite-plugin-dts/commit/07224d15576ee6528c9068d8a80fcbbf502018f0))

# [3.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2023-06-27)

### Bug Fixes

- incorrect entryRoot when in single inner entry ([96d32d1](https://github.com/qmhc/vite-plugin-dts/commit/96d32d127b73d48ce192424c4596fe24a2d24619))
- promise A+ specification for `isPromise` method ([#228](https://github.com/qmhc/vite-plugin-dts/issues/228)) ([3454a35](https://github.com/qmhc/vite-plugin-dts/commit/3454a356683a97752b0161a0e5be0328aa55a4f3))

# [3.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.3.0...v3.0.0-beta.2) (2023-06-27)

### Features

- transfer to use Volar, support Rollup, improve watch mode ([#226](https://github.com/qmhc/vite-plugin-dts/issues/226)) ([bb7949c](https://github.com/qmhc/vite-plugin-dts/commit/bb7949c841141b2305640d953be4dddf45ce7d1a))

### BREAKING CHANGES

- Deprecated options: `noEmitOnError`, `skipDiagnostics`
  and `libFolderPath`. Rename options: `outputDir` -> `outDir`,
  `tsConfigFilePath` -> `tsconfigPath`.

# [2.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.1.0...v2.3.0) (2023-04-17)

### Features

- compatible with svelte ([#197](https://github.com/qmhc/vite-plugin-dts/issues/197)) ([5d38517](https://github.com/qmhc/vite-plugin-dts/commit/5d38517ee16fdfc2009725b9146bfe38c49d1709))
- supports multiple extends in tsconfig.json ([#202](https://github.com/qmhc/vite-plugin-dts/issues/202)) ([9fdac66](https://github.com/qmhc/vite-plugin-dts/commit/9fdac66c0cfd827791208a31fbbefd1fad4ac2bf)), closes [#200](https://github.com/qmhc/vite-plugin-dts/issues/200)

# [2.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.2...v2.1.0) (2023-03-08)

### Features

- add bundledPackages configuration ([#186](https://github.com/qmhc/vite-plugin-dts/issues/186)) ([8997680](https://github.com/qmhc/vite-plugin-dts/commit/8997680776d8f35ae5248cc73b2d6a734e5dbc4a))

## [2.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.1...v2.0.2) (2023-02-23)

### Bug Fixes

- recursively resolve extended tsconfig path ([#181](https://github.com/qmhc/vite-plugin-dts/issues/181)) ([7ca8502](https://github.com/qmhc/vite-plugin-dts/commit/7ca85026e9a3e345c334222af5ffa823bda380a7))

## [2.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0...v2.0.1) (2023-02-23)

### Bug Fixes

- **vue:** correctly remove components for normal script ([6dbd9af](https://github.com/qmhc/vite-plugin-dts/commit/6dbd9af3bbd8175ef8a1cee4054ba38f330eef0c))
- **vue:** error when parse no argument function ([4db63b4](https://github.com/qmhc/vite-plugin-dts/commit/4db63b4b1b48686146f07e7e69dcbd4a82b33efb))

# [2.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.3...v2.0.0) (2023-02-23)

### Bug Fixes

- ensure watch all the files defined in include ([42a755c](https://github.com/qmhc/vite-plugin-dts/commit/42a755cf502cdfa8dc9dab0f600e8cc2a46eec18)), closes [#151](https://github.com/qmhc/vite-plugin-dts/issues/151)
- incorrect path resolve when copy dts source files ([434f69e](https://github.com/qmhc/vite-plugin-dts/commit/434f69e9629db5b2e74e609ffbc5f9cd436c1177)), closes [#179](https://github.com/qmhc/vite-plugin-dts/issues/179)
- **react:** unlimited init order when using with react plugin ([92b82ff](https://github.com/qmhc/vite-plugin-dts/commit/92b82ff47e0480c86c76e298feaa7cea8e06f7fa)), closes [#148](https://github.com/qmhc/vite-plugin-dts/issues/148)

### BREAKING CHANGES

- `copyDtsFiles` option now default to false.

# [2.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2023-02-21)

### Bug Fixes

- support manually create dts for source file ([2174868](https://github.com/qmhc/vite-plugin-dts/commit/2174868158766fd16a72f9f44b979d2c62d8ab07)), closes [#178](https://github.com/qmhc/vite-plugin-dts/issues/178)

### Features

- support parse types entry from exports in package.json ([f033cf8](https://github.com/qmhc/vite-plugin-dts/commit/f033cf876b51d7e11f1aa562567f3fd1f97d04f5))

# [2.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2023-02-20)

### Bug Fixes

- should re-transform when file changed in watch mode ([eafdd3c](https://github.com/qmhc/vite-plugin-dts/commit/eafdd3ce7d6757f93a378130b8e34f41e17e4004)), closes [#99](https://github.com/qmhc/vite-plugin-dts/issues/99)
- **vue:** preprocess not direct exported component ([8bd769e](https://github.com/qmhc/vite-plugin-dts/commit/8bd769e013f845a8e486d354d9f8517bd7b02e72))

### Features

- support specify log level of plugin ([2c1aeb0](https://github.com/qmhc/vite-plugin-dts/commit/2c1aeb01637aa4511f4e4c26b891b6e7ea235d50)), closes [#177](https://github.com/qmhc/vite-plugin-dts/issues/177)

# [2.0.0-beta.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2023-02-17)

### Bug Fixes

- **vue:** conversion error when using outside ts props ([25307cf](https://github.com/qmhc/vite-plugin-dts/commit/25307cf6ef89aa8501c8c35ff8ca519021adafea)), closes [#175](https://github.com/qmhc/vite-plugin-dts/issues/175)
- **vue:** remove components option before inferring ([90f8ac1](https://github.com/qmhc/vite-plugin-dts/commit/90f8ac160412de418bc7dc31c97f4ca7daa524ca))

# [2.0.0-beta.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.3...v2.0.0-beta.0) (2023-02-16)

### Bug Fixes

- override composite for root tsconfig ([df1d0f4](https://github.com/qmhc/vite-plugin-dts/commit/df1d0f42d0d9d9341d7766f5c147e7e3fa3733cf)), closes [#153](https://github.com/qmhc/vite-plugin-dts/issues/153)
- **vue:** ignore css vars when compile ([6d2369a](https://github.com/qmhc/vite-plugin-dts/commit/6d2369afe31c18b3dff45296d74b90aba86bb656)), closes [#167](https://github.com/qmhc/vite-plugin-dts/issues/167)

### Features

- **vue:** accurate types inferring for exposed and props ([#173](https://github.com/qmhc/vite-plugin-dts/issues/173)) ([c25448c](https://github.com/qmhc/vite-plugin-dts/commit/c25448c90f3b3969d51dbfa31ad5dc3ce2a9a2aa))

## [1.7.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.2...v1.7.3) (2023-02-14)

### Bug Fixes

- incorrect compilerOptions when rollup dts ([9dd8d9c](https://github.com/qmhc/vite-plugin-dts/commit/9dd8d9c41bed7f79e24ee890c1f28d867346326e)), closes [#171](https://github.com/qmhc/vite-plugin-dts/issues/171)
- normalize `mts` and `cts` declaration files extension ([410288a](https://github.com/qmhc/vite-plugin-dts/commit/410288ac65d7fb4a3065d93c6d7be9e2a8dd3f77)), closes [#169](https://github.com/qmhc/vite-plugin-dts/issues/169)

## [1.7.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.1...v1.7.2) (2023-01-31)

### Bug Fixes

- correct .d.ts extension in multiple outputs ([5c9709c](https://github.com/qmhc/vite-plugin-dts/commit/5c9709c4082ee36f2f28b4ad6e21b846aa27d5d6)), closes [#144](https://github.com/qmhc/vite-plugin-dts/issues/144)
- insertTypesEntry config supports publishConfig.types ([#164](https://github.com/qmhc/vite-plugin-dts/issues/164)) ([dae4ef9](https://github.com/qmhc/vite-plugin-dts/commit/dae4ef9de1175cf5bdc5a7dedfa60d7bab381dba))
- mark typescript as external dependency ([#160](https://github.com/qmhc/vite-plugin-dts/issues/160)) ([31e10d4](https://github.com/qmhc/vite-plugin-dts/commit/31e10d4ec2a37148ad63fdfb141264d6c4966135))

## [1.7.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.0...v1.7.1) (2022-11-14)

### Bug Fixes

- ensure exulde working when transform ([aea8ebd](https://github.com/qmhc/vite-plugin-dts/commit/aea8ebdc4eac489bc62ccebf3552421bd43d318c)), closes [#143](https://github.com/qmhc/vite-plugin-dts/issues/143) [#140](https://github.com/qmhc/vite-plugin-dts/issues/140) [#97](https://github.com/qmhc/vite-plugin-dts/issues/97)
- import vite plugin type via dynamic import ([8bd73c8](https://github.com/qmhc/vite-plugin-dts/commit/8bd73c8fae010ba0d32df8b144345b7f641a6085)), closes [#139](https://github.com/qmhc/vite-plugin-dts/issues/139)

# [1.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.6...v1.7.0) (2022-11-07)

### Bug Fixes

- compiler missing plugin `decorators-legacy` ([#138](https://github.com/qmhc/vite-plugin-dts/issues/138)) ([717af2f](https://github.com/qmhc/vite-plugin-dts/commit/717af2f4bc1b5bd549339179bc5b75dbbd9a348a))
- derprecate logDiagnostics option ([e405328](https://github.com/qmhc/vite-plugin-dts/commit/e405328f64870919a3ee4100fac087870ed4662e))
- incorrect compiler address resolution ([#133](https://github.com/qmhc/vite-plugin-dts/issues/133)) ([01cc125](https://github.com/qmhc/vite-plugin-dts/commit/01cc125ea98b1994e364487f73d71b0cb6ebcdbf))

### Features

- support customize typescript lib path ([27b83f3](https://github.com/qmhc/vite-plugin-dts/commit/27b83f3423f50307852257f3747c112f2f3cd325)), closes [#134](https://github.com/qmhc/vite-plugin-dts/issues/134)
- support multiple entries for lib mode ([1fafe54](https://github.com/qmhc/vite-plugin-dts/commit/1fafe54991431ce86a404ecb7e179ef1aa8aff0a)), closes [#136](https://github.com/qmhc/vite-plugin-dts/issues/136)

## [1.6.6](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.5...v1.6.6) (2022-10-13)

### Bug Fixes

- adapt @microsoft/api-extractor 7.33+ ([5acb4be](https://github.com/qmhc/vite-plugin-dts/commit/5acb4be4d1e4fe41e42a38ec9e92eeeb6f3a9c15))
- always ship included dts files into soure ([fc345e3](https://github.com/qmhc/vite-plugin-dts/commit/fc345e31b79fd7ca40581727d1964f80d1b9db82)), closes [#126](https://github.com/qmhc/vite-plugin-dts/issues/126)

## [1.6.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.4...v1.6.5) (2022-10-06)

### Bug Fixes

- remove pnpm limitation in preinstall to support npm@6 ([d7167b8](https://github.com/qmhc/vite-plugin-dts/commit/d7167b83381c54075e0e9114c07fe9451b6ffa2d)), closes [#123](https://github.com/qmhc/vite-plugin-dts/issues/123)

## [1.6.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.3...v1.6.4) (2022-09-30)

### Bug Fixes

- patch cjs vars for esm scope ([57e093d](https://github.com/qmhc/vite-plugin-dts/commit/57e093d734e4b81bbeeecbd694b269cca698f914)), closes [#119](https://github.com/qmhc/vite-plugin-dts/issues/119) [#122](https://github.com/qmhc/vite-plugin-dts/issues/122)

## [1.6.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.2...v1.6.3) (2022-09-30)

### Bug Fixes

- both support cjs and esm(using by tsx) ([38bd6a6](https://github.com/qmhc/vite-plugin-dts/commit/38bd6a6789fe375dd5da0aec1ea9b6816751719a))

## [1.6.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.1...v1.6.2) (2022-09-30)

### Bug Fixes

- ensure generate dts for type only files ([f3f4919](https://github.com/qmhc/vite-plugin-dts/commit/f3f4919fa441a27b7d842f1e64dd8d711bd05ec9)), closes [#118](https://github.com/qmhc/vite-plugin-dts/issues/118)

## [1.6.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.0...v1.6.1) (2022-09-28)

### Bug Fixes

- path error in cjs running ([0832af4](https://github.com/qmhc/vite-plugin-dts/commit/0832af4ab49d8166e14b6897bb1538ec6ddf3bb5))

# [1.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.5.0...v1.6.0) (2022-09-28)

### Bug Fixes

- correct compilerOptions.outDir for project init ([8699219](https://github.com/qmhc/vite-plugin-dts/commit/86992194411017e75b1d17c3f72d631267ec187b))
- type error occurred while define `defineProps` retruns as `props` ([41eb53a](https://github.com/qmhc/vite-plugin-dts/commit/41eb53a4da681d2c809dc8a7674a03284acbea02)), closes [#113](https://github.com/qmhc/vite-plugin-dts/issues/113)

### Features

- skip write file when `beforeWriteFile` return exact `false` ([9404ebc](https://github.com/qmhc/vite-plugin-dts/commit/9404ebc811b919a59a21b954d4ba4d43be255390)), closes [#110](https://github.com/qmhc/vite-plugin-dts/issues/110)

# [1.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.1...v1.5.0) (2022-09-11)

### Features

- improve aliasesExclude to support more flexible definition ([f652523](https://github.com/qmhc/vite-plugin-dts/commit/f6525235758b0d29347feb7f21a5085dc81b13a4)), closes [#93](https://github.com/qmhc/vite-plugin-dts/issues/93)

## [1.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.0...v1.4.1) (2022-08-01)

### Bug Fixes

- includes `extends` field when parse tsconfig.json ([#96](https://github.com/qmhc/vite-plugin-dts/issues/96)) ([2631de0](https://github.com/qmhc/vite-plugin-dts/commit/2631de0725e89083752fd590ff604f3f763abd3a))

# [1.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.1...v1.4.0) (2022-07-20)

### Bug Fixes

- ensure emit dts when no script sfc in vue component ([869a466](https://github.com/qmhc/vite-plugin-dts/commit/869a4662af2e690b2e1e63faf941a9e1343dd6ea)), closes [#88](https://github.com/qmhc/vite-plugin-dts/issues/88)

### Features

- support vue 2.7 ([c4e2c4b](https://github.com/qmhc/vite-plugin-dts/commit/c4e2c4b479da837ab697220284ac3c54e89c54a0)), closes [#87](https://github.com/qmhc/vite-plugin-dts/issues/87)

## [1.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.0...v1.3.1) (2022-07-18)

### Bug Fixes

- dynamiclly adjust the exports of inserted index file ([abc9431](https://github.com/qmhc/vite-plugin-dts/commit/abc943143b97dbec0935b62171b16faeebd6fbf4)), closes [#81](https://github.com/qmhc/vite-plugin-dts/issues/81) [#86](https://github.com/qmhc/vite-plugin-dts/issues/86)
- missing inserted entry when multiple outputs ([39ff8ab](https://github.com/qmhc/vite-plugin-dts/commit/39ff8abc0e1dda232c3cf1e6f25ff8daddb37acb))

# [1.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.1...v1.3.0) (2022-07-13)

### Bug Fixes

- aliasesExclude not work when includes empty value ([#85](https://github.com/qmhc/vite-plugin-dts/issues/85)) ([8b9b9aa](https://github.com/qmhc/vite-plugin-dts/commit/8b9b9aa4e9d1c4fa84a2945f4f2421c9269240ff))
- correct type files generate when root is set ([#68](https://github.com/qmhc/vite-plugin-dts/issues/68)) ([0b491bd](https://github.com/qmhc/vite-plugin-dts/commit/0b491bd3720c5b6065dd00a00f9b95e39bf6c8fe))

### Features

- support multiple output dirs ([cd19ee7](https://github.com/qmhc/vite-plugin-dts/commit/cd19ee7f4cf25906a3ffcd89a6c93baf7c7266ed))

## [1.2.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.0...v1.2.1) (2022-07-05)

### Bug Fixes

- add parser plugins param for vue compiler ([7d6bd16](https://github.com/qmhc/vite-plugin-dts/commit/7d6bd16af88701152bf8847e160acf6169bd0918)), closes [#78](https://github.com/qmhc/vite-plugin-dts/issues/78)
- insert entry fail when no default export in source entry ([#82](https://github.com/qmhc/vite-plugin-dts/issues/82)) ([1a4b161](https://github.com/qmhc/vite-plugin-dts/commit/1a4b161647ba1826c3bfa7c9ca5ee7ca4c3ee4bf))

# [1.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.1...v1.2.0) (2022-05-24)

### Bug Fixes

- support read typings form package.json ([6b1bb29](https://github.com/qmhc/vite-plugin-dts/commit/6b1bb2951512733091b950f5767bfe5a1cbe8992))

### Features

- add `aliasesExclude` option ([#75](https://github.com/qmhc/vite-plugin-dts/issues/75)) ([7588ba4](https://github.com/qmhc/vite-plugin-dts/commit/7588ba4755c19e25ca2482b95cb99a59621e693e)), closes [#73](https://github.com/qmhc/vite-plugin-dts/issues/73)
- support override compilerOptions when rollup up ([995612d](https://github.com/qmhc/vite-plugin-dts/commit/995612d5eafa6b610a9ab8826ee7b8691c673b4e)), closes [#74](https://github.com/qmhc/vite-plugin-dts/issues/74)

## [1.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.0...v1.1.1) (2022-04-25)

### Bug Fixes

- incorrect rollup entry path ([a9309d8](https://github.com/qmhc/vite-plugin-dts/commit/a9309d8ca8c0531d1579d3a541cd67ac0a37ce1b))

# [1.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.5...v1.1.0) (2022-04-18)

### Bug Fixes

- lose the type of entry export default ([50f55de](https://github.com/qmhc/vite-plugin-dts/commit/50f55de3ec89d7995056c428a37d16e0cd2a6a4a))

### Features

- support rollup dts files after output ([1d87b44](https://github.com/qmhc/vite-plugin-dts/commit/1d87b44dff3c54a5b1b983b060d3d0d4972c1d94))

## [1.0.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.4...v1.0.5) (2022-04-02)

### Bug Fixes

- entryRoot option not work ([#66](https://github.com/qmhc/vite-plugin-dts/issues/66)) ([bca6423](https://github.com/qmhc/vite-plugin-dts/commit/bca64236076a28dbdd7e6e373c46f3af3723b4e1))

## [1.0.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.3...v1.0.4) (2022-03-28)

### Bug Fixes

- transfer 'debug' to dependencies ([7af9232](https://github.com/qmhc/vite-plugin-dts/commit/7af9232e381f6d572a543706d640c6ecdb5a6c00))

## [1.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.2...v1.0.3) (2022-03-25)

### Bug Fixes

- **example:** cannot resolve types through symlinks ([0914a6a](https://github.com/qmhc/vite-plugin-dts/commit/0914a6ad8dde3514f94e586798d6d73a9c2ac165)), closes [#63](https://github.com/qmhc/vite-plugin-dts/issues/63)

## [1.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.1...v1.0.2) (2022-03-24)

### Bug Fixes

- incorrect entryRoot calculation in linux an mac ([0136990](https://github.com/qmhc/vite-plugin-dts/commit/01369903f484eb74ae6fa23b49537fa64d610706)), closes [#62](https://github.com/qmhc/vite-plugin-dts/issues/62)

## [1.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0...v1.0.1) (2022-03-22)

### Bug Fixes

- missing some libs defind in dependencies ([ab7960f](https://github.com/qmhc/vite-plugin-dts/commit/ab7960f0d957aad6945ef469274bca3e142baa87))

# [1.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.10...v1.0.0) (2022-03-22)

### Features

- support entryRoot option ([c939e35](https://github.com/qmhc/vite-plugin-dts/commit/c939e358dfecacaf2dfd2b0d42118c16462c260a)), closes [#59](https://github.com/qmhc/vite-plugin-dts/issues/59)

### BREAKING CHANGES

- The calculating output paths funtion of root option is
  assigned to entryRoot option, and currently will auto calculating the
  smallest public path as the default value for entryRoot option.

## [0.9.10](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.9...v0.9.10) (2022-03-12)

### Bug Fixes

- make default include same as tsconfig.json ([5ca7fc5](https://github.com/qmhc/vite-plugin-dts/commit/5ca7fc51ab321d4b25ce9856c0e52894c1264d44)), closes [#58](https://github.com/qmhc/vite-plugin-dts/issues/58)

## [0.9.9](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.8...v0.9.9) (2022-01-11)

### Bug Fixes

- should filter vite virtual files ([5fb24ba](https://github.com/qmhc/vite-plugin-dts/commit/5fb24ba2c40ad2ef81e45c33533aada3bb5aefd3)), closes [#50](https://github.com/qmhc/vite-plugin-dts/issues/50)

## [0.9.8](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.7...v0.9.8) (2022-01-10)

### Bug Fixes

- put `copyDtsFiles` option in use ([#53](https://github.com/qmhc/vite-plugin-dts/issues/53)) ([261700f](https://github.com/qmhc/vite-plugin-dts/commit/261700f80a60b3bc1f22f391e00d9999205fe0d2)), closes [#52](https://github.com/qmhc/vite-plugin-dts/issues/52)

## [0.9.7](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.6...v0.9.7) (2021-12-30)

### Bug Fixes

- inserted entry not through beforeWriteFile ([e16b9b1](https://github.com/qmhc/vite-plugin-dts/commit/e16b9b15c66df887bac0ca0b6be05e4d1f8628ed)), closes [#48](https://github.com/qmhc/vite-plugin-dts/issues/48)

## [0.9.6](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.5...v0.9.6) (2021-11-23)

### Bug Fixes

- aliases are not resolved when find ends with '/' ([f04aab2](https://github.com/qmhc/vite-plugin-dts/commit/f04aab21f9f6dc02316a9ff3a9cd43e90cd97828)), closes [#37](https://github.com/qmhc/vite-plugin-dts/issues/37)
- not equally transform dts source files ([ede5146](https://github.com/qmhc/vite-plugin-dts/commit/ede514649282aec786549d490e8127824913914c))

## [0.9.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.4...v0.9.5) (2021-11-21)

### Bug Fixes

- ensure dts source files through beforeWriteFile hook ([3265412](https://github.com/qmhc/vite-plugin-dts/commit/3265412e26dd8736fefab0cf99e920d01bb246c5)), closes [#43](https://github.com/qmhc/vite-plugin-dts/issues/43)

## [0.9.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.3...v0.9.4) (2021-11-10)

### Bug Fixes

- cannot resolve types defined in dts files ([666ca09](https://github.com/qmhc/vite-plugin-dts/commit/666ca0925075bed6926f648a210f37d56af9577b)), closes [#42](https://github.com/qmhc/vite-plugin-dts/issues/42)
- take unused error when using setup-script ([c4145b7](https://github.com/qmhc/vite-plugin-dts/commit/c4145b7352359c79b8ba7c01a1c4afeace4dbc7c))

## [0.9.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.2...v0.9.3) (2021-11-03)

### Bug Fixes

- support require for cjs exports ([cc5aff9](https://github.com/qmhc/vite-plugin-dts/commit/cc5aff9b9906fc87f6012fb66566fd1937a9381e)), closes [#39](https://github.com/qmhc/vite-plugin-dts/issues/39)

## [0.9.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.1...v0.9.2) (2021-10-20)

### Bug Fixes

- support optional @vue/compiler-sfc ([34e1958](https://github.com/qmhc/vite-plugin-dts/commit/34e19587aa64c802cfbd99c5c8018bde8d0e1e2f))

## [0.9.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.3...v0.9.1) (2021-10-18)

### Bug Fixes

- watch mode not update ts/js files ([32a5699](https://github.com/qmhc/vite-plugin-dts/commit/32a5699a9b4f5a24b2a2a870ced43850a0573f82))

### Features

- add afterBuild hook option ([#34](https://github.com/qmhc/vite-plugin-dts/issues/34)) ([e836689](https://github.com/qmhc/vite-plugin-dts/commit/e83668988dab189d185ed9637032f7f80ba1e4db))
- afterDiagnostic and afterBuild support async ([c92d548](https://github.com/qmhc/vite-plugin-dts/commit/c92d54826b81f50fbb38fa909df730b323b75b24))
- skip dependencies by default ([8ca3ed3](https://github.com/qmhc/vite-plugin-dts/commit/8ca3ed30dfcc23c2dd9822fe6ef460a6c832dfe2))

## [0.8.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.2...v0.8.3) (2021-10-11)

### Bug Fixes

- support tsconfig.json using comments ([6e6e446](https://github.com/qmhc/vite-plugin-dts/commit/6e6e44683592060ebd27d1c5712058f2f0f0aeb6)), closes [#31](https://github.com/qmhc/vite-plugin-dts/issues/31)

## [0.8.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.1...v0.8.2) (2021-09-30)

### Bug Fixes

- create correct source for tsx/jsx script ([#29](https://github.com/qmhc/vite-plugin-dts/issues/29)) ([109721e](https://github.com/qmhc/vite-plugin-dts/commit/109721e89007cd702fe73fded44cc6b7efeef46e))

## [0.8.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.0...v0.8.1) (2021-09-22)

### Bug Fixes

- declarationDir make no file generated ([3313a19](https://github.com/qmhc/vite-plugin-dts/commit/3313a19da669bda7fa8fff3a5211652bc22e7413)), closes [#27](https://github.com/qmhc/vite-plugin-dts/issues/27)
- rewrite noEmit option when init porject ([735d26b](https://github.com/qmhc/vite-plugin-dts/commit/735d26b3cad9a90dd272a08448d238045306a1ba)), closes [#28](https://github.com/qmhc/vite-plugin-dts/issues/28)

# [0.8.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.7.0...v0.8.0) (2021-09-13)

### Bug Fixes

- adapt vue@3.2.6+ setup script ([1b62755](https://github.com/qmhc/vite-plugin-dts/commit/1b62755947972a67a034830cc7478fa1a65924c4))
- ouput files out of include bounds ([e1cdedf](https://github.com/qmhc/vite-plugin-dts/commit/e1cdedfc8b41a311d2c22674bd132f23242482ac)), closes [#24](https://github.com/qmhc/vite-plugin-dts/issues/24)

### Features

- add afterDiagnostic option ([7d43ece](https://github.com/qmhc/vite-plugin-dts/commit/7d43ece8fcb9b71d645982a45b01cd9136c525d8)), closes [#22](https://github.com/qmhc/vite-plugin-dts/issues/22)
- support build watch mode ([a920d97](https://github.com/qmhc/vite-plugin-dts/commit/a920d97825dced453f5f70d8776944c02b50e14b)), closes [#5](https://github.com/qmhc/vite-plugin-dts/issues/5)

# [0.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.6.0...v0.7.0) (2021-08-23)

### Bug Fixes

- support using script-setup alongside script ([39517ad](https://github.com/qmhc/vite-plugin-dts/commit/39517ad7119a4b97be7a2d874b43cb73cfa95f07)), closes [#21](https://github.com/qmhc/vite-plugin-dts/issues/21)

### Features

- add noEmitOnError and logDiagnostics options ([8a840fe](https://github.com/qmhc/vite-plugin-dts/commit/8a840fe2692e07e8e881c58ca8f6887d08493cc9))

# [0.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.3...v0.6.0) (2021-08-14)

### Bug Fixes

- resolve alias when using default import ([3121d5b](https://github.com/qmhc/vite-plugin-dts/commit/3121d5bd56a6863e5175c95b00d7a3dedc0cff6d)), closes [#20](https://github.com/qmhc/vite-plugin-dts/issues/20)

### Features

- add copyDtsFiles option ([bdab8c4](https://github.com/qmhc/vite-plugin-dts/commit/bdab8c4b4efa894209c2edeffbbe4d79680eafe9)), closes [#19](https://github.com/qmhc/vite-plugin-dts/issues/19)

## [0.5.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.2...v0.5.3) (2021-07-22)

### Bug Fixes

- add allowJs option dynamically ([36f8de2](https://github.com/qmhc/vite-plugin-dts/commit/36f8de28c68cd52945faeb375cd2931c6ad0468a)), closes [#17](https://github.com/qmhc/vite-plugin-dts/issues/17)
- add js and jsx files when allowJs ([0e1e6f7](https://github.com/qmhc/vite-plugin-dts/commit/0e1e6f7c09c85e169568b2c77c66d452d04a28a2))

## [0.5.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.1...v0.5.2) (2021-07-01)

### Bug Fixes

- cannot require @vue/compiler-sfc in monorepo ([fd9b5c1](https://github.com/qmhc/vite-plugin-dts/commit/fd9b5c1c018feb87e374cdf6671b7b8be14e775b)), closes [#14](https://github.com/qmhc/vite-plugin-dts/issues/14)

## [0.5.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.0...v0.5.1) (2021-06-18)

### Bug Fixes

- support insert entry from '.tsx' file ([e38b7c4](https://github.com/qmhc/vite-plugin-dts/commit/e38b7c4686a8d7405583a97078e97fbef4757da6))

# [0.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.3...v0.5.0) (2021-06-15)

### Bug Fixes

- ignore none export files ([f9c41bc](https://github.com/qmhc/vite-plugin-dts/commit/f9c41bc4e2fd498b53aa366a5f8f2a57589b6176))
- rename insertIndexEntry to insertTypesEntry ([c9d392e](https://github.com/qmhc/vite-plugin-dts/commit/c9d392ec3def98b541bb597c5ed38933b225fe5e))

### Features

- add clearPureImport option ([0357f69](https://github.com/qmhc/vite-plugin-dts/commit/0357f69485204f24d9830a4de59558a23eb66e19))
- defaults insert entry base on pkg.types ([9c71f28](https://github.com/qmhc/vite-plugin-dts/commit/9c71f28eac50d23a42d92bd79ac6d09f1be0544d))
- optional insert index type entry ([592a701](https://github.com/qmhc/vite-plugin-dts/commit/592a701d6213f955306df9de0c7f1d3243a28faa))

## [0.4.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.2...v0.4.3) (2021-06-11)

### Bug Fixes

- back off optional chaining and nullish coalescing ([8e09129](https://github.com/qmhc/vite-plugin-dts/commit/8e09129c1600a013a2c3c50983ab7f358216757f)), closes [#2](https://github.com/qmhc/vite-plugin-dts/issues/2)
- transform fs/promise to fs-extra ([1794b0b](https://github.com/qmhc/vite-plugin-dts/commit/1794b0b93baf4212b4efc5ef06a697adf70e4933)), closes [#4](https://github.com/qmhc/vite-plugin-dts/issues/4)

### Performance Improvements

- use menory result generate bundle ([858bf31](https://github.com/qmhc/vite-plugin-dts/commit/858bf317d16c995feb73e53339d61f7602e36484))

## [0.4.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.1...v0.4.2) (2021-06-09)

### Bug Fixes

- incomplete remove pure import ([a1fd54e](https://github.com/qmhc/vite-plugin-dts/commit/a1fd54e769f1b50ee5858d33879b2a6732625797))
- mamual set include and exclude ([b6fb510](https://github.com/qmhc/vite-plugin-dts/commit/b6fb5106206df9de83276687dd1451fa3d882067))
- more accurate normalize glob ([1d65c47](https://github.com/qmhc/vite-plugin-dts/commit/1d65c47811344a6b566a8dcf22cd22d9298d5a02))
- set rootDir if not set in compilerOptions ([a1d83d2](https://github.com/qmhc/vite-plugin-dts/commit/a1d83d2aa56a32ebef11b9d98fa508a6d9fbd412)), closes [#3](https://github.com/qmhc/vite-plugin-dts/issues/3)
- transform alias include dynamic imports ([a6919b4](https://github.com/qmhc/vite-plugin-dts/commit/a6919b4760cf5cbefbdad1ac674b8a8275dc27dd))
- transform alias include dynamic imports ([3a5511e](https://github.com/qmhc/vite-plugin-dts/commit/3a5511e3e0b961d7f4ac393da623502a186a0538))

## [0.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.0...v0.4.1) (2021-06-08)

### Bug Fixes

- dynamic import regexp endings include ']' and ')' ([e5f37a6](https://github.com/qmhc/vite-plugin-dts/commit/e5f37a6d9e232e268ea1b2ec2eadb6c7bc7d7115))

# [0.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.5...v0.4.0) (2021-06-08)

### Bug Fixes

- bundle only once for multiple formats ([be37fbf](https://github.com/qmhc/vite-plugin-dts/commit/be37fbfcbd03dd23c73908a2d7f2d019437e003a))

### Features

- bundle all from tsconfig include ([252554a](https://github.com/qmhc/vite-plugin-dts/commit/252554af1fa403af1ee00dba16a1c7938e7374c6))

### BREAKING CHANGES

- Deprecated include and exclude options

## [0.3.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.4...v0.3.5) (2021-06-08)

### Bug Fixes

- includes prue type export files ([1341359](https://github.com/qmhc/vite-plugin-dts/commit/1341359b9943fd961ec0d3d40d71252e77c73390))
- incorrect path in transform alias ([d686ff9](https://github.com/qmhc/vite-plugin-dts/commit/d686ff94157c400d7f235331a47fbb9d452afeb9))

## [0.3.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.3...v0.3.4) (2021-06-07)

### Bug Fixes

- remove pure import ([fe241de](https://github.com/qmhc/vite-plugin-dts/commit/fe241de5b583cb5bf2dde83383a8a43e53724ce1))
- static import include relative path ([4065217](https://github.com/qmhc/vite-plugin-dts/commit/40652178b9071509269e6b66cbbbcb3562cf349d))

## [0.3.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.2...v0.3.3) (2021-06-07)

### Bug Fixes

- keep output relative to root not to entry dir ([e83ec64](https://github.com/qmhc/vite-plugin-dts/commit/e83ec643536f888166055a5495db3e2fd1030584))

### BREAKING CHANGES

- Ouput declaration structure no longer relative to entry dir

## [0.3.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.1...v0.3.2) (2021-06-07)

### Bug Fixes

- default root base on vite config ([787ebc1](https://github.com/qmhc/vite-plugin-dts/commit/787ebc175d07370628589a6fc73e325b29655a0b))

## [0.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.0...v0.3.1) (2021-06-06)

### Bug Fixes

- vue file explicit type lost ([d0d8803](https://github.com/qmhc/vite-plugin-dts/commit/d0d88038fb51d71dfb71ab4d0223600801d50349))

# [0.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.2.0...v0.3.0) (2021-06-06)

### Bug Fixes

- transform alias import to relative path ([6d5a2d5](https://github.com/qmhc/vite-plugin-dts/commit/6d5a2d5b5ba691b5572727cbf42b340d05964951))

### Features

- projectOptions refine to compilerOptions and tsConfigFilePath ([eb61113](https://github.com/qmhc/vite-plugin-dts/commit/eb611135446fff7bc82e3bd0d1d2b856a829de98))

### BREAKING CHANGES

- projectOptions no longer supported, the project init should be up to the plugin.

# [0.2.0](https://github.com/qmhc/vite-plugin-dts/compare/b2f0c0aa6eea5b48703248eca3294c5d845404ba...v0.2.0) (2021-06-05)

### Features

- add beforeWriteFile hook ([139e818](https://github.com/qmhc/vite-plugin-dts/commit/139e818cecfa80d4208b3f5ced55e7db57bf7e52))
- add outputDir option ([f289723](https://github.com/qmhc/vite-plugin-dts/commit/f289723672279795c0b96aaac3abf83dd8913b20))
- add transform dynamic import to static ([b2f0c0a](https://github.com/qmhc/vite-plugin-dts/commit/b2f0c0aa6eea5b48703248eca3294c5d845404ba))

## [3.5.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.5.0...v3.5.1) (2023-08-06)

### Bug Fixes

- obviate effect of declarationDir config ([7dee40b](https://github.com/qmhc/vite-plugin-dts/commit/7dee40b1ff79f4250d2af543457e73d8dd71e7c6)), closes [#258](https://github.com/qmhc/vite-plugin-dts/issues/258)

# [3.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.4.0...v3.5.0) (2023-08-04)

### Bug Fixes

- ensure resolved type entry path ends with .d.ts ([3767fdf](https://github.com/qmhc/vite-plugin-dts/commit/3767fdfc1cf1789bfa5cab48f93fa9ec0f55cf12))
- unexpected undefined aliases ([fc51b68](https://github.com/qmhc/vite-plugin-dts/commit/fc51b6827eb47b8781384e0501b8242a91f63912)), closes [#257](https://github.com/qmhc/vite-plugin-dts/issues/257)

### Features

- support emit declaration files only ([#253](https://github.com/qmhc/vite-plugin-dts/issues/253)) ([a23d063](https://github.com/qmhc/vite-plugin-dts/commit/a23d06317925c0ccd9a77227590ce18cec44195a))

# [3.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.3.1...v3.4.0) (2023-07-30)

### Bug Fixes

- fails to generate hen types are already in out dir ([284c77f](https://github.com/qmhc/vite-plugin-dts/commit/284c77ff65741f2cddbca3eba380b4a624cec3c7)), closes [#254](https://github.com/qmhc/vite-plugin-dts/issues/254)

### Features

- support override the config of api-extractor ([8f5929c](https://github.com/qmhc/vite-plugin-dts/commit/8f5929c1812ce8ccbff3d3dfd353f42006b761f7))

## [3.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.3.0...v3.3.1) (2023-07-17)

### Bug Fixes

- correct sources path calculate ([0d84180](https://github.com/qmhc/vite-plugin-dts/commit/0d84180ddd237c4bf00c4e0c8e24d9b5d4423db8)), closes [#245](https://github.com/qmhc/vite-plugin-dts/issues/245)
- ensure lib name is valid ([7cfe2ea](https://github.com/qmhc/vite-plugin-dts/commit/7cfe2eac1d1a346d50e83a8ca1ad7a82bb76cbbc)), closes [#247](https://github.com/qmhc/vite-plugin-dts/issues/247)
- unexpected remove reportFileName config ([27fe3c7](https://github.com/qmhc/vite-plugin-dts/commit/27fe3c775b3bdb894c6c3a992c59d255999676a4)), closes [#246](https://github.com/qmhc/vite-plugin-dts/issues/246)

# [3.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.2.0...v3.3.0) (2023-07-14)

### Bug Fixes

- should pass full path to resolver.support ([7088a0c](https://github.com/qmhc/vite-plugin-dts/commit/7088a0c064c604ffdc528b32aa4f025fb9d607ca))
- using raw target when rolling up types ([e53c815](https://github.com/qmhc/vite-plugin-dts/commit/e53c81515ec03000816ea1ad65e0971e78bab689)), closes [#242](https://github.com/qmhc/vite-plugin-dts/issues/242)

### Features

- beforeWriteFile supports return Promise ([5e5b93c](https://github.com/qmhc/vite-plugin-dts/commit/5e5b93cfcb7e906c431c081e910f0edb97b8378c))
- support sourcemap to `.vue` files ([#243](https://github.com/qmhc/vite-plugin-dts/issues/243)) ([7445046](https://github.com/qmhc/vite-plugin-dts/commit/744504652c06bbbe1718edce5729bb7af1431135))

# [3.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.1.1...v3.2.0) (2023-07-08)

### Bug Fixes

- ensure paths are absolute when process public root ([3628877](https://github.com/qmhc/vite-plugin-dts/commit/3628877f447e6383365024dc43dacfa963f41036)), closes [#238](https://github.com/qmhc/vite-plugin-dts/issues/238)
- normalize paths of resolver transform returns ([3b5a945](https://github.com/qmhc/vite-plugin-dts/commit/3b5a94524a9a00de94ebff015934bb72ad71b192))

### Features

- create resolver for json files ([#237](https://github.com/qmhc/vite-plugin-dts/issues/237)) ([53c58c8](https://github.com/qmhc/vite-plugin-dts/commit/53c58c8071cb892e969cec693f6e75a11eea3fec))
- support parse paths of tsconfig.json to aliases ([#236](https://github.com/qmhc/vite-plugin-dts/issues/236)) ([68fc12a](https://github.com/qmhc/vite-plugin-dts/commit/68fc12af50683fef12f302bc95c3ce6da679ae74))

## [3.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.1.0...v3.1.1) (2023-07-07)

### Bug Fixes

- ensure aliases init when using Rollup ([22c69a4](https://github.com/qmhc/vite-plugin-dts/commit/22c69a4df9cffd0444a64de09221e1ec30d7f8c2))

# [3.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.3...v3.1.0) (2023-07-05)

### Features

- support custom resolvers to transform files ([#233](https://github.com/qmhc/vite-plugin-dts/issues/233)) ([be43a4d](https://github.com/qmhc/vite-plugin-dts/commit/be43a4dfd96ae76bb851dde675d222d51ea46e92))

## [3.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.2...v3.0.3) (2023-07-03)

### Bug Fixes

- incorrect lib path process when rollup types ([292b8b7](https://github.com/qmhc/vite-plugin-dts/commit/292b8b7be90e05d2d19febde2e57ec126aba0d33)), closes [#232](https://github.com/qmhc/vite-plugin-dts/issues/232)

## [3.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.1...v3.0.2) (2023-06-30)

### Bug Fixes

- error if exists same lib when transfrom dynamic imports ([c187278](https://github.com/qmhc/vite-plugin-dts/commit/c187278044972ecab077abada4a761398c74223c))

## [3.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0...v3.0.1) (2023-06-30)

### Bug Fixes

- correctly process default dynamic imports ([99105b0](https://github.com/qmhc/vite-plugin-dts/commit/99105b004325ade3c8ccc19c5375fa60716db300)), closes [#222](https://github.com/qmhc/vite-plugin-dts/issues/222)
- ensure collect manual dts for js source files ([5b7c5e5](https://github.com/qmhc/vite-plugin-dts/commit/5b7c5e52c71e457b904dd2f28b430dc9db267cf7)), closes [#184](https://github.com/qmhc/vite-plugin-dts/issues/184)

# [3.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.3...v3.0.0) (2023-06-30)

### Bug Fixes

- correct path process when specify entryRoot ([fc15dac](https://github.com/qmhc/vite-plugin-dts/commit/fc15dacf0561fc598e25f6de435edf97d6edfdf1)), closes [#229](https://github.com/qmhc/vite-plugin-dts/issues/229) [#230](https://github.com/qmhc/vite-plugin-dts/issues/230)
- correct time cost recording ([57eb430](https://github.com/qmhc/vite-plugin-dts/commit/57eb4309aeec4b5773bfa10c6e48a41c2fd23c69))

### Features

- add strictOutput to limit output write ([07224d1](https://github.com/qmhc/vite-plugin-dts/commit/07224d15576ee6528c9068d8a80fcbbf502018f0))

# [3.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2023-06-27)

### Bug Fixes

- incorrect entryRoot when in single inner entry ([96d32d1](https://github.com/qmhc/vite-plugin-dts/commit/96d32d127b73d48ce192424c4596fe24a2d24619))
- promise A+ specification for `isPromise` method ([#228](https://github.com/qmhc/vite-plugin-dts/issues/228)) ([3454a35](https://github.com/qmhc/vite-plugin-dts/commit/3454a356683a97752b0161a0e5be0328aa55a4f3))

# [3.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.3.0...v3.0.0-beta.2) (2023-06-27)

### Features

- transfer to use Volar, support Rollup, improve watch mode ([#226](https://github.com/qmhc/vite-plugin-dts/issues/226)) ([bb7949c](https://github.com/qmhc/vite-plugin-dts/commit/bb7949c841141b2305640d953be4dddf45ce7d1a))

### BREAKING CHANGES

- Deprecated options: `noEmitOnError`, `skipDiagnostics`
  and `libFolderPath`. Rename options: `outputDir` -> `outDir`,
  `tsConfigFilePath` -> `tsconfigPath`.

# [2.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.1.0...v2.3.0) (2023-04-17)

### Features

- compatible with svelte ([#197](https://github.com/qmhc/vite-plugin-dts/issues/197)) ([5d38517](https://github.com/qmhc/vite-plugin-dts/commit/5d38517ee16fdfc2009725b9146bfe38c49d1709))
- supports multiple extends in tsconfig.json ([#202](https://github.com/qmhc/vite-plugin-dts/issues/202)) ([9fdac66](https://github.com/qmhc/vite-plugin-dts/commit/9fdac66c0cfd827791208a31fbbefd1fad4ac2bf)), closes [#200](https://github.com/qmhc/vite-plugin-dts/issues/200)

# [2.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.2...v2.1.0) (2023-03-08)

### Features

- add bundledPackages configuration ([#186](https://github.com/qmhc/vite-plugin-dts/issues/186)) ([8997680](https://github.com/qmhc/vite-plugin-dts/commit/8997680776d8f35ae5248cc73b2d6a734e5dbc4a))

## [2.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.1...v2.0.2) (2023-02-23)

### Bug Fixes

- recursively resolve extended tsconfig path ([#181](https://github.com/qmhc/vite-plugin-dts/issues/181)) ([7ca8502](https://github.com/qmhc/vite-plugin-dts/commit/7ca85026e9a3e345c334222af5ffa823bda380a7))

## [2.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0...v2.0.1) (2023-02-23)

### Bug Fixes

- **vue:** correctly remove components for normal script ([6dbd9af](https://github.com/qmhc/vite-plugin-dts/commit/6dbd9af3bbd8175ef8a1cee4054ba38f330eef0c))
- **vue:** error when parse no argument function ([4db63b4](https://github.com/qmhc/vite-plugin-dts/commit/4db63b4b1b48686146f07e7e69dcbd4a82b33efb))

# [2.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.3...v2.0.0) (2023-02-23)

### Bug Fixes

- ensure watch all the files defined in include ([42a755c](https://github.com/qmhc/vite-plugin-dts/commit/42a755cf502cdfa8dc9dab0f600e8cc2a46eec18)), closes [#151](https://github.com/qmhc/vite-plugin-dts/issues/151)
- incorrect path resolve when copy dts source files ([434f69e](https://github.com/qmhc/vite-plugin-dts/commit/434f69e9629db5b2e74e609ffbc5f9cd436c1177)), closes [#179](https://github.com/qmhc/vite-plugin-dts/issues/179)
- **react:** unlimited init order when using with react plugin ([92b82ff](https://github.com/qmhc/vite-plugin-dts/commit/92b82ff47e0480c86c76e298feaa7cea8e06f7fa)), closes [#148](https://github.com/qmhc/vite-plugin-dts/issues/148)

### BREAKING CHANGES

- `copyDtsFiles` option now default to false.

# [2.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2023-02-21)

### Bug Fixes

- support manually create dts for source file ([2174868](https://github.com/qmhc/vite-plugin-dts/commit/2174868158766fd16a72f9f44b979d2c62d8ab07)), closes [#178](https://github.com/qmhc/vite-plugin-dts/issues/178)

### Features

- support parse types entry from exports in package.json ([f033cf8](https://github.com/qmhc/vite-plugin-dts/commit/f033cf876b51d7e11f1aa562567f3fd1f97d04f5))

# [2.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2023-02-20)

### Bug Fixes

- should re-transform when file changed in watch mode ([eafdd3c](https://github.com/qmhc/vite-plugin-dts/commit/eafdd3ce7d6757f93a378130b8e34f41e17e4004)), closes [#99](https://github.com/qmhc/vite-plugin-dts/issues/99)
- **vue:** preprocess not direct exported component ([8bd769e](https://github.com/qmhc/vite-plugin-dts/commit/8bd769e013f845a8e486d354d9f8517bd7b02e72))

### Features

- support specify log level of plugin ([2c1aeb0](https://github.com/qmhc/vite-plugin-dts/commit/2c1aeb01637aa4511f4e4c26b891b6e7ea235d50)), closes [#177](https://github.com/qmhc/vite-plugin-dts/issues/177)

# [2.0.0-beta.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2023-02-17)

### Bug Fixes

- **vue:** conversion error when using outside ts props ([25307cf](https://github.com/qmhc/vite-plugin-dts/commit/25307cf6ef89aa8501c8c35ff8ca519021adafea)), closes [#175](https://github.com/qmhc/vite-plugin-dts/issues/175)
- **vue:** remove components option before inferring ([90f8ac1](https://github.com/qmhc/vite-plugin-dts/commit/90f8ac160412de418bc7dc31c97f4ca7daa524ca))

# [2.0.0-beta.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.3...v2.0.0-beta.0) (2023-02-16)

### Bug Fixes

- override composite for root tsconfig ([df1d0f4](https://github.com/qmhc/vite-plugin-dts/commit/df1d0f42d0d9d9341d7766f5c147e7e3fa3733cf)), closes [#153](https://github.com/qmhc/vite-plugin-dts/issues/153)
- **vue:** ignore css vars when compile ([6d2369a](https://github.com/qmhc/vite-plugin-dts/commit/6d2369afe31c18b3dff45296d74b90aba86bb656)), closes [#167](https://github.com/qmhc/vite-plugin-dts/issues/167)

### Features

- **vue:** accurate types inferring for exposed and props ([#173](https://github.com/qmhc/vite-plugin-dts/issues/173)) ([c25448c](https://github.com/qmhc/vite-plugin-dts/commit/c25448c90f3b3969d51dbfa31ad5dc3ce2a9a2aa))

## [1.7.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.2...v1.7.3) (2023-02-14)

### Bug Fixes

- incorrect compilerOptions when rollup dts ([9dd8d9c](https://github.com/qmhc/vite-plugin-dts/commit/9dd8d9c41bed7f79e24ee890c1f28d867346326e)), closes [#171](https://github.com/qmhc/vite-plugin-dts/issues/171)
- normalize `mts` and `cts` declaration files extension ([410288a](https://github.com/qmhc/vite-plugin-dts/commit/410288ac65d7fb4a3065d93c6d7be9e2a8dd3f77)), closes [#169](https://github.com/qmhc/vite-plugin-dts/issues/169)

## [1.7.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.1...v1.7.2) (2023-01-31)

### Bug Fixes

- correct .d.ts extension in multiple outputs ([5c9709c](https://github.com/qmhc/vite-plugin-dts/commit/5c9709c4082ee36f2f28b4ad6e21b846aa27d5d6)), closes [#144](https://github.com/qmhc/vite-plugin-dts/issues/144)
- insertTypesEntry config supports publishConfig.types ([#164](https://github.com/qmhc/vite-plugin-dts/issues/164)) ([dae4ef9](https://github.com/qmhc/vite-plugin-dts/commit/dae4ef9de1175cf5bdc5a7dedfa60d7bab381dba))
- mark typescript as external dependency ([#160](https://github.com/qmhc/vite-plugin-dts/issues/160)) ([31e10d4](https://github.com/qmhc/vite-plugin-dts/commit/31e10d4ec2a37148ad63fdfb141264d6c4966135))

## [1.7.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.0...v1.7.1) (2022-11-14)

### Bug Fixes

- ensure exulde working when transform ([aea8ebd](https://github.com/qmhc/vite-plugin-dts/commit/aea8ebdc4eac489bc62ccebf3552421bd43d318c)), closes [#143](https://github.com/qmhc/vite-plugin-dts/issues/143) [#140](https://github.com/qmhc/vite-plugin-dts/issues/140) [#97](https://github.com/qmhc/vite-plugin-dts/issues/97)
- import vite plugin type via dynamic import ([8bd73c8](https://github.com/qmhc/vite-plugin-dts/commit/8bd73c8fae010ba0d32df8b144345b7f641a6085)), closes [#139](https://github.com/qmhc/vite-plugin-dts/issues/139)

# [1.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.6...v1.7.0) (2022-11-07)

### Bug Fixes

- compiler missing plugin `decorators-legacy` ([#138](https://github.com/qmhc/vite-plugin-dts/issues/138)) ([717af2f](https://github.com/qmhc/vite-plugin-dts/commit/717af2f4bc1b5bd549339179bc5b75dbbd9a348a))
- derprecate logDiagnostics option ([e405328](https://github.com/qmhc/vite-plugin-dts/commit/e405328f64870919a3ee4100fac087870ed4662e))
- incorrect compiler address resolution ([#133](https://github.com/qmhc/vite-plugin-dts/issues/133)) ([01cc125](https://github.com/qmhc/vite-plugin-dts/commit/01cc125ea98b1994e364487f73d71b0cb6ebcdbf))

### Features

- support customize typescript lib path ([27b83f3](https://github.com/qmhc/vite-plugin-dts/commit/27b83f3423f50307852257f3747c112f2f3cd325)), closes [#134](https://github.com/qmhc/vite-plugin-dts/issues/134)
- support multiple entries for lib mode ([1fafe54](https://github.com/qmhc/vite-plugin-dts/commit/1fafe54991431ce86a404ecb7e179ef1aa8aff0a)), closes [#136](https://github.com/qmhc/vite-plugin-dts/issues/136)

## [1.6.6](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.5...v1.6.6) (2022-10-13)

### Bug Fixes

- adapt @microsoft/api-extractor 7.33+ ([5acb4be](https://github.com/qmhc/vite-plugin-dts/commit/5acb4be4d1e4fe41e42a38ec9e92eeeb6f3a9c15))
- always ship included dts files into soure ([fc345e3](https://github.com/qmhc/vite-plugin-dts/commit/fc345e31b79fd7ca40581727d1964f80d1b9db82)), closes [#126](https://github.com/qmhc/vite-plugin-dts/issues/126)

## [1.6.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.4...v1.6.5) (2022-10-06)

### Bug Fixes

- remove pnpm limitation in preinstall to support npm@6 ([d7167b8](https://github.com/qmhc/vite-plugin-dts/commit/d7167b83381c54075e0e9114c07fe9451b6ffa2d)), closes [#123](https://github.com/qmhc/vite-plugin-dts/issues/123)

## [1.6.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.3...v1.6.4) (2022-09-30)

### Bug Fixes

- patch cjs vars for esm scope ([57e093d](https://github.com/qmhc/vite-plugin-dts/commit/57e093d734e4b81bbeeecbd694b269cca698f914)), closes [#119](https://github.com/qmhc/vite-plugin-dts/issues/119) [#122](https://github.com/qmhc/vite-plugin-dts/issues/122)

## [1.6.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.2...v1.6.3) (2022-09-30)

### Bug Fixes

- both support cjs and esm(using by tsx) ([38bd6a6](https://github.com/qmhc/vite-plugin-dts/commit/38bd6a6789fe375dd5da0aec1ea9b6816751719a))

## [1.6.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.1...v1.6.2) (2022-09-30)

### Bug Fixes

- ensure generate dts for type only files ([f3f4919](https://github.com/qmhc/vite-plugin-dts/commit/f3f4919fa441a27b7d842f1e64dd8d711bd05ec9)), closes [#118](https://github.com/qmhc/vite-plugin-dts/issues/118)

## [1.6.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.0...v1.6.1) (2022-09-28)

### Bug Fixes

- path error in cjs running ([0832af4](https://github.com/qmhc/vite-plugin-dts/commit/0832af4ab49d8166e14b6897bb1538ec6ddf3bb5))

# [1.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.5.0...v1.6.0) (2022-09-28)

### Bug Fixes

- correct compilerOptions.outDir for project init ([8699219](https://github.com/qmhc/vite-plugin-dts/commit/86992194411017e75b1d17c3f72d631267ec187b))
- type error occurred while define `defineProps` retruns as `props` ([41eb53a](https://github.com/qmhc/vite-plugin-dts/commit/41eb53a4da681d2c809dc8a7674a03284acbea02)), closes [#113](https://github.com/qmhc/vite-plugin-dts/issues/113)

### Features

- skip write file when `beforeWriteFile` return exact `false` ([9404ebc](https://github.com/qmhc/vite-plugin-dts/commit/9404ebc811b919a59a21b954d4ba4d43be255390)), closes [#110](https://github.com/qmhc/vite-plugin-dts/issues/110)

# [1.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.1...v1.5.0) (2022-09-11)

### Features

- improve aliasesExclude to support more flexible definition ([f652523](https://github.com/qmhc/vite-plugin-dts/commit/f6525235758b0d29347feb7f21a5085dc81b13a4)), closes [#93](https://github.com/qmhc/vite-plugin-dts/issues/93)

## [1.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.0...v1.4.1) (2022-08-01)

### Bug Fixes

- includes `extends` field when parse tsconfig.json ([#96](https://github.com/qmhc/vite-plugin-dts/issues/96)) ([2631de0](https://github.com/qmhc/vite-plugin-dts/commit/2631de0725e89083752fd590ff604f3f763abd3a))

# [1.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.1...v1.4.0) (2022-07-20)

### Bug Fixes

- ensure emit dts when no script sfc in vue component ([869a466](https://github.com/qmhc/vite-plugin-dts/commit/869a4662af2e690b2e1e63faf941a9e1343dd6ea)), closes [#88](https://github.com/qmhc/vite-plugin-dts/issues/88)

### Features

- support vue 2.7 ([c4e2c4b](https://github.com/qmhc/vite-plugin-dts/commit/c4e2c4b479da837ab697220284ac3c54e89c54a0)), closes [#87](https://github.com/qmhc/vite-plugin-dts/issues/87)

## [1.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.0...v1.3.1) (2022-07-18)

### Bug Fixes

- dynamiclly adjust the exports of inserted index file ([abc9431](https://github.com/qmhc/vite-plugin-dts/commit/abc943143b97dbec0935b62171b16faeebd6fbf4)), closes [#81](https://github.com/qmhc/vite-plugin-dts/issues/81) [#86](https://github.com/qmhc/vite-plugin-dts/issues/86)
- missing inserted entry when multiple outputs ([39ff8ab](https://github.com/qmhc/vite-plugin-dts/commit/39ff8abc0e1dda232c3cf1e6f25ff8daddb37acb))

# [1.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.1...v1.3.0) (2022-07-13)

### Bug Fixes

- aliasesExclude not work when includes empty value ([#85](https://github.com/qmhc/vite-plugin-dts/issues/85)) ([8b9b9aa](https://github.com/qmhc/vite-plugin-dts/commit/8b9b9aa4e9d1c4fa84a2945f4f2421c9269240ff))
- correct type files generate when root is set ([#68](https://github.com/qmhc/vite-plugin-dts/issues/68)) ([0b491bd](https://github.com/qmhc/vite-plugin-dts/commit/0b491bd3720c5b6065dd00a00f9b95e39bf6c8fe))

### Features

- support multiple output dirs ([cd19ee7](https://github.com/qmhc/vite-plugin-dts/commit/cd19ee7f4cf25906a3ffcd89a6c93baf7c7266ed))

## [1.2.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.0...v1.2.1) (2022-07-05)

### Bug Fixes

- add parser plugins param for vue compiler ([7d6bd16](https://github.com/qmhc/vite-plugin-dts/commit/7d6bd16af88701152bf8847e160acf6169bd0918)), closes [#78](https://github.com/qmhc/vite-plugin-dts/issues/78)
- insert entry fail when no default export in source entry ([#82](https://github.com/qmhc/vite-plugin-dts/issues/82)) ([1a4b161](https://github.com/qmhc/vite-plugin-dts/commit/1a4b161647ba1826c3bfa7c9ca5ee7ca4c3ee4bf))

# [1.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.1...v1.2.0) (2022-05-24)

### Bug Fixes

- support read typings form package.json ([6b1bb29](https://github.com/qmhc/vite-plugin-dts/commit/6b1bb2951512733091b950f5767bfe5a1cbe8992))

### Features

- add `aliasesExclude` option ([#75](https://github.com/qmhc/vite-plugin-dts/issues/75)) ([7588ba4](https://github.com/qmhc/vite-plugin-dts/commit/7588ba4755c19e25ca2482b95cb99a59621e693e)), closes [#73](https://github.com/qmhc/vite-plugin-dts/issues/73)
- support override compilerOptions when rollup up ([995612d](https://github.com/qmhc/vite-plugin-dts/commit/995612d5eafa6b610a9ab8826ee7b8691c673b4e)), closes [#74](https://github.com/qmhc/vite-plugin-dts/issues/74)

## [1.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.0...v1.1.1) (2022-04-25)

### Bug Fixes

- incorrect rollup entry path ([a9309d8](https://github.com/qmhc/vite-plugin-dts/commit/a9309d8ca8c0531d1579d3a541cd67ac0a37ce1b))

# [1.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.5...v1.1.0) (2022-04-18)

### Bug Fixes

- lose the type of entry export default ([50f55de](https://github.com/qmhc/vite-plugin-dts/commit/50f55de3ec89d7995056c428a37d16e0cd2a6a4a))

### Features

- support rollup dts files after output ([1d87b44](https://github.com/qmhc/vite-plugin-dts/commit/1d87b44dff3c54a5b1b983b060d3d0d4972c1d94))

## [1.0.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.4...v1.0.5) (2022-04-02)

### Bug Fixes

- entryRoot option not work ([#66](https://github.com/qmhc/vite-plugin-dts/issues/66)) ([bca6423](https://github.com/qmhc/vite-plugin-dts/commit/bca64236076a28dbdd7e6e373c46f3af3723b4e1))

## [1.0.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.3...v1.0.4) (2022-03-28)

### Bug Fixes

- transfer 'debug' to dependencies ([7af9232](https://github.com/qmhc/vite-plugin-dts/commit/7af9232e381f6d572a543706d640c6ecdb5a6c00))

## [1.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.2...v1.0.3) (2022-03-25)

### Bug Fixes

- **example:** cannot resolve types through symlinks ([0914a6a](https://github.com/qmhc/vite-plugin-dts/commit/0914a6ad8dde3514f94e586798d6d73a9c2ac165)), closes [#63](https://github.com/qmhc/vite-plugin-dts/issues/63)

## [1.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.1...v1.0.2) (2022-03-24)

### Bug Fixes

- incorrect entryRoot calculation in linux an mac ([0136990](https://github.com/qmhc/vite-plugin-dts/commit/01369903f484eb74ae6fa23b49537fa64d610706)), closes [#62](https://github.com/qmhc/vite-plugin-dts/issues/62)

## [1.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0...v1.0.1) (2022-03-22)

### Bug Fixes

- missing some libs defind in dependencies ([ab7960f](https://github.com/qmhc/vite-plugin-dts/commit/ab7960f0d957aad6945ef469274bca3e142baa87))

# [1.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.10...v1.0.0) (2022-03-22)

### Features

- support entryRoot option ([c939e35](https://github.com/qmhc/vite-plugin-dts/commit/c939e358dfecacaf2dfd2b0d42118c16462c260a)), closes [#59](https://github.com/qmhc/vite-plugin-dts/issues/59)

### BREAKING CHANGES

- The calculating output paths funtion of root option is
  assigned to entryRoot option, and currently will auto calculating the
  smallest public path as the default value for entryRoot option.

## [0.9.10](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.9...v0.9.10) (2022-03-12)

### Bug Fixes

- make default include same as tsconfig.json ([5ca7fc5](https://github.com/qmhc/vite-plugin-dts/commit/5ca7fc51ab321d4b25ce9856c0e52894c1264d44)), closes [#58](https://github.com/qmhc/vite-plugin-dts/issues/58)

## [0.9.9](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.8...v0.9.9) (2022-01-11)

### Bug Fixes

- should filter vite virtual files ([5fb24ba](https://github.com/qmhc/vite-plugin-dts/commit/5fb24ba2c40ad2ef81e45c33533aada3bb5aefd3)), closes [#50](https://github.com/qmhc/vite-plugin-dts/issues/50)

## [0.9.8](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.7...v0.9.8) (2022-01-10)

### Bug Fixes

- put `copyDtsFiles` option in use ([#53](https://github.com/qmhc/vite-plugin-dts/issues/53)) ([261700f](https://github.com/qmhc/vite-plugin-dts/commit/261700f80a60b3bc1f22f391e00d9999205fe0d2)), closes [#52](https://github.com/qmhc/vite-plugin-dts/issues/52)

## [0.9.7](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.6...v0.9.7) (2021-12-30)

### Bug Fixes

- inserted entry not through beforeWriteFile ([e16b9b1](https://github.com/qmhc/vite-plugin-dts/commit/e16b9b15c66df887bac0ca0b6be05e4d1f8628ed)), closes [#48](https://github.com/qmhc/vite-plugin-dts/issues/48)

## [0.9.6](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.5...v0.9.6) (2021-11-23)

### Bug Fixes

- aliases are not resolved when find ends with '/' ([f04aab2](https://github.com/qmhc/vite-plugin-dts/commit/f04aab21f9f6dc02316a9ff3a9cd43e90cd97828)), closes [#37](https://github.com/qmhc/vite-plugin-dts/issues/37)
- not equally transform dts source files ([ede5146](https://github.com/qmhc/vite-plugin-dts/commit/ede514649282aec786549d490e8127824913914c))

## [0.9.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.4...v0.9.5) (2021-11-21)

### Bug Fixes

- ensure dts source files through beforeWriteFile hook ([3265412](https://github.com/qmhc/vite-plugin-dts/commit/3265412e26dd8736fefab0cf99e920d01bb246c5)), closes [#43](https://github.com/qmhc/vite-plugin-dts/issues/43)

## [0.9.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.3...v0.9.4) (2021-11-10)

### Bug Fixes

- cannot resolve types defined in dts files ([666ca09](https://github.com/qmhc/vite-plugin-dts/commit/666ca0925075bed6926f648a210f37d56af9577b)), closes [#42](https://github.com/qmhc/vite-plugin-dts/issues/42)
- take unused error when using setup-script ([c4145b7](https://github.com/qmhc/vite-plugin-dts/commit/c4145b7352359c79b8ba7c01a1c4afeace4dbc7c))

## [0.9.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.2...v0.9.3) (2021-11-03)

### Bug Fixes

- support require for cjs exports ([cc5aff9](https://github.com/qmhc/vite-plugin-dts/commit/cc5aff9b9906fc87f6012fb66566fd1937a9381e)), closes [#39](https://github.com/qmhc/vite-plugin-dts/issues/39)

## [0.9.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.1...v0.9.2) (2021-10-20)

### Bug Fixes

- support optional @vue/compiler-sfc ([34e1958](https://github.com/qmhc/vite-plugin-dts/commit/34e19587aa64c802cfbd99c5c8018bde8d0e1e2f))

## [0.9.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.3...v0.9.1) (2021-10-18)

### Bug Fixes

- watch mode not update ts/js files ([32a5699](https://github.com/qmhc/vite-plugin-dts/commit/32a5699a9b4f5a24b2a2a870ced43850a0573f82))

### Features

- add afterBuild hook option ([#34](https://github.com/qmhc/vite-plugin-dts/issues/34)) ([e836689](https://github.com/qmhc/vite-plugin-dts/commit/e83668988dab189d185ed9637032f7f80ba1e4db))
- afterDiagnostic and afterBuild support async ([c92d548](https://github.com/qmhc/vite-plugin-dts/commit/c92d54826b81f50fbb38fa909df730b323b75b24))
- skip dependencies by default ([8ca3ed3](https://github.com/qmhc/vite-plugin-dts/commit/8ca3ed30dfcc23c2dd9822fe6ef460a6c832dfe2))

## [0.8.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.2...v0.8.3) (2021-10-11)

### Bug Fixes

- support tsconfig.json using comments ([6e6e446](https://github.com/qmhc/vite-plugin-dts/commit/6e6e44683592060ebd27d1c5712058f2f0f0aeb6)), closes [#31](https://github.com/qmhc/vite-plugin-dts/issues/31)

## [0.8.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.1...v0.8.2) (2021-09-30)

### Bug Fixes

- create correct source for tsx/jsx script ([#29](https://github.com/qmhc/vite-plugin-dts/issues/29)) ([109721e](https://github.com/qmhc/vite-plugin-dts/commit/109721e89007cd702fe73fded44cc6b7efeef46e))

## [0.8.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.0...v0.8.1) (2021-09-22)

### Bug Fixes

- declarationDir make no file generated ([3313a19](https://github.com/qmhc/vite-plugin-dts/commit/3313a19da669bda7fa8fff3a5211652bc22e7413)), closes [#27](https://github.com/qmhc/vite-plugin-dts/issues/27)
- rewrite noEmit option when init porject ([735d26b](https://github.com/qmhc/vite-plugin-dts/commit/735d26b3cad9a90dd272a08448d238045306a1ba)), closes [#28](https://github.com/qmhc/vite-plugin-dts/issues/28)

# [0.8.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.7.0...v0.8.0) (2021-09-13)

### Bug Fixes

- adapt vue@3.2.6+ setup script ([1b62755](https://github.com/qmhc/vite-plugin-dts/commit/1b62755947972a67a034830cc7478fa1a65924c4))
- ouput files out of include bounds ([e1cdedf](https://github.com/qmhc/vite-plugin-dts/commit/e1cdedfc8b41a311d2c22674bd132f23242482ac)), closes [#24](https://github.com/qmhc/vite-plugin-dts/issues/24)

### Features

- add afterDiagnostic option ([7d43ece](https://github.com/qmhc/vite-plugin-dts/commit/7d43ece8fcb9b71d645982a45b01cd9136c525d8)), closes [#22](https://github.com/qmhc/vite-plugin-dts/issues/22)
- support build watch mode ([a920d97](https://github.com/qmhc/vite-plugin-dts/commit/a920d97825dced453f5f70d8776944c02b50e14b)), closes [#5](https://github.com/qmhc/vite-plugin-dts/issues/5)

# [0.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.6.0...v0.7.0) (2021-08-23)

### Bug Fixes

- support using script-setup alongside script ([39517ad](https://github.com/qmhc/vite-plugin-dts/commit/39517ad7119a4b97be7a2d874b43cb73cfa95f07)), closes [#21](https://github.com/qmhc/vite-plugin-dts/issues/21)

### Features

- add noEmitOnError and logDiagnostics options ([8a840fe](https://github.com/qmhc/vite-plugin-dts/commit/8a840fe2692e07e8e881c58ca8f6887d08493cc9))

# [0.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.3...v0.6.0) (2021-08-14)

### Bug Fixes

- resolve alias when using default import ([3121d5b](https://github.com/qmhc/vite-plugin-dts/commit/3121d5bd56a6863e5175c95b00d7a3dedc0cff6d)), closes [#20](https://github.com/qmhc/vite-plugin-dts/issues/20)

### Features

- add copyDtsFiles option ([bdab8c4](https://github.com/qmhc/vite-plugin-dts/commit/bdab8c4b4efa894209c2edeffbbe4d79680eafe9)), closes [#19](https://github.com/qmhc/vite-plugin-dts/issues/19)

## [0.5.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.2...v0.5.3) (2021-07-22)

### Bug Fixes

- add allowJs option dynamically ([36f8de2](https://github.com/qmhc/vite-plugin-dts/commit/36f8de28c68cd52945faeb375cd2931c6ad0468a)), closes [#17](https://github.com/qmhc/vite-plugin-dts/issues/17)
- add js and jsx files when allowJs ([0e1e6f7](https://github.com/qmhc/vite-plugin-dts/commit/0e1e6f7c09c85e169568b2c77c66d452d04a28a2))

## [0.5.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.1...v0.5.2) (2021-07-01)

### Bug Fixes

- cannot require @vue/compiler-sfc in monorepo ([fd9b5c1](https://github.com/qmhc/vite-plugin-dts/commit/fd9b5c1c018feb87e374cdf6671b7b8be14e775b)), closes [#14](https://github.com/qmhc/vite-plugin-dts/issues/14)

## [0.5.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.0...v0.5.1) (2021-06-18)

### Bug Fixes

- support insert entry from '.tsx' file ([e38b7c4](https://github.com/qmhc/vite-plugin-dts/commit/e38b7c4686a8d7405583a97078e97fbef4757da6))

# [0.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.3...v0.5.0) (2021-06-15)

### Bug Fixes

- ignore none export files ([f9c41bc](https://github.com/qmhc/vite-plugin-dts/commit/f9c41bc4e2fd498b53aa366a5f8f2a57589b6176))
- rename insertIndexEntry to insertTypesEntry ([c9d392e](https://github.com/qmhc/vite-plugin-dts/commit/c9d392ec3def98b541bb597c5ed38933b225fe5e))

### Features

- add clearPureImport option ([0357f69](https://github.com/qmhc/vite-plugin-dts/commit/0357f69485204f24d9830a4de59558a23eb66e19))
- defaults insert entry base on pkg.types ([9c71f28](https://github.com/qmhc/vite-plugin-dts/commit/9c71f28eac50d23a42d92bd79ac6d09f1be0544d))
- optional insert index type entry ([592a701](https://github.com/qmhc/vite-plugin-dts/commit/592a701d6213f955306df9de0c7f1d3243a28faa))

## [0.4.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.2...v0.4.3) (2021-06-11)

### Bug Fixes

- back off optional chaining and nullish coalescing ([8e09129](https://github.com/qmhc/vite-plugin-dts/commit/8e09129c1600a013a2c3c50983ab7f358216757f)), closes [#2](https://github.com/qmhc/vite-plugin-dts/issues/2)
- transform fs/promise to fs-extra ([1794b0b](https://github.com/qmhc/vite-plugin-dts/commit/1794b0b93baf4212b4efc5ef06a697adf70e4933)), closes [#4](https://github.com/qmhc/vite-plugin-dts/issues/4)

### Performance Improvements

- use menory result generate bundle ([858bf31](https://github.com/qmhc/vite-plugin-dts/commit/858bf317d16c995feb73e53339d61f7602e36484))

## [0.4.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.1...v0.4.2) (2021-06-09)

### Bug Fixes

- incomplete remove pure import ([a1fd54e](https://github.com/qmhc/vite-plugin-dts/commit/a1fd54e769f1b50ee5858d33879b2a6732625797))
- mamual set include and exclude ([b6fb510](https://github.com/qmhc/vite-plugin-dts/commit/b6fb5106206df9de83276687dd1451fa3d882067))
- more accurate normalize glob ([1d65c47](https://github.com/qmhc/vite-plugin-dts/commit/1d65c47811344a6b566a8dcf22cd22d9298d5a02))
- set rootDir if not set in compilerOptions ([a1d83d2](https://github.com/qmhc/vite-plugin-dts/commit/a1d83d2aa56a32ebef11b9d98fa508a6d9fbd412)), closes [#3](https://github.com/qmhc/vite-plugin-dts/issues/3)
- transform alias include dynamic imports ([a6919b4](https://github.com/qmhc/vite-plugin-dts/commit/a6919b4760cf5cbefbdad1ac674b8a8275dc27dd))
- transform alias include dynamic imports ([3a5511e](https://github.com/qmhc/vite-plugin-dts/commit/3a5511e3e0b961d7f4ac393da623502a186a0538))

## [0.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.0...v0.4.1) (2021-06-08)

### Bug Fixes

- dynamic import regexp endings include ']' and ')' ([e5f37a6](https://github.com/qmhc/vite-plugin-dts/commit/e5f37a6d9e232e268ea1b2ec2eadb6c7bc7d7115))

# [0.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.5...v0.4.0) (2021-06-08)

### Bug Fixes

- bundle only once for multiple formats ([be37fbf](https://github.com/qmhc/vite-plugin-dts/commit/be37fbfcbd03dd23c73908a2d7f2d019437e003a))

### Features

- bundle all from tsconfig include ([252554a](https://github.com/qmhc/vite-plugin-dts/commit/252554af1fa403af1ee00dba16a1c7938e7374c6))

### BREAKING CHANGES

- Deprecated include and exclude options

## [0.3.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.4...v0.3.5) (2021-06-08)

### Bug Fixes

- includes prue type export files ([1341359](https://github.com/qmhc/vite-plugin-dts/commit/1341359b9943fd961ec0d3d40d71252e77c73390))
- incorrect path in transform alias ([d686ff9](https://github.com/qmhc/vite-plugin-dts/commit/d686ff94157c400d7f235331a47fbb9d452afeb9))

## [0.3.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.3...v0.3.4) (2021-06-07)

### Bug Fixes

- remove pure import ([fe241de](https://github.com/qmhc/vite-plugin-dts/commit/fe241de5b583cb5bf2dde83383a8a43e53724ce1))
- static import include relative path ([4065217](https://github.com/qmhc/vite-plugin-dts/commit/40652178b9071509269e6b66cbbbcb3562cf349d))

## [0.3.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.2...v0.3.3) (2021-06-07)

### Bug Fixes

- keep output relative to root not to entry dir ([e83ec64](https://github.com/qmhc/vite-plugin-dts/commit/e83ec643536f888166055a5495db3e2fd1030584))

### BREAKING CHANGES

- Ouput declaration structure no longer relative to entry dir

## [0.3.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.1...v0.3.2) (2021-06-07)

### Bug Fixes

- default root base on vite config ([787ebc1](https://github.com/qmhc/vite-plugin-dts/commit/787ebc175d07370628589a6fc73e325b29655a0b))

## [0.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.0...v0.3.1) (2021-06-06)

### Bug Fixes

- vue file explicit type lost ([d0d8803](https://github.com/qmhc/vite-plugin-dts/commit/d0d88038fb51d71dfb71ab4d0223600801d50349))

# [0.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.2.0...v0.3.0) (2021-06-06)

### Bug Fixes

- transform alias import to relative path ([6d5a2d5](https://github.com/qmhc/vite-plugin-dts/commit/6d5a2d5b5ba691b5572727cbf42b340d05964951))

### Features

- projectOptions refine to compilerOptions and tsConfigFilePath ([eb61113](https://github.com/qmhc/vite-plugin-dts/commit/eb611135446fff7bc82e3bd0d1d2b856a829de98))

### BREAKING CHANGES

- projectOptions no longer supported, the project init should be up to the plugin.

# [0.2.0](https://github.com/qmhc/vite-plugin-dts/compare/b2f0c0aa6eea5b48703248eca3294c5d845404ba...v0.2.0) (2021-06-05)

### Features

- add beforeWriteFile hook ([139e818](https://github.com/qmhc/vite-plugin-dts/commit/139e818cecfa80d4208b3f5ced55e7db57bf7e52))
- add outputDir option ([f289723](https://github.com/qmhc/vite-plugin-dts/commit/f289723672279795c0b96aaac3abf83dd8913b20))
- add transform dynamic import to static ([b2f0c0a](https://github.com/qmhc/vite-plugin-dts/commit/b2f0c0aa6eea5b48703248eca3294c5d845404ba))

# [3.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.4.0...v3.5.0) (2023-08-04)

### Bug Fixes

- ensure resolved type entry path ends with .d.ts ([3767fdf](https://github.com/qmhc/vite-plugin-dts/commit/3767fdfc1cf1789bfa5cab48f93fa9ec0f55cf12))
- unexpected undefined aliases ([fc51b68](https://github.com/qmhc/vite-plugin-dts/commit/fc51b6827eb47b8781384e0501b8242a91f63912)), closes [#257](https://github.com/qmhc/vite-plugin-dts/issues/257)

### Features

- support emit declaration files only ([#253](https://github.com/qmhc/vite-plugin-dts/issues/253)) ([a23d063](https://github.com/qmhc/vite-plugin-dts/commit/a23d06317925c0ccd9a77227590ce18cec44195a))

# [3.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.3.1...v3.4.0) (2023-07-30)

### Bug Fixes

- fails to generate hen types are already in out dir ([284c77f](https://github.com/qmhc/vite-plugin-dts/commit/284c77ff65741f2cddbca3eba380b4a624cec3c7)), closes [#254](https://github.com/qmhc/vite-plugin-dts/issues/254)

### Features

- support override the config of api-extractor ([8f5929c](https://github.com/qmhc/vite-plugin-dts/commit/8f5929c1812ce8ccbff3d3dfd353f42006b761f7))

## [3.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.3.0...v3.3.1) (2023-07-17)

### Bug Fixes

- correct sources path calculate ([0d84180](https://github.com/qmhc/vite-plugin-dts/commit/0d84180ddd237c4bf00c4e0c8e24d9b5d4423db8)), closes [#245](https://github.com/qmhc/vite-plugin-dts/issues/245)
- ensure lib name is valid ([7cfe2ea](https://github.com/qmhc/vite-plugin-dts/commit/7cfe2eac1d1a346d50e83a8ca1ad7a82bb76cbbc)), closes [#247](https://github.com/qmhc/vite-plugin-dts/issues/247)
- unexpected remove reportFileName config ([27fe3c7](https://github.com/qmhc/vite-plugin-dts/commit/27fe3c775b3bdb894c6c3a992c59d255999676a4)), closes [#246](https://github.com/qmhc/vite-plugin-dts/issues/246)

# [3.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.2.0...v3.3.0) (2023-07-14)

### Bug Fixes

- should pass full path to resolver.support ([7088a0c](https://github.com/qmhc/vite-plugin-dts/commit/7088a0c064c604ffdc528b32aa4f025fb9d607ca))
- using raw target when rolling up types ([e53c815](https://github.com/qmhc/vite-plugin-dts/commit/e53c81515ec03000816ea1ad65e0971e78bab689)), closes [#242](https://github.com/qmhc/vite-plugin-dts/issues/242)

### Features

- beforeWriteFile supports return Promise ([5e5b93c](https://github.com/qmhc/vite-plugin-dts/commit/5e5b93cfcb7e906c431c081e910f0edb97b8378c))
- support sourcemap to `.vue` files ([#243](https://github.com/qmhc/vite-plugin-dts/issues/243)) ([7445046](https://github.com/qmhc/vite-plugin-dts/commit/744504652c06bbbe1718edce5729bb7af1431135))

# [3.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.1.1...v3.2.0) (2023-07-08)

### Bug Fixes

- ensure paths are absolute when process public root ([3628877](https://github.com/qmhc/vite-plugin-dts/commit/3628877f447e6383365024dc43dacfa963f41036)), closes [#238](https://github.com/qmhc/vite-plugin-dts/issues/238)
- normalize paths of resolver transform returns ([3b5a945](https://github.com/qmhc/vite-plugin-dts/commit/3b5a94524a9a00de94ebff015934bb72ad71b192))

### Features

- create resolver for json files ([#237](https://github.com/qmhc/vite-plugin-dts/issues/237)) ([53c58c8](https://github.com/qmhc/vite-plugin-dts/commit/53c58c8071cb892e969cec693f6e75a11eea3fec))
- support parse paths of tsconfig.json to aliases ([#236](https://github.com/qmhc/vite-plugin-dts/issues/236)) ([68fc12a](https://github.com/qmhc/vite-plugin-dts/commit/68fc12af50683fef12f302bc95c3ce6da679ae74))

## [3.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.1.0...v3.1.1) (2023-07-07)

### Bug Fixes

- ensure aliases init when using Rollup ([22c69a4](https://github.com/qmhc/vite-plugin-dts/commit/22c69a4df9cffd0444a64de09221e1ec30d7f8c2))

# [3.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.3...v3.1.0) (2023-07-05)

### Features

- support custom resolvers to transform files ([#233](https://github.com/qmhc/vite-plugin-dts/issues/233)) ([be43a4d](https://github.com/qmhc/vite-plugin-dts/commit/be43a4dfd96ae76bb851dde675d222d51ea46e92))

## [3.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.2...v3.0.3) (2023-07-03)

### Bug Fixes

- incorrect lib path process when rollup types ([292b8b7](https://github.com/qmhc/vite-plugin-dts/commit/292b8b7be90e05d2d19febde2e57ec126aba0d33)), closes [#232](https://github.com/qmhc/vite-plugin-dts/issues/232)

## [3.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.1...v3.0.2) (2023-06-30)

### Bug Fixes

- error if exists same lib when transfrom dynamic imports ([c187278](https://github.com/qmhc/vite-plugin-dts/commit/c187278044972ecab077abada4a761398c74223c))

## [3.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0...v3.0.1) (2023-06-30)

### Bug Fixes

- correctly process default dynamic imports ([99105b0](https://github.com/qmhc/vite-plugin-dts/commit/99105b004325ade3c8ccc19c5375fa60716db300)), closes [#222](https://github.com/qmhc/vite-plugin-dts/issues/222)
- ensure collect manual dts for js source files ([5b7c5e5](https://github.com/qmhc/vite-plugin-dts/commit/5b7c5e52c71e457b904dd2f28b430dc9db267cf7)), closes [#184](https://github.com/qmhc/vite-plugin-dts/issues/184)

# [3.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.3...v3.0.0) (2023-06-30)

### Bug Fixes

- correct path process when specify entryRoot ([fc15dac](https://github.com/qmhc/vite-plugin-dts/commit/fc15dacf0561fc598e25f6de435edf97d6edfdf1)), closes [#229](https://github.com/qmhc/vite-plugin-dts/issues/229) [#230](https://github.com/qmhc/vite-plugin-dts/issues/230)
- correct time cost recording ([57eb430](https://github.com/qmhc/vite-plugin-dts/commit/57eb4309aeec4b5773bfa10c6e48a41c2fd23c69))

### Features

- add strictOutput to limit output write ([07224d1](https://github.com/qmhc/vite-plugin-dts/commit/07224d15576ee6528c9068d8a80fcbbf502018f0))

# [3.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2023-06-27)

### Bug Fixes

- incorrect entryRoot when in single inner entry ([96d32d1](https://github.com/qmhc/vite-plugin-dts/commit/96d32d127b73d48ce192424c4596fe24a2d24619))
- promise A+ specification for `isPromise` method ([#228](https://github.com/qmhc/vite-plugin-dts/issues/228)) ([3454a35](https://github.com/qmhc/vite-plugin-dts/commit/3454a356683a97752b0161a0e5be0328aa55a4f3))

# [3.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.3.0...v3.0.0-beta.2) (2023-06-27)

### Features

- transfer to use Volar, support Rollup, improve watch mode ([#226](https://github.com/qmhc/vite-plugin-dts/issues/226)) ([bb7949c](https://github.com/qmhc/vite-plugin-dts/commit/bb7949c841141b2305640d953be4dddf45ce7d1a))

### BREAKING CHANGES

- Deprecated options: `noEmitOnError`, `skipDiagnostics`
  and `libFolderPath`. Rename options: `outputDir` -> `outDir`,
  `tsConfigFilePath` -> `tsconfigPath`.

# [2.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.1.0...v2.3.0) (2023-04-17)

### Features

- compatible with svelte ([#197](https://github.com/qmhc/vite-plugin-dts/issues/197)) ([5d38517](https://github.com/qmhc/vite-plugin-dts/commit/5d38517ee16fdfc2009725b9146bfe38c49d1709))
- supports multiple extends in tsconfig.json ([#202](https://github.com/qmhc/vite-plugin-dts/issues/202)) ([9fdac66](https://github.com/qmhc/vite-plugin-dts/commit/9fdac66c0cfd827791208a31fbbefd1fad4ac2bf)), closes [#200](https://github.com/qmhc/vite-plugin-dts/issues/200)

# [2.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.2...v2.1.0) (2023-03-08)

### Features

- add bundledPackages configuration ([#186](https://github.com/qmhc/vite-plugin-dts/issues/186)) ([8997680](https://github.com/qmhc/vite-plugin-dts/commit/8997680776d8f35ae5248cc73b2d6a734e5dbc4a))

## [2.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.1...v2.0.2) (2023-02-23)

### Bug Fixes

- recursively resolve extended tsconfig path ([#181](https://github.com/qmhc/vite-plugin-dts/issues/181)) ([7ca8502](https://github.com/qmhc/vite-plugin-dts/commit/7ca85026e9a3e345c334222af5ffa823bda380a7))

## [2.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0...v2.0.1) (2023-02-23)

### Bug Fixes

- **vue:** correctly remove components for normal script ([6dbd9af](https://github.com/qmhc/vite-plugin-dts/commit/6dbd9af3bbd8175ef8a1cee4054ba38f330eef0c))
- **vue:** error when parse no argument function ([4db63b4](https://github.com/qmhc/vite-plugin-dts/commit/4db63b4b1b48686146f07e7e69dcbd4a82b33efb))

# [2.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.3...v2.0.0) (2023-02-23)

### Bug Fixes

- ensure watch all the files defined in include ([42a755c](https://github.com/qmhc/vite-plugin-dts/commit/42a755cf502cdfa8dc9dab0f600e8cc2a46eec18)), closes [#151](https://github.com/qmhc/vite-plugin-dts/issues/151)
- incorrect path resolve when copy dts source files ([434f69e](https://github.com/qmhc/vite-plugin-dts/commit/434f69e9629db5b2e74e609ffbc5f9cd436c1177)), closes [#179](https://github.com/qmhc/vite-plugin-dts/issues/179)
- **react:** unlimited init order when using with react plugin ([92b82ff](https://github.com/qmhc/vite-plugin-dts/commit/92b82ff47e0480c86c76e298feaa7cea8e06f7fa)), closes [#148](https://github.com/qmhc/vite-plugin-dts/issues/148)

### BREAKING CHANGES

- `copyDtsFiles` option now default to false.

# [2.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2023-02-21)

### Bug Fixes

- support manually create dts for source file ([2174868](https://github.com/qmhc/vite-plugin-dts/commit/2174868158766fd16a72f9f44b979d2c62d8ab07)), closes [#178](https://github.com/qmhc/vite-plugin-dts/issues/178)

### Features

- support parse types entry from exports in package.json ([f033cf8](https://github.com/qmhc/vite-plugin-dts/commit/f033cf876b51d7e11f1aa562567f3fd1f97d04f5))

# [2.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2023-02-20)

### Bug Fixes

- should re-transform when file changed in watch mode ([eafdd3c](https://github.com/qmhc/vite-plugin-dts/commit/eafdd3ce7d6757f93a378130b8e34f41e17e4004)), closes [#99](https://github.com/qmhc/vite-plugin-dts/issues/99)
- **vue:** preprocess not direct exported component ([8bd769e](https://github.com/qmhc/vite-plugin-dts/commit/8bd769e013f845a8e486d354d9f8517bd7b02e72))

### Features

- support specify log level of plugin ([2c1aeb0](https://github.com/qmhc/vite-plugin-dts/commit/2c1aeb01637aa4511f4e4c26b891b6e7ea235d50)), closes [#177](https://github.com/qmhc/vite-plugin-dts/issues/177)

# [2.0.0-beta.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2023-02-17)

### Bug Fixes

- **vue:** conversion error when using outside ts props ([25307cf](https://github.com/qmhc/vite-plugin-dts/commit/25307cf6ef89aa8501c8c35ff8ca519021adafea)), closes [#175](https://github.com/qmhc/vite-plugin-dts/issues/175)
- **vue:** remove components option before inferring ([90f8ac1](https://github.com/qmhc/vite-plugin-dts/commit/90f8ac160412de418bc7dc31c97f4ca7daa524ca))

# [2.0.0-beta.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.3...v2.0.0-beta.0) (2023-02-16)

### Bug Fixes

- override composite for root tsconfig ([df1d0f4](https://github.com/qmhc/vite-plugin-dts/commit/df1d0f42d0d9d9341d7766f5c147e7e3fa3733cf)), closes [#153](https://github.com/qmhc/vite-plugin-dts/issues/153)
- **vue:** ignore css vars when compile ([6d2369a](https://github.com/qmhc/vite-plugin-dts/commit/6d2369afe31c18b3dff45296d74b90aba86bb656)), closes [#167](https://github.com/qmhc/vite-plugin-dts/issues/167)

### Features

- **vue:** accurate types inferring for exposed and props ([#173](https://github.com/qmhc/vite-plugin-dts/issues/173)) ([c25448c](https://github.com/qmhc/vite-plugin-dts/commit/c25448c90f3b3969d51dbfa31ad5dc3ce2a9a2aa))

## [1.7.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.2...v1.7.3) (2023-02-14)

### Bug Fixes

- incorrect compilerOptions when rollup dts ([9dd8d9c](https://github.com/qmhc/vite-plugin-dts/commit/9dd8d9c41bed7f79e24ee890c1f28d867346326e)), closes [#171](https://github.com/qmhc/vite-plugin-dts/issues/171)
- normalize `mts` and `cts` declaration files extension ([410288a](https://github.com/qmhc/vite-plugin-dts/commit/410288ac65d7fb4a3065d93c6d7be9e2a8dd3f77)), closes [#169](https://github.com/qmhc/vite-plugin-dts/issues/169)

## [1.7.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.1...v1.7.2) (2023-01-31)

### Bug Fixes

- correct .d.ts extension in multiple outputs ([5c9709c](https://github.com/qmhc/vite-plugin-dts/commit/5c9709c4082ee36f2f28b4ad6e21b846aa27d5d6)), closes [#144](https://github.com/qmhc/vite-plugin-dts/issues/144)
- insertTypesEntry config supports publishConfig.types ([#164](https://github.com/qmhc/vite-plugin-dts/issues/164)) ([dae4ef9](https://github.com/qmhc/vite-plugin-dts/commit/dae4ef9de1175cf5bdc5a7dedfa60d7bab381dba))
- mark typescript as external dependency ([#160](https://github.com/qmhc/vite-plugin-dts/issues/160)) ([31e10d4](https://github.com/qmhc/vite-plugin-dts/commit/31e10d4ec2a37148ad63fdfb141264d6c4966135))

## [1.7.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.0...v1.7.1) (2022-11-14)

### Bug Fixes

- ensure exulde working when transform ([aea8ebd](https://github.com/qmhc/vite-plugin-dts/commit/aea8ebdc4eac489bc62ccebf3552421bd43d318c)), closes [#143](https://github.com/qmhc/vite-plugin-dts/issues/143) [#140](https://github.com/qmhc/vite-plugin-dts/issues/140) [#97](https://github.com/qmhc/vite-plugin-dts/issues/97)
- import vite plugin type via dynamic import ([8bd73c8](https://github.com/qmhc/vite-plugin-dts/commit/8bd73c8fae010ba0d32df8b144345b7f641a6085)), closes [#139](https://github.com/qmhc/vite-plugin-dts/issues/139)

# [1.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.6...v1.7.0) (2022-11-07)

### Bug Fixes

- compiler missing plugin `decorators-legacy` ([#138](https://github.com/qmhc/vite-plugin-dts/issues/138)) ([717af2f](https://github.com/qmhc/vite-plugin-dts/commit/717af2f4bc1b5bd549339179bc5b75dbbd9a348a))
- derprecate logDiagnostics option ([e405328](https://github.com/qmhc/vite-plugin-dts/commit/e405328f64870919a3ee4100fac087870ed4662e))
- incorrect compiler address resolution ([#133](https://github.com/qmhc/vite-plugin-dts/issues/133)) ([01cc125](https://github.com/qmhc/vite-plugin-dts/commit/01cc125ea98b1994e364487f73d71b0cb6ebcdbf))

### Features

- support customize typescript lib path ([27b83f3](https://github.com/qmhc/vite-plugin-dts/commit/27b83f3423f50307852257f3747c112f2f3cd325)), closes [#134](https://github.com/qmhc/vite-plugin-dts/issues/134)
- support multiple entries for lib mode ([1fafe54](https://github.com/qmhc/vite-plugin-dts/commit/1fafe54991431ce86a404ecb7e179ef1aa8aff0a)), closes [#136](https://github.com/qmhc/vite-plugin-dts/issues/136)

## [1.6.6](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.5...v1.6.6) (2022-10-13)

### Bug Fixes

- adapt @microsoft/api-extractor 7.33+ ([5acb4be](https://github.com/qmhc/vite-plugin-dts/commit/5acb4be4d1e4fe41e42a38ec9e92eeeb6f3a9c15))
- always ship included dts files into soure ([fc345e3](https://github.com/qmhc/vite-plugin-dts/commit/fc345e31b79fd7ca40581727d1964f80d1b9db82)), closes [#126](https://github.com/qmhc/vite-plugin-dts/issues/126)

## [1.6.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.4...v1.6.5) (2022-10-06)

### Bug Fixes

- remove pnpm limitation in preinstall to support npm@6 ([d7167b8](https://github.com/qmhc/vite-plugin-dts/commit/d7167b83381c54075e0e9114c07fe9451b6ffa2d)), closes [#123](https://github.com/qmhc/vite-plugin-dts/issues/123)

## [1.6.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.3...v1.6.4) (2022-09-30)

### Bug Fixes

- patch cjs vars for esm scope ([57e093d](https://github.com/qmhc/vite-plugin-dts/commit/57e093d734e4b81bbeeecbd694b269cca698f914)), closes [#119](https://github.com/qmhc/vite-plugin-dts/issues/119) [#122](https://github.com/qmhc/vite-plugin-dts/issues/122)

## [1.6.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.2...v1.6.3) (2022-09-30)

### Bug Fixes

- both support cjs and esm(using by tsx) ([38bd6a6](https://github.com/qmhc/vite-plugin-dts/commit/38bd6a6789fe375dd5da0aec1ea9b6816751719a))

## [1.6.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.1...v1.6.2) (2022-09-30)

### Bug Fixes

- ensure generate dts for type only files ([f3f4919](https://github.com/qmhc/vite-plugin-dts/commit/f3f4919fa441a27b7d842f1e64dd8d711bd05ec9)), closes [#118](https://github.com/qmhc/vite-plugin-dts/issues/118)

## [1.6.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.0...v1.6.1) (2022-09-28)

### Bug Fixes

- path error in cjs running ([0832af4](https://github.com/qmhc/vite-plugin-dts/commit/0832af4ab49d8166e14b6897bb1538ec6ddf3bb5))

# [1.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.5.0...v1.6.0) (2022-09-28)

### Bug Fixes

- correct compilerOptions.outDir for project init ([8699219](https://github.com/qmhc/vite-plugin-dts/commit/86992194411017e75b1d17c3f72d631267ec187b))
- type error occurred while define `defineProps` retruns as `props` ([41eb53a](https://github.com/qmhc/vite-plugin-dts/commit/41eb53a4da681d2c809dc8a7674a03284acbea02)), closes [#113](https://github.com/qmhc/vite-plugin-dts/issues/113)

### Features

- skip write file when `beforeWriteFile` return exact `false` ([9404ebc](https://github.com/qmhc/vite-plugin-dts/commit/9404ebc811b919a59a21b954d4ba4d43be255390)), closes [#110](https://github.com/qmhc/vite-plugin-dts/issues/110)

# [1.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.1...v1.5.0) (2022-09-11)

### Features

- improve aliasesExclude to support more flexible definition ([f652523](https://github.com/qmhc/vite-plugin-dts/commit/f6525235758b0d29347feb7f21a5085dc81b13a4)), closes [#93](https://github.com/qmhc/vite-plugin-dts/issues/93)

## [1.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.0...v1.4.1) (2022-08-01)

### Bug Fixes

- includes `extends` field when parse tsconfig.json ([#96](https://github.com/qmhc/vite-plugin-dts/issues/96)) ([2631de0](https://github.com/qmhc/vite-plugin-dts/commit/2631de0725e89083752fd590ff604f3f763abd3a))

# [1.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.1...v1.4.0) (2022-07-20)

### Bug Fixes

- ensure emit dts when no script sfc in vue component ([869a466](https://github.com/qmhc/vite-plugin-dts/commit/869a4662af2e690b2e1e63faf941a9e1343dd6ea)), closes [#88](https://github.com/qmhc/vite-plugin-dts/issues/88)

### Features

- support vue 2.7 ([c4e2c4b](https://github.com/qmhc/vite-plugin-dts/commit/c4e2c4b479da837ab697220284ac3c54e89c54a0)), closes [#87](https://github.com/qmhc/vite-plugin-dts/issues/87)

## [1.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.0...v1.3.1) (2022-07-18)

### Bug Fixes

- dynamiclly adjust the exports of inserted index file ([abc9431](https://github.com/qmhc/vite-plugin-dts/commit/abc943143b97dbec0935b62171b16faeebd6fbf4)), closes [#81](https://github.com/qmhc/vite-plugin-dts/issues/81) [#86](https://github.com/qmhc/vite-plugin-dts/issues/86)
- missing inserted entry when multiple outputs ([39ff8ab](https://github.com/qmhc/vite-plugin-dts/commit/39ff8abc0e1dda232c3cf1e6f25ff8daddb37acb))

# [1.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.1...v1.3.0) (2022-07-13)

### Bug Fixes

- aliasesExclude not work when includes empty value ([#85](https://github.com/qmhc/vite-plugin-dts/issues/85)) ([8b9b9aa](https://github.com/qmhc/vite-plugin-dts/commit/8b9b9aa4e9d1c4fa84a2945f4f2421c9269240ff))
- correct type files generate when root is set ([#68](https://github.com/qmhc/vite-plugin-dts/issues/68)) ([0b491bd](https://github.com/qmhc/vite-plugin-dts/commit/0b491bd3720c5b6065dd00a00f9b95e39bf6c8fe))

### Features

- support multiple output dirs ([cd19ee7](https://github.com/qmhc/vite-plugin-dts/commit/cd19ee7f4cf25906a3ffcd89a6c93baf7c7266ed))

## [1.2.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.0...v1.2.1) (2022-07-05)

### Bug Fixes

- add parser plugins param for vue compiler ([7d6bd16](https://github.com/qmhc/vite-plugin-dts/commit/7d6bd16af88701152bf8847e160acf6169bd0918)), closes [#78](https://github.com/qmhc/vite-plugin-dts/issues/78)
- insert entry fail when no default export in source entry ([#82](https://github.com/qmhc/vite-plugin-dts/issues/82)) ([1a4b161](https://github.com/qmhc/vite-plugin-dts/commit/1a4b161647ba1826c3bfa7c9ca5ee7ca4c3ee4bf))

# [1.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.1...v1.2.0) (2022-05-24)

### Bug Fixes

- support read typings form package.json ([6b1bb29](https://github.com/qmhc/vite-plugin-dts/commit/6b1bb2951512733091b950f5767bfe5a1cbe8992))

### Features

- add `aliasesExclude` option ([#75](https://github.com/qmhc/vite-plugin-dts/issues/75)) ([7588ba4](https://github.com/qmhc/vite-plugin-dts/commit/7588ba4755c19e25ca2482b95cb99a59621e693e)), closes [#73](https://github.com/qmhc/vite-plugin-dts/issues/73)
- support override compilerOptions when rollup up ([995612d](https://github.com/qmhc/vite-plugin-dts/commit/995612d5eafa6b610a9ab8826ee7b8691c673b4e)), closes [#74](https://github.com/qmhc/vite-plugin-dts/issues/74)

## [1.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.0...v1.1.1) (2022-04-25)

### Bug Fixes

- incorrect rollup entry path ([a9309d8](https://github.com/qmhc/vite-plugin-dts/commit/a9309d8ca8c0531d1579d3a541cd67ac0a37ce1b))

# [1.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.5...v1.1.0) (2022-04-18)

### Bug Fixes

- lose the type of entry export default ([50f55de](https://github.com/qmhc/vite-plugin-dts/commit/50f55de3ec89d7995056c428a37d16e0cd2a6a4a))

### Features

- support rollup dts files after output ([1d87b44](https://github.com/qmhc/vite-plugin-dts/commit/1d87b44dff3c54a5b1b983b060d3d0d4972c1d94))

## [1.0.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.4...v1.0.5) (2022-04-02)

### Bug Fixes

- entryRoot option not work ([#66](https://github.com/qmhc/vite-plugin-dts/issues/66)) ([bca6423](https://github.com/qmhc/vite-plugin-dts/commit/bca64236076a28dbdd7e6e373c46f3af3723b4e1))

## [1.0.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.3...v1.0.4) (2022-03-28)

### Bug Fixes

- transfer 'debug' to dependencies ([7af9232](https://github.com/qmhc/vite-plugin-dts/commit/7af9232e381f6d572a543706d640c6ecdb5a6c00))

## [1.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.2...v1.0.3) (2022-03-25)

### Bug Fixes

- **example:** cannot resolve types through symlinks ([0914a6a](https://github.com/qmhc/vite-plugin-dts/commit/0914a6ad8dde3514f94e586798d6d73a9c2ac165)), closes [#63](https://github.com/qmhc/vite-plugin-dts/issues/63)

## [1.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.1...v1.0.2) (2022-03-24)

### Bug Fixes

- incorrect entryRoot calculation in linux an mac ([0136990](https://github.com/qmhc/vite-plugin-dts/commit/01369903f484eb74ae6fa23b49537fa64d610706)), closes [#62](https://github.com/qmhc/vite-plugin-dts/issues/62)

## [1.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0...v1.0.1) (2022-03-22)

### Bug Fixes

- missing some libs defind in dependencies ([ab7960f](https://github.com/qmhc/vite-plugin-dts/commit/ab7960f0d957aad6945ef469274bca3e142baa87))

# [1.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.10...v1.0.0) (2022-03-22)

### Features

- support entryRoot option ([c939e35](https://github.com/qmhc/vite-plugin-dts/commit/c939e358dfecacaf2dfd2b0d42118c16462c260a)), closes [#59](https://github.com/qmhc/vite-plugin-dts/issues/59)

### BREAKING CHANGES

- The calculating output paths funtion of root option is
  assigned to entryRoot option, and currently will auto calculating the
  smallest public path as the default value for entryRoot option.

## [0.9.10](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.9...v0.9.10) (2022-03-12)

### Bug Fixes

- make default include same as tsconfig.json ([5ca7fc5](https://github.com/qmhc/vite-plugin-dts/commit/5ca7fc51ab321d4b25ce9856c0e52894c1264d44)), closes [#58](https://github.com/qmhc/vite-plugin-dts/issues/58)

## [0.9.9](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.8...v0.9.9) (2022-01-11)

### Bug Fixes

- should filter vite virtual files ([5fb24ba](https://github.com/qmhc/vite-plugin-dts/commit/5fb24ba2c40ad2ef81e45c33533aada3bb5aefd3)), closes [#50](https://github.com/qmhc/vite-plugin-dts/issues/50)

## [0.9.8](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.7...v0.9.8) (2022-01-10)

### Bug Fixes

- put `copyDtsFiles` option in use ([#53](https://github.com/qmhc/vite-plugin-dts/issues/53)) ([261700f](https://github.com/qmhc/vite-plugin-dts/commit/261700f80a60b3bc1f22f391e00d9999205fe0d2)), closes [#52](https://github.com/qmhc/vite-plugin-dts/issues/52)

## [0.9.7](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.6...v0.9.7) (2021-12-30)

### Bug Fixes

- inserted entry not through beforeWriteFile ([e16b9b1](https://github.com/qmhc/vite-plugin-dts/commit/e16b9b15c66df887bac0ca0b6be05e4d1f8628ed)), closes [#48](https://github.com/qmhc/vite-plugin-dts/issues/48)

## [0.9.6](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.5...v0.9.6) (2021-11-23)

### Bug Fixes

- aliases are not resolved when find ends with '/' ([f04aab2](https://github.com/qmhc/vite-plugin-dts/commit/f04aab21f9f6dc02316a9ff3a9cd43e90cd97828)), closes [#37](https://github.com/qmhc/vite-plugin-dts/issues/37)
- not equally transform dts source files ([ede5146](https://github.com/qmhc/vite-plugin-dts/commit/ede514649282aec786549d490e8127824913914c))

## [0.9.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.4...v0.9.5) (2021-11-21)

### Bug Fixes

- ensure dts source files through beforeWriteFile hook ([3265412](https://github.com/qmhc/vite-plugin-dts/commit/3265412e26dd8736fefab0cf99e920d01bb246c5)), closes [#43](https://github.com/qmhc/vite-plugin-dts/issues/43)

## [0.9.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.3...v0.9.4) (2021-11-10)

### Bug Fixes

- cannot resolve types defined in dts files ([666ca09](https://github.com/qmhc/vite-plugin-dts/commit/666ca0925075bed6926f648a210f37d56af9577b)), closes [#42](https://github.com/qmhc/vite-plugin-dts/issues/42)
- take unused error when using setup-script ([c4145b7](https://github.com/qmhc/vite-plugin-dts/commit/c4145b7352359c79b8ba7c01a1c4afeace4dbc7c))

## [0.9.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.2...v0.9.3) (2021-11-03)

### Bug Fixes

- support require for cjs exports ([cc5aff9](https://github.com/qmhc/vite-plugin-dts/commit/cc5aff9b9906fc87f6012fb66566fd1937a9381e)), closes [#39](https://github.com/qmhc/vite-plugin-dts/issues/39)

## [0.9.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.1...v0.9.2) (2021-10-20)

### Bug Fixes

- support optional @vue/compiler-sfc ([34e1958](https://github.com/qmhc/vite-plugin-dts/commit/34e19587aa64c802cfbd99c5c8018bde8d0e1e2f))

## [0.9.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.3...v0.9.1) (2021-10-18)

### Bug Fixes

- watch mode not update ts/js files ([32a5699](https://github.com/qmhc/vite-plugin-dts/commit/32a5699a9b4f5a24b2a2a870ced43850a0573f82))

### Features

- add afterBuild hook option ([#34](https://github.com/qmhc/vite-plugin-dts/issues/34)) ([e836689](https://github.com/qmhc/vite-plugin-dts/commit/e83668988dab189d185ed9637032f7f80ba1e4db))
- afterDiagnostic and afterBuild support async ([c92d548](https://github.com/qmhc/vite-plugin-dts/commit/c92d54826b81f50fbb38fa909df730b323b75b24))
- skip dependencies by default ([8ca3ed3](https://github.com/qmhc/vite-plugin-dts/commit/8ca3ed30dfcc23c2dd9822fe6ef460a6c832dfe2))

## [0.8.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.2...v0.8.3) (2021-10-11)

### Bug Fixes

- support tsconfig.json using comments ([6e6e446](https://github.com/qmhc/vite-plugin-dts/commit/6e6e44683592060ebd27d1c5712058f2f0f0aeb6)), closes [#31](https://github.com/qmhc/vite-plugin-dts/issues/31)

## [0.8.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.1...v0.8.2) (2021-09-30)

### Bug Fixes

- create correct source for tsx/jsx script ([#29](https://github.com/qmhc/vite-plugin-dts/issues/29)) ([109721e](https://github.com/qmhc/vite-plugin-dts/commit/109721e89007cd702fe73fded44cc6b7efeef46e))

## [0.8.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.0...v0.8.1) (2021-09-22)

### Bug Fixes

- declarationDir make no file generated ([3313a19](https://github.com/qmhc/vite-plugin-dts/commit/3313a19da669bda7fa8fff3a5211652bc22e7413)), closes [#27](https://github.com/qmhc/vite-plugin-dts/issues/27)
- rewrite noEmit option when init porject ([735d26b](https://github.com/qmhc/vite-plugin-dts/commit/735d26b3cad9a90dd272a08448d238045306a1ba)), closes [#28](https://github.com/qmhc/vite-plugin-dts/issues/28)

# [0.8.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.7.0...v0.8.0) (2021-09-13)

### Bug Fixes

- adapt vue@3.2.6+ setup script ([1b62755](https://github.com/qmhc/vite-plugin-dts/commit/1b62755947972a67a034830cc7478fa1a65924c4))
- ouput files out of include bounds ([e1cdedf](https://github.com/qmhc/vite-plugin-dts/commit/e1cdedfc8b41a311d2c22674bd132f23242482ac)), closes [#24](https://github.com/qmhc/vite-plugin-dts/issues/24)

### Features

- add afterDiagnostic option ([7d43ece](https://github.com/qmhc/vite-plugin-dts/commit/7d43ece8fcb9b71d645982a45b01cd9136c525d8)), closes [#22](https://github.com/qmhc/vite-plugin-dts/issues/22)
- support build watch mode ([a920d97](https://github.com/qmhc/vite-plugin-dts/commit/a920d97825dced453f5f70d8776944c02b50e14b)), closes [#5](https://github.com/qmhc/vite-plugin-dts/issues/5)

# [0.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.6.0...v0.7.0) (2021-08-23)

### Bug Fixes

- support using script-setup alongside script ([39517ad](https://github.com/qmhc/vite-plugin-dts/commit/39517ad7119a4b97be7a2d874b43cb73cfa95f07)), closes [#21](https://github.com/qmhc/vite-plugin-dts/issues/21)

### Features

- add noEmitOnError and logDiagnostics options ([8a840fe](https://github.com/qmhc/vite-plugin-dts/commit/8a840fe2692e07e8e881c58ca8f6887d08493cc9))

# [0.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.3...v0.6.0) (2021-08-14)

### Bug Fixes

- resolve alias when using default import ([3121d5b](https://github.com/qmhc/vite-plugin-dts/commit/3121d5bd56a6863e5175c95b00d7a3dedc0cff6d)), closes [#20](https://github.com/qmhc/vite-plugin-dts/issues/20)

### Features

- add copyDtsFiles option ([bdab8c4](https://github.com/qmhc/vite-plugin-dts/commit/bdab8c4b4efa894209c2edeffbbe4d79680eafe9)), closes [#19](https://github.com/qmhc/vite-plugin-dts/issues/19)

## [0.5.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.2...v0.5.3) (2021-07-22)

### Bug Fixes

- add allowJs option dynamically ([36f8de2](https://github.com/qmhc/vite-plugin-dts/commit/36f8de28c68cd52945faeb375cd2931c6ad0468a)), closes [#17](https://github.com/qmhc/vite-plugin-dts/issues/17)
- add js and jsx files when allowJs ([0e1e6f7](https://github.com/qmhc/vite-plugin-dts/commit/0e1e6f7c09c85e169568b2c77c66d452d04a28a2))

## [0.5.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.1...v0.5.2) (2021-07-01)

### Bug Fixes

- cannot require @vue/compiler-sfc in monorepo ([fd9b5c1](https://github.com/qmhc/vite-plugin-dts/commit/fd9b5c1c018feb87e374cdf6671b7b8be14e775b)), closes [#14](https://github.com/qmhc/vite-plugin-dts/issues/14)

## [0.5.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.0...v0.5.1) (2021-06-18)

### Bug Fixes

- support insert entry from '.tsx' file ([e38b7c4](https://github.com/qmhc/vite-plugin-dts/commit/e38b7c4686a8d7405583a97078e97fbef4757da6))

# [0.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.3...v0.5.0) (2021-06-15)

### Bug Fixes

- ignore none export files ([f9c41bc](https://github.com/qmhc/vite-plugin-dts/commit/f9c41bc4e2fd498b53aa366a5f8f2a57589b6176))
- rename insertIndexEntry to insertTypesEntry ([c9d392e](https://github.com/qmhc/vite-plugin-dts/commit/c9d392ec3def98b541bb597c5ed38933b225fe5e))

### Features

- add clearPureImport option ([0357f69](https://github.com/qmhc/vite-plugin-dts/commit/0357f69485204f24d9830a4de59558a23eb66e19))
- defaults insert entry base on pkg.types ([9c71f28](https://github.com/qmhc/vite-plugin-dts/commit/9c71f28eac50d23a42d92bd79ac6d09f1be0544d))
- optional insert index type entry ([592a701](https://github.com/qmhc/vite-plugin-dts/commit/592a701d6213f955306df9de0c7f1d3243a28faa))

## [0.4.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.2...v0.4.3) (2021-06-11)

### Bug Fixes

- back off optional chaining and nullish coalescing ([8e09129](https://github.com/qmhc/vite-plugin-dts/commit/8e09129c1600a013a2c3c50983ab7f358216757f)), closes [#2](https://github.com/qmhc/vite-plugin-dts/issues/2)
- transform fs/promise to fs-extra ([1794b0b](https://github.com/qmhc/vite-plugin-dts/commit/1794b0b93baf4212b4efc5ef06a697adf70e4933)), closes [#4](https://github.com/qmhc/vite-plugin-dts/issues/4)

### Performance Improvements

- use menory result generate bundle ([858bf31](https://github.com/qmhc/vite-plugin-dts/commit/858bf317d16c995feb73e53339d61f7602e36484))

## [0.4.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.1...v0.4.2) (2021-06-09)

### Bug Fixes

- incomplete remove pure import ([a1fd54e](https://github.com/qmhc/vite-plugin-dts/commit/a1fd54e769f1b50ee5858d33879b2a6732625797))
- mamual set include and exclude ([b6fb510](https://github.com/qmhc/vite-plugin-dts/commit/b6fb5106206df9de83276687dd1451fa3d882067))
- more accurate normalize glob ([1d65c47](https://github.com/qmhc/vite-plugin-dts/commit/1d65c47811344a6b566a8dcf22cd22d9298d5a02))
- set rootDir if not set in compilerOptions ([a1d83d2](https://github.com/qmhc/vite-plugin-dts/commit/a1d83d2aa56a32ebef11b9d98fa508a6d9fbd412)), closes [#3](https://github.com/qmhc/vite-plugin-dts/issues/3)
- transform alias include dynamic imports ([a6919b4](https://github.com/qmhc/vite-plugin-dts/commit/a6919b4760cf5cbefbdad1ac674b8a8275dc27dd))
- transform alias include dynamic imports ([3a5511e](https://github.com/qmhc/vite-plugin-dts/commit/3a5511e3e0b961d7f4ac393da623502a186a0538))

## [0.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.0...v0.4.1) (2021-06-08)

### Bug Fixes

- dynamic import regexp endings include ']' and ')' ([e5f37a6](https://github.com/qmhc/vite-plugin-dts/commit/e5f37a6d9e232e268ea1b2ec2eadb6c7bc7d7115))

# [0.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.5...v0.4.0) (2021-06-08)

### Bug Fixes

- bundle only once for multiple formats ([be37fbf](https://github.com/qmhc/vite-plugin-dts/commit/be37fbfcbd03dd23c73908a2d7f2d019437e003a))

### Features

- bundle all from tsconfig include ([252554a](https://github.com/qmhc/vite-plugin-dts/commit/252554af1fa403af1ee00dba16a1c7938e7374c6))

### BREAKING CHANGES

- Deprecated include and exclude options

## [0.3.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.4...v0.3.5) (2021-06-08)

### Bug Fixes

- includes prue type export files ([1341359](https://github.com/qmhc/vite-plugin-dts/commit/1341359b9943fd961ec0d3d40d71252e77c73390))
- incorrect path in transform alias ([d686ff9](https://github.com/qmhc/vite-plugin-dts/commit/d686ff94157c400d7f235331a47fbb9d452afeb9))

## [0.3.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.3...v0.3.4) (2021-06-07)

### Bug Fixes

- remove pure import ([fe241de](https://github.com/qmhc/vite-plugin-dts/commit/fe241de5b583cb5bf2dde83383a8a43e53724ce1))
- static import include relative path ([4065217](https://github.com/qmhc/vite-plugin-dts/commit/40652178b9071509269e6b66cbbbcb3562cf349d))

## [0.3.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.2...v0.3.3) (2021-06-07)

### Bug Fixes

- keep output relative to root not to entry dir ([e83ec64](https://github.com/qmhc/vite-plugin-dts/commit/e83ec643536f888166055a5495db3e2fd1030584))

### BREAKING CHANGES

- Ouput declaration structure no longer relative to entry dir

## [0.3.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.1...v0.3.2) (2021-06-07)

### Bug Fixes

- default root base on vite config ([787ebc1](https://github.com/qmhc/vite-plugin-dts/commit/787ebc175d07370628589a6fc73e325b29655a0b))

## [0.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.0...v0.3.1) (2021-06-06)

### Bug Fixes

- vue file explicit type lost ([d0d8803](https://github.com/qmhc/vite-plugin-dts/commit/d0d88038fb51d71dfb71ab4d0223600801d50349))

# [0.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.2.0...v0.3.0) (2021-06-06)

### Bug Fixes

- transform alias import to relative path ([6d5a2d5](https://github.com/qmhc/vite-plugin-dts/commit/6d5a2d5b5ba691b5572727cbf42b340d05964951))

### Features

- projectOptions refine to compilerOptions and tsConfigFilePath ([eb61113](https://github.com/qmhc/vite-plugin-dts/commit/eb611135446fff7bc82e3bd0d1d2b856a829de98))

### BREAKING CHANGES

- projectOptions no longer supported, the project init should be up to the plugin.

# [0.2.0](https://github.com/qmhc/vite-plugin-dts/compare/b2f0c0aa6eea5b48703248eca3294c5d845404ba...v0.2.0) (2021-06-05)

### Features

- add beforeWriteFile hook ([139e818](https://github.com/qmhc/vite-plugin-dts/commit/139e818cecfa80d4208b3f5ced55e7db57bf7e52))
- add outputDir option ([f289723](https://github.com/qmhc/vite-plugin-dts/commit/f289723672279795c0b96aaac3abf83dd8913b20))
- add transform dynamic import to static ([b2f0c0a](https://github.com/qmhc/vite-plugin-dts/commit/b2f0c0aa6eea5b48703248eca3294c5d845404ba))

# [3.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.3.1...v3.4.0) (2023-07-30)

### Bug Fixes

- fails to generate hen types are already in out dir ([284c77f](https://github.com/qmhc/vite-plugin-dts/commit/284c77ff65741f2cddbca3eba380b4a624cec3c7)), closes [#254](https://github.com/qmhc/vite-plugin-dts/issues/254)

### Features

- support override the config of api-extractor ([8f5929c](https://github.com/qmhc/vite-plugin-dts/commit/8f5929c1812ce8ccbff3d3dfd353f42006b761f7))

## [3.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.3.0...v3.3.1) (2023-07-17)

### Bug Fixes

- correct sources path calculate ([0d84180](https://github.com/qmhc/vite-plugin-dts/commit/0d84180ddd237c4bf00c4e0c8e24d9b5d4423db8)), closes [#245](https://github.com/qmhc/vite-plugin-dts/issues/245)
- ensure lib name is valid ([7cfe2ea](https://github.com/qmhc/vite-plugin-dts/commit/7cfe2eac1d1a346d50e83a8ca1ad7a82bb76cbbc)), closes [#247](https://github.com/qmhc/vite-plugin-dts/issues/247)
- unexpected remove reportFileName config ([27fe3c7](https://github.com/qmhc/vite-plugin-dts/commit/27fe3c775b3bdb894c6c3a992c59d255999676a4)), closes [#246](https://github.com/qmhc/vite-plugin-dts/issues/246)

# [3.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.2.0...v3.3.0) (2023-07-14)

### Bug Fixes

- should pass full path to resolver.support ([7088a0c](https://github.com/qmhc/vite-plugin-dts/commit/7088a0c064c604ffdc528b32aa4f025fb9d607ca))
- using raw target when rolling up types ([e53c815](https://github.com/qmhc/vite-plugin-dts/commit/e53c81515ec03000816ea1ad65e0971e78bab689)), closes [#242](https://github.com/qmhc/vite-plugin-dts/issues/242)

### Features

- beforeWriteFile supports return Promise ([5e5b93c](https://github.com/qmhc/vite-plugin-dts/commit/5e5b93cfcb7e906c431c081e910f0edb97b8378c))
- support sourcemap to `.vue` files ([#243](https://github.com/qmhc/vite-plugin-dts/issues/243)) ([7445046](https://github.com/qmhc/vite-plugin-dts/commit/744504652c06bbbe1718edce5729bb7af1431135))

# [3.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.1.1...v3.2.0) (2023-07-08)

### Bug Fixes

- ensure paths are absolute when process public root ([3628877](https://github.com/qmhc/vite-plugin-dts/commit/3628877f447e6383365024dc43dacfa963f41036)), closes [#238](https://github.com/qmhc/vite-plugin-dts/issues/238)
- normalize paths of resolver transform returns ([3b5a945](https://github.com/qmhc/vite-plugin-dts/commit/3b5a94524a9a00de94ebff015934bb72ad71b192))

### Features

- create resolver for json files ([#237](https://github.com/qmhc/vite-plugin-dts/issues/237)) ([53c58c8](https://github.com/qmhc/vite-plugin-dts/commit/53c58c8071cb892e969cec693f6e75a11eea3fec))
- support parse paths of tsconfig.json to aliases ([#236](https://github.com/qmhc/vite-plugin-dts/issues/236)) ([68fc12a](https://github.com/qmhc/vite-plugin-dts/commit/68fc12af50683fef12f302bc95c3ce6da679ae74))

## [3.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.1.0...v3.1.1) (2023-07-07)

### Bug Fixes

- ensure aliases init when using Rollup ([22c69a4](https://github.com/qmhc/vite-plugin-dts/commit/22c69a4df9cffd0444a64de09221e1ec30d7f8c2))

# [3.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.3...v3.1.0) (2023-07-05)

### Features

- support custom resolvers to transform files ([#233](https://github.com/qmhc/vite-plugin-dts/issues/233)) ([be43a4d](https://github.com/qmhc/vite-plugin-dts/commit/be43a4dfd96ae76bb851dde675d222d51ea46e92))

## [3.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.2...v3.0.3) (2023-07-03)

### Bug Fixes

- incorrect lib path process when rollup types ([292b8b7](https://github.com/qmhc/vite-plugin-dts/commit/292b8b7be90e05d2d19febde2e57ec126aba0d33)), closes [#232](https://github.com/qmhc/vite-plugin-dts/issues/232)

## [3.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.1...v3.0.2) (2023-06-30)

### Bug Fixes

- error if exists same lib when transfrom dynamic imports ([c187278](https://github.com/qmhc/vite-plugin-dts/commit/c187278044972ecab077abada4a761398c74223c))

## [3.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0...v3.0.1) (2023-06-30)

### Bug Fixes

- correctly process default dynamic imports ([99105b0](https://github.com/qmhc/vite-plugin-dts/commit/99105b004325ade3c8ccc19c5375fa60716db300)), closes [#222](https://github.com/qmhc/vite-plugin-dts/issues/222)
- ensure collect manual dts for js source files ([5b7c5e5](https://github.com/qmhc/vite-plugin-dts/commit/5b7c5e52c71e457b904dd2f28b430dc9db267cf7)), closes [#184](https://github.com/qmhc/vite-plugin-dts/issues/184)

# [3.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.3...v3.0.0) (2023-06-30)

### Bug Fixes

- correct path process when specify entryRoot ([fc15dac](https://github.com/qmhc/vite-plugin-dts/commit/fc15dacf0561fc598e25f6de435edf97d6edfdf1)), closes [#229](https://github.com/qmhc/vite-plugin-dts/issues/229) [#230](https://github.com/qmhc/vite-plugin-dts/issues/230)
- correct time cost recording ([57eb430](https://github.com/qmhc/vite-plugin-dts/commit/57eb4309aeec4b5773bfa10c6e48a41c2fd23c69))

### Features

- add strictOutput to limit output write ([07224d1](https://github.com/qmhc/vite-plugin-dts/commit/07224d15576ee6528c9068d8a80fcbbf502018f0))

# [3.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2023-06-27)

### Bug Fixes

- incorrect entryRoot when in single inner entry ([96d32d1](https://github.com/qmhc/vite-plugin-dts/commit/96d32d127b73d48ce192424c4596fe24a2d24619))
- promise A+ specification for `isPromise` method ([#228](https://github.com/qmhc/vite-plugin-dts/issues/228)) ([3454a35](https://github.com/qmhc/vite-plugin-dts/commit/3454a356683a97752b0161a0e5be0328aa55a4f3))

# [3.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.3.0...v3.0.0-beta.2) (2023-06-27)

### Features

- transfer to use Volar, support Rollup, improve watch mode ([#226](https://github.com/qmhc/vite-plugin-dts/issues/226)) ([bb7949c](https://github.com/qmhc/vite-plugin-dts/commit/bb7949c841141b2305640d953be4dddf45ce7d1a))

### BREAKING CHANGES

- Deprecated options: `noEmitOnError`, `skipDiagnostics`
  and `libFolderPath`. Rename options: `outputDir` -> `outDir`,
  `tsConfigFilePath` -> `tsconfigPath`.

# [2.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.1.0...v2.3.0) (2023-04-17)

### Features

- compatible with svelte ([#197](https://github.com/qmhc/vite-plugin-dts/issues/197)) ([5d38517](https://github.com/qmhc/vite-plugin-dts/commit/5d38517ee16fdfc2009725b9146bfe38c49d1709))
- supports multiple extends in tsconfig.json ([#202](https://github.com/qmhc/vite-plugin-dts/issues/202)) ([9fdac66](https://github.com/qmhc/vite-plugin-dts/commit/9fdac66c0cfd827791208a31fbbefd1fad4ac2bf)), closes [#200](https://github.com/qmhc/vite-plugin-dts/issues/200)

# [2.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.2...v2.1.0) (2023-03-08)

### Features

- add bundledPackages configuration ([#186](https://github.com/qmhc/vite-plugin-dts/issues/186)) ([8997680](https://github.com/qmhc/vite-plugin-dts/commit/8997680776d8f35ae5248cc73b2d6a734e5dbc4a))

## [2.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.1...v2.0.2) (2023-02-23)

### Bug Fixes

- recursively resolve extended tsconfig path ([#181](https://github.com/qmhc/vite-plugin-dts/issues/181)) ([7ca8502](https://github.com/qmhc/vite-plugin-dts/commit/7ca85026e9a3e345c334222af5ffa823bda380a7))

## [2.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0...v2.0.1) (2023-02-23)

### Bug Fixes

- **vue:** correctly remove components for normal script ([6dbd9af](https://github.com/qmhc/vite-plugin-dts/commit/6dbd9af3bbd8175ef8a1cee4054ba38f330eef0c))
- **vue:** error when parse no argument function ([4db63b4](https://github.com/qmhc/vite-plugin-dts/commit/4db63b4b1b48686146f07e7e69dcbd4a82b33efb))

# [2.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.3...v2.0.0) (2023-02-23)

### Bug Fixes

- ensure watch all the files defined in include ([42a755c](https://github.com/qmhc/vite-plugin-dts/commit/42a755cf502cdfa8dc9dab0f600e8cc2a46eec18)), closes [#151](https://github.com/qmhc/vite-plugin-dts/issues/151)
- incorrect path resolve when copy dts source files ([434f69e](https://github.com/qmhc/vite-plugin-dts/commit/434f69e9629db5b2e74e609ffbc5f9cd436c1177)), closes [#179](https://github.com/qmhc/vite-plugin-dts/issues/179)
- **react:** unlimited init order when using with react plugin ([92b82ff](https://github.com/qmhc/vite-plugin-dts/commit/92b82ff47e0480c86c76e298feaa7cea8e06f7fa)), closes [#148](https://github.com/qmhc/vite-plugin-dts/issues/148)

### BREAKING CHANGES

- `copyDtsFiles` option now default to false.

# [2.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2023-02-21)

### Bug Fixes

- support manually create dts for source file ([2174868](https://github.com/qmhc/vite-plugin-dts/commit/2174868158766fd16a72f9f44b979d2c62d8ab07)), closes [#178](https://github.com/qmhc/vite-plugin-dts/issues/178)

### Features

- support parse types entry from exports in package.json ([f033cf8](https://github.com/qmhc/vite-plugin-dts/commit/f033cf876b51d7e11f1aa562567f3fd1f97d04f5))

# [2.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2023-02-20)

### Bug Fixes

- should re-transform when file changed in watch mode ([eafdd3c](https://github.com/qmhc/vite-plugin-dts/commit/eafdd3ce7d6757f93a378130b8e34f41e17e4004)), closes [#99](https://github.com/qmhc/vite-plugin-dts/issues/99)
- **vue:** preprocess not direct exported component ([8bd769e](https://github.com/qmhc/vite-plugin-dts/commit/8bd769e013f845a8e486d354d9f8517bd7b02e72))

### Features

- support specify log level of plugin ([2c1aeb0](https://github.com/qmhc/vite-plugin-dts/commit/2c1aeb01637aa4511f4e4c26b891b6e7ea235d50)), closes [#177](https://github.com/qmhc/vite-plugin-dts/issues/177)

# [2.0.0-beta.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2023-02-17)

### Bug Fixes

- **vue:** conversion error when using outside ts props ([25307cf](https://github.com/qmhc/vite-plugin-dts/commit/25307cf6ef89aa8501c8c35ff8ca519021adafea)), closes [#175](https://github.com/qmhc/vite-plugin-dts/issues/175)
- **vue:** remove components option before inferring ([90f8ac1](https://github.com/qmhc/vite-plugin-dts/commit/90f8ac160412de418bc7dc31c97f4ca7daa524ca))

# [2.0.0-beta.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.3...v2.0.0-beta.0) (2023-02-16)

### Bug Fixes

- override composite for root tsconfig ([df1d0f4](https://github.com/qmhc/vite-plugin-dts/commit/df1d0f42d0d9d9341d7766f5c147e7e3fa3733cf)), closes [#153](https://github.com/qmhc/vite-plugin-dts/issues/153)
- **vue:** ignore css vars when compile ([6d2369a](https://github.com/qmhc/vite-plugin-dts/commit/6d2369afe31c18b3dff45296d74b90aba86bb656)), closes [#167](https://github.com/qmhc/vite-plugin-dts/issues/167)

### Features

- **vue:** accurate types inferring for exposed and props ([#173](https://github.com/qmhc/vite-plugin-dts/issues/173)) ([c25448c](https://github.com/qmhc/vite-plugin-dts/commit/c25448c90f3b3969d51dbfa31ad5dc3ce2a9a2aa))

## [1.7.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.2...v1.7.3) (2023-02-14)

### Bug Fixes

- incorrect compilerOptions when rollup dts ([9dd8d9c](https://github.com/qmhc/vite-plugin-dts/commit/9dd8d9c41bed7f79e24ee890c1f28d867346326e)), closes [#171](https://github.com/qmhc/vite-plugin-dts/issues/171)
- normalize `mts` and `cts` declaration files extension ([410288a](https://github.com/qmhc/vite-plugin-dts/commit/410288ac65d7fb4a3065d93c6d7be9e2a8dd3f77)), closes [#169](https://github.com/qmhc/vite-plugin-dts/issues/169)

## [1.7.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.1...v1.7.2) (2023-01-31)

### Bug Fixes

- correct .d.ts extension in multiple outputs ([5c9709c](https://github.com/qmhc/vite-plugin-dts/commit/5c9709c4082ee36f2f28b4ad6e21b846aa27d5d6)), closes [#144](https://github.com/qmhc/vite-plugin-dts/issues/144)
- insertTypesEntry config supports publishConfig.types ([#164](https://github.com/qmhc/vite-plugin-dts/issues/164)) ([dae4ef9](https://github.com/qmhc/vite-plugin-dts/commit/dae4ef9de1175cf5bdc5a7dedfa60d7bab381dba))
- mark typescript as external dependency ([#160](https://github.com/qmhc/vite-plugin-dts/issues/160)) ([31e10d4](https://github.com/qmhc/vite-plugin-dts/commit/31e10d4ec2a37148ad63fdfb141264d6c4966135))

## [1.7.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.0...v1.7.1) (2022-11-14)

### Bug Fixes

- ensure exulde working when transform ([aea8ebd](https://github.com/qmhc/vite-plugin-dts/commit/aea8ebdc4eac489bc62ccebf3552421bd43d318c)), closes [#143](https://github.com/qmhc/vite-plugin-dts/issues/143) [#140](https://github.com/qmhc/vite-plugin-dts/issues/140) [#97](https://github.com/qmhc/vite-plugin-dts/issues/97)
- import vite plugin type via dynamic import ([8bd73c8](https://github.com/qmhc/vite-plugin-dts/commit/8bd73c8fae010ba0d32df8b144345b7f641a6085)), closes [#139](https://github.com/qmhc/vite-plugin-dts/issues/139)

# [1.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.6...v1.7.0) (2022-11-07)

### Bug Fixes

- compiler missing plugin `decorators-legacy` ([#138](https://github.com/qmhc/vite-plugin-dts/issues/138)) ([717af2f](https://github.com/qmhc/vite-plugin-dts/commit/717af2f4bc1b5bd549339179bc5b75dbbd9a348a))
- derprecate logDiagnostics option ([e405328](https://github.com/qmhc/vite-plugin-dts/commit/e405328f64870919a3ee4100fac087870ed4662e))
- incorrect compiler address resolution ([#133](https://github.com/qmhc/vite-plugin-dts/issues/133)) ([01cc125](https://github.com/qmhc/vite-plugin-dts/commit/01cc125ea98b1994e364487f73d71b0cb6ebcdbf))

### Features

- support customize typescript lib path ([27b83f3](https://github.com/qmhc/vite-plugin-dts/commit/27b83f3423f50307852257f3747c112f2f3cd325)), closes [#134](https://github.com/qmhc/vite-plugin-dts/issues/134)
- support multiple entries for lib mode ([1fafe54](https://github.com/qmhc/vite-plugin-dts/commit/1fafe54991431ce86a404ecb7e179ef1aa8aff0a)), closes [#136](https://github.com/qmhc/vite-plugin-dts/issues/136)

## [1.6.6](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.5...v1.6.6) (2022-10-13)

### Bug Fixes

- adapt @microsoft/api-extractor 7.33+ ([5acb4be](https://github.com/qmhc/vite-plugin-dts/commit/5acb4be4d1e4fe41e42a38ec9e92eeeb6f3a9c15))
- always ship included dts files into soure ([fc345e3](https://github.com/qmhc/vite-plugin-dts/commit/fc345e31b79fd7ca40581727d1964f80d1b9db82)), closes [#126](https://github.com/qmhc/vite-plugin-dts/issues/126)

## [1.6.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.4...v1.6.5) (2022-10-06)

### Bug Fixes

- remove pnpm limitation in preinstall to support npm@6 ([d7167b8](https://github.com/qmhc/vite-plugin-dts/commit/d7167b83381c54075e0e9114c07fe9451b6ffa2d)), closes [#123](https://github.com/qmhc/vite-plugin-dts/issues/123)

## [1.6.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.3...v1.6.4) (2022-09-30)

### Bug Fixes

- patch cjs vars for esm scope ([57e093d](https://github.com/qmhc/vite-plugin-dts/commit/57e093d734e4b81bbeeecbd694b269cca698f914)), closes [#119](https://github.com/qmhc/vite-plugin-dts/issues/119) [#122](https://github.com/qmhc/vite-plugin-dts/issues/122)

## [1.6.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.2...v1.6.3) (2022-09-30)

### Bug Fixes

- both support cjs and esm(using by tsx) ([38bd6a6](https://github.com/qmhc/vite-plugin-dts/commit/38bd6a6789fe375dd5da0aec1ea9b6816751719a))

## [1.6.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.1...v1.6.2) (2022-09-30)

### Bug Fixes

- ensure generate dts for type only files ([f3f4919](https://github.com/qmhc/vite-plugin-dts/commit/f3f4919fa441a27b7d842f1e64dd8d711bd05ec9)), closes [#118](https://github.com/qmhc/vite-plugin-dts/issues/118)

## [1.6.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.0...v1.6.1) (2022-09-28)

### Bug Fixes

- path error in cjs running ([0832af4](https://github.com/qmhc/vite-plugin-dts/commit/0832af4ab49d8166e14b6897bb1538ec6ddf3bb5))

# [1.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.5.0...v1.6.0) (2022-09-28)

### Bug Fixes

- correct compilerOptions.outDir for project init ([8699219](https://github.com/qmhc/vite-plugin-dts/commit/86992194411017e75b1d17c3f72d631267ec187b))
- type error occurred while define `defineProps` retruns as `props` ([41eb53a](https://github.com/qmhc/vite-plugin-dts/commit/41eb53a4da681d2c809dc8a7674a03284acbea02)), closes [#113](https://github.com/qmhc/vite-plugin-dts/issues/113)

### Features

- skip write file when `beforeWriteFile` return exact `false` ([9404ebc](https://github.com/qmhc/vite-plugin-dts/commit/9404ebc811b919a59a21b954d4ba4d43be255390)), closes [#110](https://github.com/qmhc/vite-plugin-dts/issues/110)

# [1.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.1...v1.5.0) (2022-09-11)

### Features

- improve aliasesExclude to support more flexible definition ([f652523](https://github.com/qmhc/vite-plugin-dts/commit/f6525235758b0d29347feb7f21a5085dc81b13a4)), closes [#93](https://github.com/qmhc/vite-plugin-dts/issues/93)

## [1.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.0...v1.4.1) (2022-08-01)

### Bug Fixes

- includes `extends` field when parse tsconfig.json ([#96](https://github.com/qmhc/vite-plugin-dts/issues/96)) ([2631de0](https://github.com/qmhc/vite-plugin-dts/commit/2631de0725e89083752fd590ff604f3f763abd3a))

# [1.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.1...v1.4.0) (2022-07-20)

### Bug Fixes

- ensure emit dts when no script sfc in vue component ([869a466](https://github.com/qmhc/vite-plugin-dts/commit/869a4662af2e690b2e1e63faf941a9e1343dd6ea)), closes [#88](https://github.com/qmhc/vite-plugin-dts/issues/88)

### Features

- support vue 2.7 ([c4e2c4b](https://github.com/qmhc/vite-plugin-dts/commit/c4e2c4b479da837ab697220284ac3c54e89c54a0)), closes [#87](https://github.com/qmhc/vite-plugin-dts/issues/87)

## [1.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.0...v1.3.1) (2022-07-18)

### Bug Fixes

- dynamiclly adjust the exports of inserted index file ([abc9431](https://github.com/qmhc/vite-plugin-dts/commit/abc943143b97dbec0935b62171b16faeebd6fbf4)), closes [#81](https://github.com/qmhc/vite-plugin-dts/issues/81) [#86](https://github.com/qmhc/vite-plugin-dts/issues/86)
- missing inserted entry when multiple outputs ([39ff8ab](https://github.com/qmhc/vite-plugin-dts/commit/39ff8abc0e1dda232c3cf1e6f25ff8daddb37acb))

# [1.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.1...v1.3.0) (2022-07-13)

### Bug Fixes

- aliasesExclude not work when includes empty value ([#85](https://github.com/qmhc/vite-plugin-dts/issues/85)) ([8b9b9aa](https://github.com/qmhc/vite-plugin-dts/commit/8b9b9aa4e9d1c4fa84a2945f4f2421c9269240ff))
- correct type files generate when root is set ([#68](https://github.com/qmhc/vite-plugin-dts/issues/68)) ([0b491bd](https://github.com/qmhc/vite-plugin-dts/commit/0b491bd3720c5b6065dd00a00f9b95e39bf6c8fe))

### Features

- support multiple output dirs ([cd19ee7](https://github.com/qmhc/vite-plugin-dts/commit/cd19ee7f4cf25906a3ffcd89a6c93baf7c7266ed))

## [1.2.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.0...v1.2.1) (2022-07-05)

### Bug Fixes

- add parser plugins param for vue compiler ([7d6bd16](https://github.com/qmhc/vite-plugin-dts/commit/7d6bd16af88701152bf8847e160acf6169bd0918)), closes [#78](https://github.com/qmhc/vite-plugin-dts/issues/78)
- insert entry fail when no default export in source entry ([#82](https://github.com/qmhc/vite-plugin-dts/issues/82)) ([1a4b161](https://github.com/qmhc/vite-plugin-dts/commit/1a4b161647ba1826c3bfa7c9ca5ee7ca4c3ee4bf))

# [1.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.1...v1.2.0) (2022-05-24)

### Bug Fixes

- support read typings form package.json ([6b1bb29](https://github.com/qmhc/vite-plugin-dts/commit/6b1bb2951512733091b950f5767bfe5a1cbe8992))

### Features

- add `aliasesExclude` option ([#75](https://github.com/qmhc/vite-plugin-dts/issues/75)) ([7588ba4](https://github.com/qmhc/vite-plugin-dts/commit/7588ba4755c19e25ca2482b95cb99a59621e693e)), closes [#73](https://github.com/qmhc/vite-plugin-dts/issues/73)
- support override compilerOptions when rollup up ([995612d](https://github.com/qmhc/vite-plugin-dts/commit/995612d5eafa6b610a9ab8826ee7b8691c673b4e)), closes [#74](https://github.com/qmhc/vite-plugin-dts/issues/74)

## [1.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.0...v1.1.1) (2022-04-25)

### Bug Fixes

- incorrect rollup entry path ([a9309d8](https://github.com/qmhc/vite-plugin-dts/commit/a9309d8ca8c0531d1579d3a541cd67ac0a37ce1b))

# [1.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.5...v1.1.0) (2022-04-18)

### Bug Fixes

- lose the type of entry export default ([50f55de](https://github.com/qmhc/vite-plugin-dts/commit/50f55de3ec89d7995056c428a37d16e0cd2a6a4a))

### Features

- support rollup dts files after output ([1d87b44](https://github.com/qmhc/vite-plugin-dts/commit/1d87b44dff3c54a5b1b983b060d3d0d4972c1d94))

## [1.0.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.4...v1.0.5) (2022-04-02)

### Bug Fixes

- entryRoot option not work ([#66](https://github.com/qmhc/vite-plugin-dts/issues/66)) ([bca6423](https://github.com/qmhc/vite-plugin-dts/commit/bca64236076a28dbdd7e6e373c46f3af3723b4e1))

## [1.0.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.3...v1.0.4) (2022-03-28)

### Bug Fixes

- transfer 'debug' to dependencies ([7af9232](https://github.com/qmhc/vite-plugin-dts/commit/7af9232e381f6d572a543706d640c6ecdb5a6c00))

## [1.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.2...v1.0.3) (2022-03-25)

### Bug Fixes

- **example:** cannot resolve types through symlinks ([0914a6a](https://github.com/qmhc/vite-plugin-dts/commit/0914a6ad8dde3514f94e586798d6d73a9c2ac165)), closes [#63](https://github.com/qmhc/vite-plugin-dts/issues/63)

## [1.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.1...v1.0.2) (2022-03-24)

### Bug Fixes

- incorrect entryRoot calculation in linux an mac ([0136990](https://github.com/qmhc/vite-plugin-dts/commit/01369903f484eb74ae6fa23b49537fa64d610706)), closes [#62](https://github.com/qmhc/vite-plugin-dts/issues/62)

## [1.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0...v1.0.1) (2022-03-22)

### Bug Fixes

- missing some libs defind in dependencies ([ab7960f](https://github.com/qmhc/vite-plugin-dts/commit/ab7960f0d957aad6945ef469274bca3e142baa87))

# [1.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.10...v1.0.0) (2022-03-22)

### Features

- support entryRoot option ([c939e35](https://github.com/qmhc/vite-plugin-dts/commit/c939e358dfecacaf2dfd2b0d42118c16462c260a)), closes [#59](https://github.com/qmhc/vite-plugin-dts/issues/59)

### BREAKING CHANGES

- The calculating output paths funtion of root option is
  assigned to entryRoot option, and currently will auto calculating the
  smallest public path as the default value for entryRoot option.

## [0.9.10](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.9...v0.9.10) (2022-03-12)

### Bug Fixes

- make default include same as tsconfig.json ([5ca7fc5](https://github.com/qmhc/vite-plugin-dts/commit/5ca7fc51ab321d4b25ce9856c0e52894c1264d44)), closes [#58](https://github.com/qmhc/vite-plugin-dts/issues/58)

## [0.9.9](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.8...v0.9.9) (2022-01-11)

### Bug Fixes

- should filter vite virtual files ([5fb24ba](https://github.com/qmhc/vite-plugin-dts/commit/5fb24ba2c40ad2ef81e45c33533aada3bb5aefd3)), closes [#50](https://github.com/qmhc/vite-plugin-dts/issues/50)

## [0.9.8](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.7...v0.9.8) (2022-01-10)

### Bug Fixes

- put `copyDtsFiles` option in use ([#53](https://github.com/qmhc/vite-plugin-dts/issues/53)) ([261700f](https://github.com/qmhc/vite-plugin-dts/commit/261700f80a60b3bc1f22f391e00d9999205fe0d2)), closes [#52](https://github.com/qmhc/vite-plugin-dts/issues/52)

## [0.9.7](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.6...v0.9.7) (2021-12-30)

### Bug Fixes

- inserted entry not through beforeWriteFile ([e16b9b1](https://github.com/qmhc/vite-plugin-dts/commit/e16b9b15c66df887bac0ca0b6be05e4d1f8628ed)), closes [#48](https://github.com/qmhc/vite-plugin-dts/issues/48)

## [0.9.6](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.5...v0.9.6) (2021-11-23)

### Bug Fixes

- aliases are not resolved when find ends with '/' ([f04aab2](https://github.com/qmhc/vite-plugin-dts/commit/f04aab21f9f6dc02316a9ff3a9cd43e90cd97828)), closes [#37](https://github.com/qmhc/vite-plugin-dts/issues/37)
- not equally transform dts source files ([ede5146](https://github.com/qmhc/vite-plugin-dts/commit/ede514649282aec786549d490e8127824913914c))

## [0.9.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.4...v0.9.5) (2021-11-21)

### Bug Fixes

- ensure dts source files through beforeWriteFile hook ([3265412](https://github.com/qmhc/vite-plugin-dts/commit/3265412e26dd8736fefab0cf99e920d01bb246c5)), closes [#43](https://github.com/qmhc/vite-plugin-dts/issues/43)

## [0.9.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.3...v0.9.4) (2021-11-10)

### Bug Fixes

- cannot resolve types defined in dts files ([666ca09](https://github.com/qmhc/vite-plugin-dts/commit/666ca0925075bed6926f648a210f37d56af9577b)), closes [#42](https://github.com/qmhc/vite-plugin-dts/issues/42)
- take unused error when using setup-script ([c4145b7](https://github.com/qmhc/vite-plugin-dts/commit/c4145b7352359c79b8ba7c01a1c4afeace4dbc7c))

## [0.9.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.2...v0.9.3) (2021-11-03)

### Bug Fixes

- support require for cjs exports ([cc5aff9](https://github.com/qmhc/vite-plugin-dts/commit/cc5aff9b9906fc87f6012fb66566fd1937a9381e)), closes [#39](https://github.com/qmhc/vite-plugin-dts/issues/39)

## [0.9.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.1...v0.9.2) (2021-10-20)

### Bug Fixes

- support optional @vue/compiler-sfc ([34e1958](https://github.com/qmhc/vite-plugin-dts/commit/34e19587aa64c802cfbd99c5c8018bde8d0e1e2f))

## [0.9.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.3...v0.9.1) (2021-10-18)

### Bug Fixes

- watch mode not update ts/js files ([32a5699](https://github.com/qmhc/vite-plugin-dts/commit/32a5699a9b4f5a24b2a2a870ced43850a0573f82))

### Features

- add afterBuild hook option ([#34](https://github.com/qmhc/vite-plugin-dts/issues/34)) ([e836689](https://github.com/qmhc/vite-plugin-dts/commit/e83668988dab189d185ed9637032f7f80ba1e4db))
- afterDiagnostic and afterBuild support async ([c92d548](https://github.com/qmhc/vite-plugin-dts/commit/c92d54826b81f50fbb38fa909df730b323b75b24))
- skip dependencies by default ([8ca3ed3](https://github.com/qmhc/vite-plugin-dts/commit/8ca3ed30dfcc23c2dd9822fe6ef460a6c832dfe2))

## [0.8.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.2...v0.8.3) (2021-10-11)

### Bug Fixes

- support tsconfig.json using comments ([6e6e446](https://github.com/qmhc/vite-plugin-dts/commit/6e6e44683592060ebd27d1c5712058f2f0f0aeb6)), closes [#31](https://github.com/qmhc/vite-plugin-dts/issues/31)

## [0.8.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.1...v0.8.2) (2021-09-30)

### Bug Fixes

- create correct source for tsx/jsx script ([#29](https://github.com/qmhc/vite-plugin-dts/issues/29)) ([109721e](https://github.com/qmhc/vite-plugin-dts/commit/109721e89007cd702fe73fded44cc6b7efeef46e))

## [0.8.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.0...v0.8.1) (2021-09-22)

### Bug Fixes

- declarationDir make no file generated ([3313a19](https://github.com/qmhc/vite-plugin-dts/commit/3313a19da669bda7fa8fff3a5211652bc22e7413)), closes [#27](https://github.com/qmhc/vite-plugin-dts/issues/27)
- rewrite noEmit option when init porject ([735d26b](https://github.com/qmhc/vite-plugin-dts/commit/735d26b3cad9a90dd272a08448d238045306a1ba)), closes [#28](https://github.com/qmhc/vite-plugin-dts/issues/28)

# [0.8.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.7.0...v0.8.0) (2021-09-13)

### Bug Fixes

- adapt vue@3.2.6+ setup script ([1b62755](https://github.com/qmhc/vite-plugin-dts/commit/1b62755947972a67a034830cc7478fa1a65924c4))
- ouput files out of include bounds ([e1cdedf](https://github.com/qmhc/vite-plugin-dts/commit/e1cdedfc8b41a311d2c22674bd132f23242482ac)), closes [#24](https://github.com/qmhc/vite-plugin-dts/issues/24)

### Features

- add afterDiagnostic option ([7d43ece](https://github.com/qmhc/vite-plugin-dts/commit/7d43ece8fcb9b71d645982a45b01cd9136c525d8)), closes [#22](https://github.com/qmhc/vite-plugin-dts/issues/22)
- support build watch mode ([a920d97](https://github.com/qmhc/vite-plugin-dts/commit/a920d97825dced453f5f70d8776944c02b50e14b)), closes [#5](https://github.com/qmhc/vite-plugin-dts/issues/5)

# [0.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.6.0...v0.7.0) (2021-08-23)

### Bug Fixes

- support using script-setup alongside script ([39517ad](https://github.com/qmhc/vite-plugin-dts/commit/39517ad7119a4b97be7a2d874b43cb73cfa95f07)), closes [#21](https://github.com/qmhc/vite-plugin-dts/issues/21)

### Features

- add noEmitOnError and logDiagnostics options ([8a840fe](https://github.com/qmhc/vite-plugin-dts/commit/8a840fe2692e07e8e881c58ca8f6887d08493cc9))

# [0.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.3...v0.6.0) (2021-08-14)

### Bug Fixes

- resolve alias when using default import ([3121d5b](https://github.com/qmhc/vite-plugin-dts/commit/3121d5bd56a6863e5175c95b00d7a3dedc0cff6d)), closes [#20](https://github.com/qmhc/vite-plugin-dts/issues/20)

### Features

- add copyDtsFiles option ([bdab8c4](https://github.com/qmhc/vite-plugin-dts/commit/bdab8c4b4efa894209c2edeffbbe4d79680eafe9)), closes [#19](https://github.com/qmhc/vite-plugin-dts/issues/19)

## [0.5.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.2...v0.5.3) (2021-07-22)

### Bug Fixes

- add allowJs option dynamically ([36f8de2](https://github.com/qmhc/vite-plugin-dts/commit/36f8de28c68cd52945faeb375cd2931c6ad0468a)), closes [#17](https://github.com/qmhc/vite-plugin-dts/issues/17)
- add js and jsx files when allowJs ([0e1e6f7](https://github.com/qmhc/vite-plugin-dts/commit/0e1e6f7c09c85e169568b2c77c66d452d04a28a2))

## [0.5.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.1...v0.5.2) (2021-07-01)

### Bug Fixes

- cannot require @vue/compiler-sfc in monorepo ([fd9b5c1](https://github.com/qmhc/vite-plugin-dts/commit/fd9b5c1c018feb87e374cdf6671b7b8be14e775b)), closes [#14](https://github.com/qmhc/vite-plugin-dts/issues/14)

## [0.5.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.0...v0.5.1) (2021-06-18)

### Bug Fixes

- support insert entry from '.tsx' file ([e38b7c4](https://github.com/qmhc/vite-plugin-dts/commit/e38b7c4686a8d7405583a97078e97fbef4757da6))

# [0.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.3...v0.5.0) (2021-06-15)

### Bug Fixes

- ignore none export files ([f9c41bc](https://github.com/qmhc/vite-plugin-dts/commit/f9c41bc4e2fd498b53aa366a5f8f2a57589b6176))
- rename insertIndexEntry to insertTypesEntry ([c9d392e](https://github.com/qmhc/vite-plugin-dts/commit/c9d392ec3def98b541bb597c5ed38933b225fe5e))

### Features

- add clearPureImport option ([0357f69](https://github.com/qmhc/vite-plugin-dts/commit/0357f69485204f24d9830a4de59558a23eb66e19))
- defaults insert entry base on pkg.types ([9c71f28](https://github.com/qmhc/vite-plugin-dts/commit/9c71f28eac50d23a42d92bd79ac6d09f1be0544d))
- optional insert index type entry ([592a701](https://github.com/qmhc/vite-plugin-dts/commit/592a701d6213f955306df9de0c7f1d3243a28faa))

## [0.4.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.2...v0.4.3) (2021-06-11)

### Bug Fixes

- back off optional chaining and nullish coalescing ([8e09129](https://github.com/qmhc/vite-plugin-dts/commit/8e09129c1600a013a2c3c50983ab7f358216757f)), closes [#2](https://github.com/qmhc/vite-plugin-dts/issues/2)
- transform fs/promise to fs-extra ([1794b0b](https://github.com/qmhc/vite-plugin-dts/commit/1794b0b93baf4212b4efc5ef06a697adf70e4933)), closes [#4](https://github.com/qmhc/vite-plugin-dts/issues/4)

### Performance Improvements

- use menory result generate bundle ([858bf31](https://github.com/qmhc/vite-plugin-dts/commit/858bf317d16c995feb73e53339d61f7602e36484))

## [0.4.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.1...v0.4.2) (2021-06-09)

### Bug Fixes

- incomplete remove pure import ([a1fd54e](https://github.com/qmhc/vite-plugin-dts/commit/a1fd54e769f1b50ee5858d33879b2a6732625797))
- mamual set include and exclude ([b6fb510](https://github.com/qmhc/vite-plugin-dts/commit/b6fb5106206df9de83276687dd1451fa3d882067))
- more accurate normalize glob ([1d65c47](https://github.com/qmhc/vite-plugin-dts/commit/1d65c47811344a6b566a8dcf22cd22d9298d5a02))
- set rootDir if not set in compilerOptions ([a1d83d2](https://github.com/qmhc/vite-plugin-dts/commit/a1d83d2aa56a32ebef11b9d98fa508a6d9fbd412)), closes [#3](https://github.com/qmhc/vite-plugin-dts/issues/3)
- transform alias include dynamic imports ([a6919b4](https://github.com/qmhc/vite-plugin-dts/commit/a6919b4760cf5cbefbdad1ac674b8a8275dc27dd))
- transform alias include dynamic imports ([3a5511e](https://github.com/qmhc/vite-plugin-dts/commit/3a5511e3e0b961d7f4ac393da623502a186a0538))

## [0.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.0...v0.4.1) (2021-06-08)

### Bug Fixes

- dynamic import regexp endings include ']' and ')' ([e5f37a6](https://github.com/qmhc/vite-plugin-dts/commit/e5f37a6d9e232e268ea1b2ec2eadb6c7bc7d7115))

# [0.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.5...v0.4.0) (2021-06-08)

### Bug Fixes

- bundle only once for multiple formats ([be37fbf](https://github.com/qmhc/vite-plugin-dts/commit/be37fbfcbd03dd23c73908a2d7f2d019437e003a))

### Features

- bundle all from tsconfig include ([252554a](https://github.com/qmhc/vite-plugin-dts/commit/252554af1fa403af1ee00dba16a1c7938e7374c6))

### BREAKING CHANGES

- Deprecated include and exclude options

## [0.3.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.4...v0.3.5) (2021-06-08)

### Bug Fixes

- includes prue type export files ([1341359](https://github.com/qmhc/vite-plugin-dts/commit/1341359b9943fd961ec0d3d40d71252e77c73390))
- incorrect path in transform alias ([d686ff9](https://github.com/qmhc/vite-plugin-dts/commit/d686ff94157c400d7f235331a47fbb9d452afeb9))

## [0.3.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.3...v0.3.4) (2021-06-07)

### Bug Fixes

- remove pure import ([fe241de](https://github.com/qmhc/vite-plugin-dts/commit/fe241de5b583cb5bf2dde83383a8a43e53724ce1))
- static import include relative path ([4065217](https://github.com/qmhc/vite-plugin-dts/commit/40652178b9071509269e6b66cbbbcb3562cf349d))

## [0.3.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.2...v0.3.3) (2021-06-07)

### Bug Fixes

- keep output relative to root not to entry dir ([e83ec64](https://github.com/qmhc/vite-plugin-dts/commit/e83ec643536f888166055a5495db3e2fd1030584))

### BREAKING CHANGES

- Ouput declaration structure no longer relative to entry dir

## [0.3.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.1...v0.3.2) (2021-06-07)

### Bug Fixes

- default root base on vite config ([787ebc1](https://github.com/qmhc/vite-plugin-dts/commit/787ebc175d07370628589a6fc73e325b29655a0b))

## [0.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.0...v0.3.1) (2021-06-06)

### Bug Fixes

- vue file explicit type lost ([d0d8803](https://github.com/qmhc/vite-plugin-dts/commit/d0d88038fb51d71dfb71ab4d0223600801d50349))

# [0.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.2.0...v0.3.0) (2021-06-06)

### Bug Fixes

- transform alias import to relative path ([6d5a2d5](https://github.com/qmhc/vite-plugin-dts/commit/6d5a2d5b5ba691b5572727cbf42b340d05964951))

### Features

- projectOptions refine to compilerOptions and tsConfigFilePath ([eb61113](https://github.com/qmhc/vite-plugin-dts/commit/eb611135446fff7bc82e3bd0d1d2b856a829de98))

### BREAKING CHANGES

- projectOptions no longer supported, the project init should be up to the plugin.

# [0.2.0](https://github.com/qmhc/vite-plugin-dts/compare/b2f0c0aa6eea5b48703248eca3294c5d845404ba...v0.2.0) (2021-06-05)

### Features

- add beforeWriteFile hook ([139e818](https://github.com/qmhc/vite-plugin-dts/commit/139e818cecfa80d4208b3f5ced55e7db57bf7e52))
- add outputDir option ([f289723](https://github.com/qmhc/vite-plugin-dts/commit/f289723672279795c0b96aaac3abf83dd8913b20))
- add transform dynamic import to static ([b2f0c0a](https://github.com/qmhc/vite-plugin-dts/commit/b2f0c0aa6eea5b48703248eca3294c5d845404ba))

## [3.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.3.0...v3.3.1) (2023-07-17)

### Bug Fixes

- correct sources path calculate ([0d84180](https://github.com/qmhc/vite-plugin-dts/commit/0d84180ddd237c4bf00c4e0c8e24d9b5d4423db8)), closes [#245](https://github.com/qmhc/vite-plugin-dts/issues/245)
- ensure lib name is valid ([7cfe2ea](https://github.com/qmhc/vite-plugin-dts/commit/7cfe2eac1d1a346d50e83a8ca1ad7a82bb76cbbc)), closes [#247](https://github.com/qmhc/vite-plugin-dts/issues/247)
- unexpected remove reportFileName config ([27fe3c7](https://github.com/qmhc/vite-plugin-dts/commit/27fe3c775b3bdb894c6c3a992c59d255999676a4)), closes [#246](https://github.com/qmhc/vite-plugin-dts/issues/246)

# [3.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.2.0...v3.3.0) (2023-07-14)

### Bug Fixes

- should pass full path to resolver.support ([7088a0c](https://github.com/qmhc/vite-plugin-dts/commit/7088a0c064c604ffdc528b32aa4f025fb9d607ca))
- using raw target when rolling up types ([e53c815](https://github.com/qmhc/vite-plugin-dts/commit/e53c81515ec03000816ea1ad65e0971e78bab689)), closes [#242](https://github.com/qmhc/vite-plugin-dts/issues/242)

### Features

- beforeWriteFile supports return Promise ([5e5b93c](https://github.com/qmhc/vite-plugin-dts/commit/5e5b93cfcb7e906c431c081e910f0edb97b8378c))
- support sourcemap to `.vue` files ([#243](https://github.com/qmhc/vite-plugin-dts/issues/243)) ([7445046](https://github.com/qmhc/vite-plugin-dts/commit/744504652c06bbbe1718edce5729bb7af1431135))

# [3.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.1.1...v3.2.0) (2023-07-08)

### Bug Fixes

- ensure paths are absolute when process public root ([3628877](https://github.com/qmhc/vite-plugin-dts/commit/3628877f447e6383365024dc43dacfa963f41036)), closes [#238](https://github.com/qmhc/vite-plugin-dts/issues/238)
- normalize paths of resolver transform returns ([3b5a945](https://github.com/qmhc/vite-plugin-dts/commit/3b5a94524a9a00de94ebff015934bb72ad71b192))

### Features

- create resolver for json files ([#237](https://github.com/qmhc/vite-plugin-dts/issues/237)) ([53c58c8](https://github.com/qmhc/vite-plugin-dts/commit/53c58c8071cb892e969cec693f6e75a11eea3fec))
- support parse paths of tsconfig.json to aliases ([#236](https://github.com/qmhc/vite-plugin-dts/issues/236)) ([68fc12a](https://github.com/qmhc/vite-plugin-dts/commit/68fc12af50683fef12f302bc95c3ce6da679ae74))

## [3.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.1.0...v3.1.1) (2023-07-07)

### Bug Fixes

- ensure aliases init when using Rollup ([22c69a4](https://github.com/qmhc/vite-plugin-dts/commit/22c69a4df9cffd0444a64de09221e1ec30d7f8c2))

# [3.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.3...v3.1.0) (2023-07-05)

### Features

- support custom resolvers to transform files ([#233](https://github.com/qmhc/vite-plugin-dts/issues/233)) ([be43a4d](https://github.com/qmhc/vite-plugin-dts/commit/be43a4dfd96ae76bb851dde675d222d51ea46e92))

## [3.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.2...v3.0.3) (2023-07-03)

### Bug Fixes

- incorrect lib path process when rollup types ([292b8b7](https://github.com/qmhc/vite-plugin-dts/commit/292b8b7be90e05d2d19febde2e57ec126aba0d33)), closes [#232](https://github.com/qmhc/vite-plugin-dts/issues/232)

## [3.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.1...v3.0.2) (2023-06-30)

### Bug Fixes

- error if exists same lib when transfrom dynamic imports ([c187278](https://github.com/qmhc/vite-plugin-dts/commit/c187278044972ecab077abada4a761398c74223c))

## [3.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0...v3.0.1) (2023-06-30)

### Bug Fixes

- correctly process default dynamic imports ([99105b0](https://github.com/qmhc/vite-plugin-dts/commit/99105b004325ade3c8ccc19c5375fa60716db300)), closes [#222](https://github.com/qmhc/vite-plugin-dts/issues/222)
- ensure collect manual dts for js source files ([5b7c5e5](https://github.com/qmhc/vite-plugin-dts/commit/5b7c5e52c71e457b904dd2f28b430dc9db267cf7)), closes [#184](https://github.com/qmhc/vite-plugin-dts/issues/184)

# [3.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.3...v3.0.0) (2023-06-30)

### Bug Fixes

- correct path process when specify entryRoot ([fc15dac](https://github.com/qmhc/vite-plugin-dts/commit/fc15dacf0561fc598e25f6de435edf97d6edfdf1)), closes [#229](https://github.com/qmhc/vite-plugin-dts/issues/229) [#230](https://github.com/qmhc/vite-plugin-dts/issues/230)
- correct time cost recording ([57eb430](https://github.com/qmhc/vite-plugin-dts/commit/57eb4309aeec4b5773bfa10c6e48a41c2fd23c69))

### Features

- add strictOutput to limit output write ([07224d1](https://github.com/qmhc/vite-plugin-dts/commit/07224d15576ee6528c9068d8a80fcbbf502018f0))

# [3.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2023-06-27)

### Bug Fixes

- incorrect entryRoot when in single inner entry ([96d32d1](https://github.com/qmhc/vite-plugin-dts/commit/96d32d127b73d48ce192424c4596fe24a2d24619))
- promise A+ specification for `isPromise` method ([#228](https://github.com/qmhc/vite-plugin-dts/issues/228)) ([3454a35](https://github.com/qmhc/vite-plugin-dts/commit/3454a356683a97752b0161a0e5be0328aa55a4f3))

# [3.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.3.0...v3.0.0-beta.2) (2023-06-27)

### Features

- transfer to use Volar, support Rollup, improve watch mode ([#226](https://github.com/qmhc/vite-plugin-dts/issues/226)) ([bb7949c](https://github.com/qmhc/vite-plugin-dts/commit/bb7949c841141b2305640d953be4dddf45ce7d1a))

### BREAKING CHANGES

- Deprecated options: `noEmitOnError`, `skipDiagnostics`
  and `libFolderPath`. Rename options: `outputDir` -> `outDir`,
  `tsConfigFilePath` -> `tsconfigPath`.

# [2.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.1.0...v2.3.0) (2023-04-17)

### Features

- compatible with svelte ([#197](https://github.com/qmhc/vite-plugin-dts/issues/197)) ([5d38517](https://github.com/qmhc/vite-plugin-dts/commit/5d38517ee16fdfc2009725b9146bfe38c49d1709))
- supports multiple extends in tsconfig.json ([#202](https://github.com/qmhc/vite-plugin-dts/issues/202)) ([9fdac66](https://github.com/qmhc/vite-plugin-dts/commit/9fdac66c0cfd827791208a31fbbefd1fad4ac2bf)), closes [#200](https://github.com/qmhc/vite-plugin-dts/issues/200)

# [2.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.2...v2.1.0) (2023-03-08)

### Features

- add bundledPackages configuration ([#186](https://github.com/qmhc/vite-plugin-dts/issues/186)) ([8997680](https://github.com/qmhc/vite-plugin-dts/commit/8997680776d8f35ae5248cc73b2d6a734e5dbc4a))

## [2.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.1...v2.0.2) (2023-02-23)

### Bug Fixes

- recursively resolve extended tsconfig path ([#181](https://github.com/qmhc/vite-plugin-dts/issues/181)) ([7ca8502](https://github.com/qmhc/vite-plugin-dts/commit/7ca85026e9a3e345c334222af5ffa823bda380a7))

## [2.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0...v2.0.1) (2023-02-23)

### Bug Fixes

- **vue:** correctly remove components for normal script ([6dbd9af](https://github.com/qmhc/vite-plugin-dts/commit/6dbd9af3bbd8175ef8a1cee4054ba38f330eef0c))
- **vue:** error when parse no argument function ([4db63b4](https://github.com/qmhc/vite-plugin-dts/commit/4db63b4b1b48686146f07e7e69dcbd4a82b33efb))

# [2.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.3...v2.0.0) (2023-02-23)

### Bug Fixes

- ensure watch all the files defined in include ([42a755c](https://github.com/qmhc/vite-plugin-dts/commit/42a755cf502cdfa8dc9dab0f600e8cc2a46eec18)), closes [#151](https://github.com/qmhc/vite-plugin-dts/issues/151)
- incorrect path resolve when copy dts source files ([434f69e](https://github.com/qmhc/vite-plugin-dts/commit/434f69e9629db5b2e74e609ffbc5f9cd436c1177)), closes [#179](https://github.com/qmhc/vite-plugin-dts/issues/179)
- **react:** unlimited init order when using with react plugin ([92b82ff](https://github.com/qmhc/vite-plugin-dts/commit/92b82ff47e0480c86c76e298feaa7cea8e06f7fa)), closes [#148](https://github.com/qmhc/vite-plugin-dts/issues/148)

### BREAKING CHANGES

- `copyDtsFiles` option now default to false.

# [2.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2023-02-21)

### Bug Fixes

- support manually create dts for source file ([2174868](https://github.com/qmhc/vite-plugin-dts/commit/2174868158766fd16a72f9f44b979d2c62d8ab07)), closes [#178](https://github.com/qmhc/vite-plugin-dts/issues/178)

### Features

- support parse types entry from exports in package.json ([f033cf8](https://github.com/qmhc/vite-plugin-dts/commit/f033cf876b51d7e11f1aa562567f3fd1f97d04f5))

# [2.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2023-02-20)

### Bug Fixes

- should re-transform when file changed in watch mode ([eafdd3c](https://github.com/qmhc/vite-plugin-dts/commit/eafdd3ce7d6757f93a378130b8e34f41e17e4004)), closes [#99](https://github.com/qmhc/vite-plugin-dts/issues/99)
- **vue:** preprocess not direct exported component ([8bd769e](https://github.com/qmhc/vite-plugin-dts/commit/8bd769e013f845a8e486d354d9f8517bd7b02e72))

### Features

- support specify log level of plugin ([2c1aeb0](https://github.com/qmhc/vite-plugin-dts/commit/2c1aeb01637aa4511f4e4c26b891b6e7ea235d50)), closes [#177](https://github.com/qmhc/vite-plugin-dts/issues/177)

# [2.0.0-beta.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2023-02-17)

### Bug Fixes

- **vue:** conversion error when using outside ts props ([25307cf](https://github.com/qmhc/vite-plugin-dts/commit/25307cf6ef89aa8501c8c35ff8ca519021adafea)), closes [#175](https://github.com/qmhc/vite-plugin-dts/issues/175)
- **vue:** remove components option before inferring ([90f8ac1](https://github.com/qmhc/vite-plugin-dts/commit/90f8ac160412de418bc7dc31c97f4ca7daa524ca))

# [2.0.0-beta.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.3...v2.0.0-beta.0) (2023-02-16)

### Bug Fixes

- override composite for root tsconfig ([df1d0f4](https://github.com/qmhc/vite-plugin-dts/commit/df1d0f42d0d9d9341d7766f5c147e7e3fa3733cf)), closes [#153](https://github.com/qmhc/vite-plugin-dts/issues/153)
- **vue:** ignore css vars when compile ([6d2369a](https://github.com/qmhc/vite-plugin-dts/commit/6d2369afe31c18b3dff45296d74b90aba86bb656)), closes [#167](https://github.com/qmhc/vite-plugin-dts/issues/167)

### Features

- **vue:** accurate types inferring for exposed and props ([#173](https://github.com/qmhc/vite-plugin-dts/issues/173)) ([c25448c](https://github.com/qmhc/vite-plugin-dts/commit/c25448c90f3b3969d51dbfa31ad5dc3ce2a9a2aa))

## [1.7.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.2...v1.7.3) (2023-02-14)

### Bug Fixes

- incorrect compilerOptions when rollup dts ([9dd8d9c](https://github.com/qmhc/vite-plugin-dts/commit/9dd8d9c41bed7f79e24ee890c1f28d867346326e)), closes [#171](https://github.com/qmhc/vite-plugin-dts/issues/171)
- normalize `mts` and `cts` declaration files extension ([410288a](https://github.com/qmhc/vite-plugin-dts/commit/410288ac65d7fb4a3065d93c6d7be9e2a8dd3f77)), closes [#169](https://github.com/qmhc/vite-plugin-dts/issues/169)

## [1.7.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.1...v1.7.2) (2023-01-31)

### Bug Fixes

- correct .d.ts extension in multiple outputs ([5c9709c](https://github.com/qmhc/vite-plugin-dts/commit/5c9709c4082ee36f2f28b4ad6e21b846aa27d5d6)), closes [#144](https://github.com/qmhc/vite-plugin-dts/issues/144)
- insertTypesEntry config supports publishConfig.types ([#164](https://github.com/qmhc/vite-plugin-dts/issues/164)) ([dae4ef9](https://github.com/qmhc/vite-plugin-dts/commit/dae4ef9de1175cf5bdc5a7dedfa60d7bab381dba))
- mark typescript as external dependency ([#160](https://github.com/qmhc/vite-plugin-dts/issues/160)) ([31e10d4](https://github.com/qmhc/vite-plugin-dts/commit/31e10d4ec2a37148ad63fdfb141264d6c4966135))

## [1.7.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.0...v1.7.1) (2022-11-14)

### Bug Fixes

- ensure exulde working when transform ([aea8ebd](https://github.com/qmhc/vite-plugin-dts/commit/aea8ebdc4eac489bc62ccebf3552421bd43d318c)), closes [#143](https://github.com/qmhc/vite-plugin-dts/issues/143) [#140](https://github.com/qmhc/vite-plugin-dts/issues/140) [#97](https://github.com/qmhc/vite-plugin-dts/issues/97)
- import vite plugin type via dynamic import ([8bd73c8](https://github.com/qmhc/vite-plugin-dts/commit/8bd73c8fae010ba0d32df8b144345b7f641a6085)), closes [#139](https://github.com/qmhc/vite-plugin-dts/issues/139)

# [1.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.6...v1.7.0) (2022-11-07)

### Bug Fixes

- compiler missing plugin `decorators-legacy` ([#138](https://github.com/qmhc/vite-plugin-dts/issues/138)) ([717af2f](https://github.com/qmhc/vite-plugin-dts/commit/717af2f4bc1b5bd549339179bc5b75dbbd9a348a))
- derprecate logDiagnostics option ([e405328](https://github.com/qmhc/vite-plugin-dts/commit/e405328f64870919a3ee4100fac087870ed4662e))
- incorrect compiler address resolution ([#133](https://github.com/qmhc/vite-plugin-dts/issues/133)) ([01cc125](https://github.com/qmhc/vite-plugin-dts/commit/01cc125ea98b1994e364487f73d71b0cb6ebcdbf))

### Features

- support customize typescript lib path ([27b83f3](https://github.com/qmhc/vite-plugin-dts/commit/27b83f3423f50307852257f3747c112f2f3cd325)), closes [#134](https://github.com/qmhc/vite-plugin-dts/issues/134)
- support multiple entries for lib mode ([1fafe54](https://github.com/qmhc/vite-plugin-dts/commit/1fafe54991431ce86a404ecb7e179ef1aa8aff0a)), closes [#136](https://github.com/qmhc/vite-plugin-dts/issues/136)

## [1.6.6](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.5...v1.6.6) (2022-10-13)

### Bug Fixes

- adapt @microsoft/api-extractor 7.33+ ([5acb4be](https://github.com/qmhc/vite-plugin-dts/commit/5acb4be4d1e4fe41e42a38ec9e92eeeb6f3a9c15))
- always ship included dts files into soure ([fc345e3](https://github.com/qmhc/vite-plugin-dts/commit/fc345e31b79fd7ca40581727d1964f80d1b9db82)), closes [#126](https://github.com/qmhc/vite-plugin-dts/issues/126)

## [1.6.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.4...v1.6.5) (2022-10-06)

### Bug Fixes

- remove pnpm limitation in preinstall to support npm@6 ([d7167b8](https://github.com/qmhc/vite-plugin-dts/commit/d7167b83381c54075e0e9114c07fe9451b6ffa2d)), closes [#123](https://github.com/qmhc/vite-plugin-dts/issues/123)

## [1.6.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.3...v1.6.4) (2022-09-30)

### Bug Fixes

- patch cjs vars for esm scope ([57e093d](https://github.com/qmhc/vite-plugin-dts/commit/57e093d734e4b81bbeeecbd694b269cca698f914)), closes [#119](https://github.com/qmhc/vite-plugin-dts/issues/119) [#122](https://github.com/qmhc/vite-plugin-dts/issues/122)

## [1.6.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.2...v1.6.3) (2022-09-30)

### Bug Fixes

- both support cjs and esm(using by tsx) ([38bd6a6](https://github.com/qmhc/vite-plugin-dts/commit/38bd6a6789fe375dd5da0aec1ea9b6816751719a))

## [1.6.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.1...v1.6.2) (2022-09-30)

### Bug Fixes

- ensure generate dts for type only files ([f3f4919](https://github.com/qmhc/vite-plugin-dts/commit/f3f4919fa441a27b7d842f1e64dd8d711bd05ec9)), closes [#118](https://github.com/qmhc/vite-plugin-dts/issues/118)

## [1.6.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.0...v1.6.1) (2022-09-28)

### Bug Fixes

- path error in cjs running ([0832af4](https://github.com/qmhc/vite-plugin-dts/commit/0832af4ab49d8166e14b6897bb1538ec6ddf3bb5))

# [1.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.5.0...v1.6.0) (2022-09-28)

### Bug Fixes

- correct compilerOptions.outDir for project init ([8699219](https://github.com/qmhc/vite-plugin-dts/commit/86992194411017e75b1d17c3f72d631267ec187b))
- type error occurred while define `defineProps` retruns as `props` ([41eb53a](https://github.com/qmhc/vite-plugin-dts/commit/41eb53a4da681d2c809dc8a7674a03284acbea02)), closes [#113](https://github.com/qmhc/vite-plugin-dts/issues/113)

### Features

- skip write file when `beforeWriteFile` return exact `false` ([9404ebc](https://github.com/qmhc/vite-plugin-dts/commit/9404ebc811b919a59a21b954d4ba4d43be255390)), closes [#110](https://github.com/qmhc/vite-plugin-dts/issues/110)

# [1.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.1...v1.5.0) (2022-09-11)

### Features

- improve aliasesExclude to support more flexible definition ([f652523](https://github.com/qmhc/vite-plugin-dts/commit/f6525235758b0d29347feb7f21a5085dc81b13a4)), closes [#93](https://github.com/qmhc/vite-plugin-dts/issues/93)

## [1.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.0...v1.4.1) (2022-08-01)

### Bug Fixes

- includes `extends` field when parse tsconfig.json ([#96](https://github.com/qmhc/vite-plugin-dts/issues/96)) ([2631de0](https://github.com/qmhc/vite-plugin-dts/commit/2631de0725e89083752fd590ff604f3f763abd3a))

# [1.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.1...v1.4.0) (2022-07-20)

### Bug Fixes

- ensure emit dts when no script sfc in vue component ([869a466](https://github.com/qmhc/vite-plugin-dts/commit/869a4662af2e690b2e1e63faf941a9e1343dd6ea)), closes [#88](https://github.com/qmhc/vite-plugin-dts/issues/88)

### Features

- support vue 2.7 ([c4e2c4b](https://github.com/qmhc/vite-plugin-dts/commit/c4e2c4b479da837ab697220284ac3c54e89c54a0)), closes [#87](https://github.com/qmhc/vite-plugin-dts/issues/87)

## [1.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.0...v1.3.1) (2022-07-18)

### Bug Fixes

- dynamiclly adjust the exports of inserted index file ([abc9431](https://github.com/qmhc/vite-plugin-dts/commit/abc943143b97dbec0935b62171b16faeebd6fbf4)), closes [#81](https://github.com/qmhc/vite-plugin-dts/issues/81) [#86](https://github.com/qmhc/vite-plugin-dts/issues/86)
- missing inserted entry when multiple outputs ([39ff8ab](https://github.com/qmhc/vite-plugin-dts/commit/39ff8abc0e1dda232c3cf1e6f25ff8daddb37acb))

# [1.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.1...v1.3.0) (2022-07-13)

### Bug Fixes

- aliasesExclude not work when includes empty value ([#85](https://github.com/qmhc/vite-plugin-dts/issues/85)) ([8b9b9aa](https://github.com/qmhc/vite-plugin-dts/commit/8b9b9aa4e9d1c4fa84a2945f4f2421c9269240ff))
- correct type files generate when root is set ([#68](https://github.com/qmhc/vite-plugin-dts/issues/68)) ([0b491bd](https://github.com/qmhc/vite-plugin-dts/commit/0b491bd3720c5b6065dd00a00f9b95e39bf6c8fe))

### Features

- support multiple output dirs ([cd19ee7](https://github.com/qmhc/vite-plugin-dts/commit/cd19ee7f4cf25906a3ffcd89a6c93baf7c7266ed))

## [1.2.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.0...v1.2.1) (2022-07-05)

### Bug Fixes

- add parser plugins param for vue compiler ([7d6bd16](https://github.com/qmhc/vite-plugin-dts/commit/7d6bd16af88701152bf8847e160acf6169bd0918)), closes [#78](https://github.com/qmhc/vite-plugin-dts/issues/78)
- insert entry fail when no default export in source entry ([#82](https://github.com/qmhc/vite-plugin-dts/issues/82)) ([1a4b161](https://github.com/qmhc/vite-plugin-dts/commit/1a4b161647ba1826c3bfa7c9ca5ee7ca4c3ee4bf))

# [1.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.1...v1.2.0) (2022-05-24)

### Bug Fixes

- support read typings form package.json ([6b1bb29](https://github.com/qmhc/vite-plugin-dts/commit/6b1bb2951512733091b950f5767bfe5a1cbe8992))

### Features

- add `aliasesExclude` option ([#75](https://github.com/qmhc/vite-plugin-dts/issues/75)) ([7588ba4](https://github.com/qmhc/vite-plugin-dts/commit/7588ba4755c19e25ca2482b95cb99a59621e693e)), closes [#73](https://github.com/qmhc/vite-plugin-dts/issues/73)
- support override compilerOptions when rollup up ([995612d](https://github.com/qmhc/vite-plugin-dts/commit/995612d5eafa6b610a9ab8826ee7b8691c673b4e)), closes [#74](https://github.com/qmhc/vite-plugin-dts/issues/74)

## [1.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.0...v1.1.1) (2022-04-25)

### Bug Fixes

- incorrect rollup entry path ([a9309d8](https://github.com/qmhc/vite-plugin-dts/commit/a9309d8ca8c0531d1579d3a541cd67ac0a37ce1b))

# [1.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.5...v1.1.0) (2022-04-18)

### Bug Fixes

- lose the type of entry export default ([50f55de](https://github.com/qmhc/vite-plugin-dts/commit/50f55de3ec89d7995056c428a37d16e0cd2a6a4a))

### Features

- support rollup dts files after output ([1d87b44](https://github.com/qmhc/vite-plugin-dts/commit/1d87b44dff3c54a5b1b983b060d3d0d4972c1d94))

## [1.0.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.4...v1.0.5) (2022-04-02)

### Bug Fixes

- entryRoot option not work ([#66](https://github.com/qmhc/vite-plugin-dts/issues/66)) ([bca6423](https://github.com/qmhc/vite-plugin-dts/commit/bca64236076a28dbdd7e6e373c46f3af3723b4e1))

## [1.0.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.3...v1.0.4) (2022-03-28)

### Bug Fixes

- transfer 'debug' to dependencies ([7af9232](https://github.com/qmhc/vite-plugin-dts/commit/7af9232e381f6d572a543706d640c6ecdb5a6c00))

## [1.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.2...v1.0.3) (2022-03-25)

### Bug Fixes

- **example:** cannot resolve types through symlinks ([0914a6a](https://github.com/qmhc/vite-plugin-dts/commit/0914a6ad8dde3514f94e586798d6d73a9c2ac165)), closes [#63](https://github.com/qmhc/vite-plugin-dts/issues/63)

## [1.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.1...v1.0.2) (2022-03-24)

### Bug Fixes

- incorrect entryRoot calculation in linux an mac ([0136990](https://github.com/qmhc/vite-plugin-dts/commit/01369903f484eb74ae6fa23b49537fa64d610706)), closes [#62](https://github.com/qmhc/vite-plugin-dts/issues/62)

## [1.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0...v1.0.1) (2022-03-22)

### Bug Fixes

- missing some libs defind in dependencies ([ab7960f](https://github.com/qmhc/vite-plugin-dts/commit/ab7960f0d957aad6945ef469274bca3e142baa87))

# [1.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.10...v1.0.0) (2022-03-22)

### Features

- support entryRoot option ([c939e35](https://github.com/qmhc/vite-plugin-dts/commit/c939e358dfecacaf2dfd2b0d42118c16462c260a)), closes [#59](https://github.com/qmhc/vite-plugin-dts/issues/59)

### BREAKING CHANGES

- The calculating output paths funtion of root option is
  assigned to entryRoot option, and currently will auto calculating the
  smallest public path as the default value for entryRoot option.

## [0.9.10](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.9...v0.9.10) (2022-03-12)

### Bug Fixes

- make default include same as tsconfig.json ([5ca7fc5](https://github.com/qmhc/vite-plugin-dts/commit/5ca7fc51ab321d4b25ce9856c0e52894c1264d44)), closes [#58](https://github.com/qmhc/vite-plugin-dts/issues/58)

## [0.9.9](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.8...v0.9.9) (2022-01-11)

### Bug Fixes

- should filter vite virtual files ([5fb24ba](https://github.com/qmhc/vite-plugin-dts/commit/5fb24ba2c40ad2ef81e45c33533aada3bb5aefd3)), closes [#50](https://github.com/qmhc/vite-plugin-dts/issues/50)

## [0.9.8](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.7...v0.9.8) (2022-01-10)

### Bug Fixes

- put `copyDtsFiles` option in use ([#53](https://github.com/qmhc/vite-plugin-dts/issues/53)) ([261700f](https://github.com/qmhc/vite-plugin-dts/commit/261700f80a60b3bc1f22f391e00d9999205fe0d2)), closes [#52](https://github.com/qmhc/vite-plugin-dts/issues/52)

## [0.9.7](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.6...v0.9.7) (2021-12-30)

### Bug Fixes

- inserted entry not through beforeWriteFile ([e16b9b1](https://github.com/qmhc/vite-plugin-dts/commit/e16b9b15c66df887bac0ca0b6be05e4d1f8628ed)), closes [#48](https://github.com/qmhc/vite-plugin-dts/issues/48)

## [0.9.6](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.5...v0.9.6) (2021-11-23)

### Bug Fixes

- aliases are not resolved when find ends with '/' ([f04aab2](https://github.com/qmhc/vite-plugin-dts/commit/f04aab21f9f6dc02316a9ff3a9cd43e90cd97828)), closes [#37](https://github.com/qmhc/vite-plugin-dts/issues/37)
- not equally transform dts source files ([ede5146](https://github.com/qmhc/vite-plugin-dts/commit/ede514649282aec786549d490e8127824913914c))

## [0.9.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.4...v0.9.5) (2021-11-21)

### Bug Fixes

- ensure dts source files through beforeWriteFile hook ([3265412](https://github.com/qmhc/vite-plugin-dts/commit/3265412e26dd8736fefab0cf99e920d01bb246c5)), closes [#43](https://github.com/qmhc/vite-plugin-dts/issues/43)

## [0.9.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.3...v0.9.4) (2021-11-10)

### Bug Fixes

- cannot resolve types defined in dts files ([666ca09](https://github.com/qmhc/vite-plugin-dts/commit/666ca0925075bed6926f648a210f37d56af9577b)), closes [#42](https://github.com/qmhc/vite-plugin-dts/issues/42)
- take unused error when using setup-script ([c4145b7](https://github.com/qmhc/vite-plugin-dts/commit/c4145b7352359c79b8ba7c01a1c4afeace4dbc7c))

## [0.9.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.2...v0.9.3) (2021-11-03)

### Bug Fixes

- support require for cjs exports ([cc5aff9](https://github.com/qmhc/vite-plugin-dts/commit/cc5aff9b9906fc87f6012fb66566fd1937a9381e)), closes [#39](https://github.com/qmhc/vite-plugin-dts/issues/39)

## [0.9.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.1...v0.9.2) (2021-10-20)

### Bug Fixes

- support optional @vue/compiler-sfc ([34e1958](https://github.com/qmhc/vite-plugin-dts/commit/34e19587aa64c802cfbd99c5c8018bde8d0e1e2f))

## [0.9.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.3...v0.9.1) (2021-10-18)

### Bug Fixes

- watch mode not update ts/js files ([32a5699](https://github.com/qmhc/vite-plugin-dts/commit/32a5699a9b4f5a24b2a2a870ced43850a0573f82))

### Features

- add afterBuild hook option ([#34](https://github.com/qmhc/vite-plugin-dts/issues/34)) ([e836689](https://github.com/qmhc/vite-plugin-dts/commit/e83668988dab189d185ed9637032f7f80ba1e4db))
- afterDiagnostic and afterBuild support async ([c92d548](https://github.com/qmhc/vite-plugin-dts/commit/c92d54826b81f50fbb38fa909df730b323b75b24))
- skip dependencies by default ([8ca3ed3](https://github.com/qmhc/vite-plugin-dts/commit/8ca3ed30dfcc23c2dd9822fe6ef460a6c832dfe2))

## [0.8.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.2...v0.8.3) (2021-10-11)

### Bug Fixes

- support tsconfig.json using comments ([6e6e446](https://github.com/qmhc/vite-plugin-dts/commit/6e6e44683592060ebd27d1c5712058f2f0f0aeb6)), closes [#31](https://github.com/qmhc/vite-plugin-dts/issues/31)

## [0.8.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.1...v0.8.2) (2021-09-30)

### Bug Fixes

- create correct source for tsx/jsx script ([#29](https://github.com/qmhc/vite-plugin-dts/issues/29)) ([109721e](https://github.com/qmhc/vite-plugin-dts/commit/109721e89007cd702fe73fded44cc6b7efeef46e))

## [0.8.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.0...v0.8.1) (2021-09-22)

### Bug Fixes

- declarationDir make no file generated ([3313a19](https://github.com/qmhc/vite-plugin-dts/commit/3313a19da669bda7fa8fff3a5211652bc22e7413)), closes [#27](https://github.com/qmhc/vite-plugin-dts/issues/27)
- rewrite noEmit option when init porject ([735d26b](https://github.com/qmhc/vite-plugin-dts/commit/735d26b3cad9a90dd272a08448d238045306a1ba)), closes [#28](https://github.com/qmhc/vite-plugin-dts/issues/28)

# [0.8.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.7.0...v0.8.0) (2021-09-13)

### Bug Fixes

- adapt vue@3.2.6+ setup script ([1b62755](https://github.com/qmhc/vite-plugin-dts/commit/1b62755947972a67a034830cc7478fa1a65924c4))
- ouput files out of include bounds ([e1cdedf](https://github.com/qmhc/vite-plugin-dts/commit/e1cdedfc8b41a311d2c22674bd132f23242482ac)), closes [#24](https://github.com/qmhc/vite-plugin-dts/issues/24)

### Features

- add afterDiagnostic option ([7d43ece](https://github.com/qmhc/vite-plugin-dts/commit/7d43ece8fcb9b71d645982a45b01cd9136c525d8)), closes [#22](https://github.com/qmhc/vite-plugin-dts/issues/22)
- support build watch mode ([a920d97](https://github.com/qmhc/vite-plugin-dts/commit/a920d97825dced453f5f70d8776944c02b50e14b)), closes [#5](https://github.com/qmhc/vite-plugin-dts/issues/5)

# [0.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.6.0...v0.7.0) (2021-08-23)

### Bug Fixes

- support using script-setup alongside script ([39517ad](https://github.com/qmhc/vite-plugin-dts/commit/39517ad7119a4b97be7a2d874b43cb73cfa95f07)), closes [#21](https://github.com/qmhc/vite-plugin-dts/issues/21)

### Features

- add noEmitOnError and logDiagnostics options ([8a840fe](https://github.com/qmhc/vite-plugin-dts/commit/8a840fe2692e07e8e881c58ca8f6887d08493cc9))

# [0.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.3...v0.6.0) (2021-08-14)

### Bug Fixes

- resolve alias when using default import ([3121d5b](https://github.com/qmhc/vite-plugin-dts/commit/3121d5bd56a6863e5175c95b00d7a3dedc0cff6d)), closes [#20](https://github.com/qmhc/vite-plugin-dts/issues/20)

### Features

- add copyDtsFiles option ([bdab8c4](https://github.com/qmhc/vite-plugin-dts/commit/bdab8c4b4efa894209c2edeffbbe4d79680eafe9)), closes [#19](https://github.com/qmhc/vite-plugin-dts/issues/19)

## [0.5.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.2...v0.5.3) (2021-07-22)

### Bug Fixes

- add allowJs option dynamically ([36f8de2](https://github.com/qmhc/vite-plugin-dts/commit/36f8de28c68cd52945faeb375cd2931c6ad0468a)), closes [#17](https://github.com/qmhc/vite-plugin-dts/issues/17)
- add js and jsx files when allowJs ([0e1e6f7](https://github.com/qmhc/vite-plugin-dts/commit/0e1e6f7c09c85e169568b2c77c66d452d04a28a2))

## [0.5.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.1...v0.5.2) (2021-07-01)

### Bug Fixes

- cannot require @vue/compiler-sfc in monorepo ([fd9b5c1](https://github.com/qmhc/vite-plugin-dts/commit/fd9b5c1c018feb87e374cdf6671b7b8be14e775b)), closes [#14](https://github.com/qmhc/vite-plugin-dts/issues/14)

## [0.5.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.0...v0.5.1) (2021-06-18)

### Bug Fixes

- support insert entry from '.tsx' file ([e38b7c4](https://github.com/qmhc/vite-plugin-dts/commit/e38b7c4686a8d7405583a97078e97fbef4757da6))

# [0.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.3...v0.5.0) (2021-06-15)

### Bug Fixes

- ignore none export files ([f9c41bc](https://github.com/qmhc/vite-plugin-dts/commit/f9c41bc4e2fd498b53aa366a5f8f2a57589b6176))
- rename insertIndexEntry to insertTypesEntry ([c9d392e](https://github.com/qmhc/vite-plugin-dts/commit/c9d392ec3def98b541bb597c5ed38933b225fe5e))

### Features

- add clearPureImport option ([0357f69](https://github.com/qmhc/vite-plugin-dts/commit/0357f69485204f24d9830a4de59558a23eb66e19))
- defaults insert entry base on pkg.types ([9c71f28](https://github.com/qmhc/vite-plugin-dts/commit/9c71f28eac50d23a42d92bd79ac6d09f1be0544d))
- optional insert index type entry ([592a701](https://github.com/qmhc/vite-plugin-dts/commit/592a701d6213f955306df9de0c7f1d3243a28faa))

## [0.4.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.2...v0.4.3) (2021-06-11)

### Bug Fixes

- back off optional chaining and nullish coalescing ([8e09129](https://github.com/qmhc/vite-plugin-dts/commit/8e09129c1600a013a2c3c50983ab7f358216757f)), closes [#2](https://github.com/qmhc/vite-plugin-dts/issues/2)
- transform fs/promise to fs-extra ([1794b0b](https://github.com/qmhc/vite-plugin-dts/commit/1794b0b93baf4212b4efc5ef06a697adf70e4933)), closes [#4](https://github.com/qmhc/vite-plugin-dts/issues/4)

### Performance Improvements

- use menory result generate bundle ([858bf31](https://github.com/qmhc/vite-plugin-dts/commit/858bf317d16c995feb73e53339d61f7602e36484))

## [0.4.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.1...v0.4.2) (2021-06-09)

### Bug Fixes

- incomplete remove pure import ([a1fd54e](https://github.com/qmhc/vite-plugin-dts/commit/a1fd54e769f1b50ee5858d33879b2a6732625797))
- mamual set include and exclude ([b6fb510](https://github.com/qmhc/vite-plugin-dts/commit/b6fb5106206df9de83276687dd1451fa3d882067))
- more accurate normalize glob ([1d65c47](https://github.com/qmhc/vite-plugin-dts/commit/1d65c47811344a6b566a8dcf22cd22d9298d5a02))
- set rootDir if not set in compilerOptions ([a1d83d2](https://github.com/qmhc/vite-plugin-dts/commit/a1d83d2aa56a32ebef11b9d98fa508a6d9fbd412)), closes [#3](https://github.com/qmhc/vite-plugin-dts/issues/3)
- transform alias include dynamic imports ([a6919b4](https://github.com/qmhc/vite-plugin-dts/commit/a6919b4760cf5cbefbdad1ac674b8a8275dc27dd))
- transform alias include dynamic imports ([3a5511e](https://github.com/qmhc/vite-plugin-dts/commit/3a5511e3e0b961d7f4ac393da623502a186a0538))

## [0.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.0...v0.4.1) (2021-06-08)

### Bug Fixes

- dynamic import regexp endings include ']' and ')' ([e5f37a6](https://github.com/qmhc/vite-plugin-dts/commit/e5f37a6d9e232e268ea1b2ec2eadb6c7bc7d7115))

# [0.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.5...v0.4.0) (2021-06-08)

### Bug Fixes

- bundle only once for multiple formats ([be37fbf](https://github.com/qmhc/vite-plugin-dts/commit/be37fbfcbd03dd23c73908a2d7f2d019437e003a))

### Features

- bundle all from tsconfig include ([252554a](https://github.com/qmhc/vite-plugin-dts/commit/252554af1fa403af1ee00dba16a1c7938e7374c6))

### BREAKING CHANGES

- Deprecated include and exclude options

## [0.3.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.4...v0.3.5) (2021-06-08)

### Bug Fixes

- includes prue type export files ([1341359](https://github.com/qmhc/vite-plugin-dts/commit/1341359b9943fd961ec0d3d40d71252e77c73390))
- incorrect path in transform alias ([d686ff9](https://github.com/qmhc/vite-plugin-dts/commit/d686ff94157c400d7f235331a47fbb9d452afeb9))

## [0.3.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.3...v0.3.4) (2021-06-07)

### Bug Fixes

- remove pure import ([fe241de](https://github.com/qmhc/vite-plugin-dts/commit/fe241de5b583cb5bf2dde83383a8a43e53724ce1))
- static import include relative path ([4065217](https://github.com/qmhc/vite-plugin-dts/commit/40652178b9071509269e6b66cbbbcb3562cf349d))

## [0.3.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.2...v0.3.3) (2021-06-07)

### Bug Fixes

- keep output relative to root not to entry dir ([e83ec64](https://github.com/qmhc/vite-plugin-dts/commit/e83ec643536f888166055a5495db3e2fd1030584))

### BREAKING CHANGES

- Ouput declaration structure no longer relative to entry dir

## [0.3.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.1...v0.3.2) (2021-06-07)

### Bug Fixes

- default root base on vite config ([787ebc1](https://github.com/qmhc/vite-plugin-dts/commit/787ebc175d07370628589a6fc73e325b29655a0b))

## [0.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.0...v0.3.1) (2021-06-06)

### Bug Fixes

- vue file explicit type lost ([d0d8803](https://github.com/qmhc/vite-plugin-dts/commit/d0d88038fb51d71dfb71ab4d0223600801d50349))

# [0.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.2.0...v0.3.0) (2021-06-06)

### Bug Fixes

- transform alias import to relative path ([6d5a2d5](https://github.com/qmhc/vite-plugin-dts/commit/6d5a2d5b5ba691b5572727cbf42b340d05964951))

### Features

- projectOptions refine to compilerOptions and tsConfigFilePath ([eb61113](https://github.com/qmhc/vite-plugin-dts/commit/eb611135446fff7bc82e3bd0d1d2b856a829de98))

### BREAKING CHANGES

- projectOptions no longer supported, the project init should be up to the plugin.

# [0.2.0](https://github.com/qmhc/vite-plugin-dts/compare/b2f0c0aa6eea5b48703248eca3294c5d845404ba...v0.2.0) (2021-06-05)

### Features

- add beforeWriteFile hook ([139e818](https://github.com/qmhc/vite-plugin-dts/commit/139e818cecfa80d4208b3f5ced55e7db57bf7e52))
- add outputDir option ([f289723](https://github.com/qmhc/vite-plugin-dts/commit/f289723672279795c0b96aaac3abf83dd8913b20))
- add transform dynamic import to static ([b2f0c0a](https://github.com/qmhc/vite-plugin-dts/commit/b2f0c0aa6eea5b48703248eca3294c5d845404ba))

# [3.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.2.0...v3.3.0) (2023-07-14)

### Bug Fixes

- should pass full path to resolver.support ([7088a0c](https://github.com/qmhc/vite-plugin-dts/commit/7088a0c064c604ffdc528b32aa4f025fb9d607ca))
- using raw target when rolling up types ([e53c815](https://github.com/qmhc/vite-plugin-dts/commit/e53c81515ec03000816ea1ad65e0971e78bab689)), closes [#242](https://github.com/qmhc/vite-plugin-dts/issues/242)

### Features

- beforeWriteFile supports return Promise ([5e5b93c](https://github.com/qmhc/vite-plugin-dts/commit/5e5b93cfcb7e906c431c081e910f0edb97b8378c))
- support sourcemap to `.vue` files ([#243](https://github.com/qmhc/vite-plugin-dts/issues/243)) ([7445046](https://github.com/qmhc/vite-plugin-dts/commit/744504652c06bbbe1718edce5729bb7af1431135))

# [3.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.1.1...v3.2.0) (2023-07-08)

### Bug Fixes

- ensure paths are absolute when process public root ([3628877](https://github.com/qmhc/vite-plugin-dts/commit/3628877f447e6383365024dc43dacfa963f41036)), closes [#238](https://github.com/qmhc/vite-plugin-dts/issues/238)
- normalize paths of resolver transform returns ([3b5a945](https://github.com/qmhc/vite-plugin-dts/commit/3b5a94524a9a00de94ebff015934bb72ad71b192))

### Features

- create resolver for json files ([#237](https://github.com/qmhc/vite-plugin-dts/issues/237)) ([53c58c8](https://github.com/qmhc/vite-plugin-dts/commit/53c58c8071cb892e969cec693f6e75a11eea3fec))
- support parse paths of tsconfig.json to aliases ([#236](https://github.com/qmhc/vite-plugin-dts/issues/236)) ([68fc12a](https://github.com/qmhc/vite-plugin-dts/commit/68fc12af50683fef12f302bc95c3ce6da679ae74))

## [3.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.1.0...v3.1.1) (2023-07-07)

### Bug Fixes

- ensure aliases init when using Rollup ([22c69a4](https://github.com/qmhc/vite-plugin-dts/commit/22c69a4df9cffd0444a64de09221e1ec30d7f8c2))

# [3.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.3...v3.1.0) (2023-07-05)

### Features

- support custom resolvers to transform files ([#233](https://github.com/qmhc/vite-plugin-dts/issues/233)) ([be43a4d](https://github.com/qmhc/vite-plugin-dts/commit/be43a4dfd96ae76bb851dde675d222d51ea46e92))

## [3.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.2...v3.0.3) (2023-07-03)

### Bug Fixes

- incorrect lib path process when rollup types ([292b8b7](https://github.com/qmhc/vite-plugin-dts/commit/292b8b7be90e05d2d19febde2e57ec126aba0d33)), closes [#232](https://github.com/qmhc/vite-plugin-dts/issues/232)

## [3.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.1...v3.0.2) (2023-06-30)

### Bug Fixes

- error if exists same lib when transfrom dynamic imports ([c187278](https://github.com/qmhc/vite-plugin-dts/commit/c187278044972ecab077abada4a761398c74223c))

## [3.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0...v3.0.1) (2023-06-30)

### Bug Fixes

- correctly process default dynamic imports ([99105b0](https://github.com/qmhc/vite-plugin-dts/commit/99105b004325ade3c8ccc19c5375fa60716db300)), closes [#222](https://github.com/qmhc/vite-plugin-dts/issues/222)
- ensure collect manual dts for js source files ([5b7c5e5](https://github.com/qmhc/vite-plugin-dts/commit/5b7c5e52c71e457b904dd2f28b430dc9db267cf7)), closes [#184](https://github.com/qmhc/vite-plugin-dts/issues/184)

# [3.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.3...v3.0.0) (2023-06-30)

### Bug Fixes

- correct path process when specify entryRoot ([fc15dac](https://github.com/qmhc/vite-plugin-dts/commit/fc15dacf0561fc598e25f6de435edf97d6edfdf1)), closes [#229](https://github.com/qmhc/vite-plugin-dts/issues/229) [#230](https://github.com/qmhc/vite-plugin-dts/issues/230)
- correct time cost recording ([57eb430](https://github.com/qmhc/vite-plugin-dts/commit/57eb4309aeec4b5773bfa10c6e48a41c2fd23c69))

### Features

- add strictOutput to limit output write ([07224d1](https://github.com/qmhc/vite-plugin-dts/commit/07224d15576ee6528c9068d8a80fcbbf502018f0))

# [3.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2023-06-27)

### Bug Fixes

- incorrect entryRoot when in single inner entry ([96d32d1](https://github.com/qmhc/vite-plugin-dts/commit/96d32d127b73d48ce192424c4596fe24a2d24619))
- promise A+ specification for `isPromise` method ([#228](https://github.com/qmhc/vite-plugin-dts/issues/228)) ([3454a35](https://github.com/qmhc/vite-plugin-dts/commit/3454a356683a97752b0161a0e5be0328aa55a4f3))

# [3.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.3.0...v3.0.0-beta.2) (2023-06-27)

### Features

- transfer to use Volar, support Rollup, improve watch mode ([#226](https://github.com/qmhc/vite-plugin-dts/issues/226)) ([bb7949c](https://github.com/qmhc/vite-plugin-dts/commit/bb7949c841141b2305640d953be4dddf45ce7d1a))

### BREAKING CHANGES

- Deprecated options: `noEmitOnError`, `skipDiagnostics`
  and `libFolderPath`. Rename options: `outputDir` -> `outDir`,
  `tsConfigFilePath` -> `tsconfigPath`.

# [2.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.1.0...v2.3.0) (2023-04-17)

### Features

- compatible with svelte ([#197](https://github.com/qmhc/vite-plugin-dts/issues/197)) ([5d38517](https://github.com/qmhc/vite-plugin-dts/commit/5d38517ee16fdfc2009725b9146bfe38c49d1709))
- supports multiple extends in tsconfig.json ([#202](https://github.com/qmhc/vite-plugin-dts/issues/202)) ([9fdac66](https://github.com/qmhc/vite-plugin-dts/commit/9fdac66c0cfd827791208a31fbbefd1fad4ac2bf)), closes [#200](https://github.com/qmhc/vite-plugin-dts/issues/200)

# [2.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.2...v2.1.0) (2023-03-08)

### Features

- add bundledPackages configuration ([#186](https://github.com/qmhc/vite-plugin-dts/issues/186)) ([8997680](https://github.com/qmhc/vite-plugin-dts/commit/8997680776d8f35ae5248cc73b2d6a734e5dbc4a))

## [2.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.1...v2.0.2) (2023-02-23)

### Bug Fixes

- recursively resolve extended tsconfig path ([#181](https://github.com/qmhc/vite-plugin-dts/issues/181)) ([7ca8502](https://github.com/qmhc/vite-plugin-dts/commit/7ca85026e9a3e345c334222af5ffa823bda380a7))

## [2.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0...v2.0.1) (2023-02-23)

### Bug Fixes

- **vue:** correctly remove components for normal script ([6dbd9af](https://github.com/qmhc/vite-plugin-dts/commit/6dbd9af3bbd8175ef8a1cee4054ba38f330eef0c))
- **vue:** error when parse no argument function ([4db63b4](https://github.com/qmhc/vite-plugin-dts/commit/4db63b4b1b48686146f07e7e69dcbd4a82b33efb))

# [2.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.3...v2.0.0) (2023-02-23)

### Bug Fixes

- ensure watch all the files defined in include ([42a755c](https://github.com/qmhc/vite-plugin-dts/commit/42a755cf502cdfa8dc9dab0f600e8cc2a46eec18)), closes [#151](https://github.com/qmhc/vite-plugin-dts/issues/151)
- incorrect path resolve when copy dts source files ([434f69e](https://github.com/qmhc/vite-plugin-dts/commit/434f69e9629db5b2e74e609ffbc5f9cd436c1177)), closes [#179](https://github.com/qmhc/vite-plugin-dts/issues/179)
- **react:** unlimited init order when using with react plugin ([92b82ff](https://github.com/qmhc/vite-plugin-dts/commit/92b82ff47e0480c86c76e298feaa7cea8e06f7fa)), closes [#148](https://github.com/qmhc/vite-plugin-dts/issues/148)

### BREAKING CHANGES

- `copyDtsFiles` option now default to false.

# [2.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2023-02-21)

### Bug Fixes

- support manually create dts for source file ([2174868](https://github.com/qmhc/vite-plugin-dts/commit/2174868158766fd16a72f9f44b979d2c62d8ab07)), closes [#178](https://github.com/qmhc/vite-plugin-dts/issues/178)

### Features

- support parse types entry from exports in package.json ([f033cf8](https://github.com/qmhc/vite-plugin-dts/commit/f033cf876b51d7e11f1aa562567f3fd1f97d04f5))

# [2.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2023-02-20)

### Bug Fixes

- should re-transform when file changed in watch mode ([eafdd3c](https://github.com/qmhc/vite-plugin-dts/commit/eafdd3ce7d6757f93a378130b8e34f41e17e4004)), closes [#99](https://github.com/qmhc/vite-plugin-dts/issues/99)
- **vue:** preprocess not direct exported component ([8bd769e](https://github.com/qmhc/vite-plugin-dts/commit/8bd769e013f845a8e486d354d9f8517bd7b02e72))

### Features

- support specify log level of plugin ([2c1aeb0](https://github.com/qmhc/vite-plugin-dts/commit/2c1aeb01637aa4511f4e4c26b891b6e7ea235d50)), closes [#177](https://github.com/qmhc/vite-plugin-dts/issues/177)

# [2.0.0-beta.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2023-02-17)

### Bug Fixes

- **vue:** conversion error when using outside ts props ([25307cf](https://github.com/qmhc/vite-plugin-dts/commit/25307cf6ef89aa8501c8c35ff8ca519021adafea)), closes [#175](https://github.com/qmhc/vite-plugin-dts/issues/175)
- **vue:** remove components option before inferring ([90f8ac1](https://github.com/qmhc/vite-plugin-dts/commit/90f8ac160412de418bc7dc31c97f4ca7daa524ca))

# [2.0.0-beta.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.3...v2.0.0-beta.0) (2023-02-16)

### Bug Fixes

- override composite for root tsconfig ([df1d0f4](https://github.com/qmhc/vite-plugin-dts/commit/df1d0f42d0d9d9341d7766f5c147e7e3fa3733cf)), closes [#153](https://github.com/qmhc/vite-plugin-dts/issues/153)
- **vue:** ignore css vars when compile ([6d2369a](https://github.com/qmhc/vite-plugin-dts/commit/6d2369afe31c18b3dff45296d74b90aba86bb656)), closes [#167](https://github.com/qmhc/vite-plugin-dts/issues/167)

### Features

- **vue:** accurate types inferring for exposed and props ([#173](https://github.com/qmhc/vite-plugin-dts/issues/173)) ([c25448c](https://github.com/qmhc/vite-plugin-dts/commit/c25448c90f3b3969d51dbfa31ad5dc3ce2a9a2aa))

## [1.7.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.2...v1.7.3) (2023-02-14)

### Bug Fixes

- incorrect compilerOptions when rollup dts ([9dd8d9c](https://github.com/qmhc/vite-plugin-dts/commit/9dd8d9c41bed7f79e24ee890c1f28d867346326e)), closes [#171](https://github.com/qmhc/vite-plugin-dts/issues/171)
- normalize `mts` and `cts` declaration files extension ([410288a](https://github.com/qmhc/vite-plugin-dts/commit/410288ac65d7fb4a3065d93c6d7be9e2a8dd3f77)), closes [#169](https://github.com/qmhc/vite-plugin-dts/issues/169)

## [1.7.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.1...v1.7.2) (2023-01-31)

### Bug Fixes

- correct .d.ts extension in multiple outputs ([5c9709c](https://github.com/qmhc/vite-plugin-dts/commit/5c9709c4082ee36f2f28b4ad6e21b846aa27d5d6)), closes [#144](https://github.com/qmhc/vite-plugin-dts/issues/144)
- insertTypesEntry config supports publishConfig.types ([#164](https://github.com/qmhc/vite-plugin-dts/issues/164)) ([dae4ef9](https://github.com/qmhc/vite-plugin-dts/commit/dae4ef9de1175cf5bdc5a7dedfa60d7bab381dba))
- mark typescript as external dependency ([#160](https://github.com/qmhc/vite-plugin-dts/issues/160)) ([31e10d4](https://github.com/qmhc/vite-plugin-dts/commit/31e10d4ec2a37148ad63fdfb141264d6c4966135))

## [1.7.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.0...v1.7.1) (2022-11-14)

### Bug Fixes

- ensure exulde working when transform ([aea8ebd](https://github.com/qmhc/vite-plugin-dts/commit/aea8ebdc4eac489bc62ccebf3552421bd43d318c)), closes [#143](https://github.com/qmhc/vite-plugin-dts/issues/143) [#140](https://github.com/qmhc/vite-plugin-dts/issues/140) [#97](https://github.com/qmhc/vite-plugin-dts/issues/97)
- import vite plugin type via dynamic import ([8bd73c8](https://github.com/qmhc/vite-plugin-dts/commit/8bd73c8fae010ba0d32df8b144345b7f641a6085)), closes [#139](https://github.com/qmhc/vite-plugin-dts/issues/139)

# [1.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.6...v1.7.0) (2022-11-07)

### Bug Fixes

- compiler missing plugin `decorators-legacy` ([#138](https://github.com/qmhc/vite-plugin-dts/issues/138)) ([717af2f](https://github.com/qmhc/vite-plugin-dts/commit/717af2f4bc1b5bd549339179bc5b75dbbd9a348a))
- derprecate logDiagnostics option ([e405328](https://github.com/qmhc/vite-plugin-dts/commit/e405328f64870919a3ee4100fac087870ed4662e))
- incorrect compiler address resolution ([#133](https://github.com/qmhc/vite-plugin-dts/issues/133)) ([01cc125](https://github.com/qmhc/vite-plugin-dts/commit/01cc125ea98b1994e364487f73d71b0cb6ebcdbf))

### Features

- support customize typescript lib path ([27b83f3](https://github.com/qmhc/vite-plugin-dts/commit/27b83f3423f50307852257f3747c112f2f3cd325)), closes [#134](https://github.com/qmhc/vite-plugin-dts/issues/134)
- support multiple entries for lib mode ([1fafe54](https://github.com/qmhc/vite-plugin-dts/commit/1fafe54991431ce86a404ecb7e179ef1aa8aff0a)), closes [#136](https://github.com/qmhc/vite-plugin-dts/issues/136)

## [1.6.6](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.5...v1.6.6) (2022-10-13)

### Bug Fixes

- adapt @microsoft/api-extractor 7.33+ ([5acb4be](https://github.com/qmhc/vite-plugin-dts/commit/5acb4be4d1e4fe41e42a38ec9e92eeeb6f3a9c15))
- always ship included dts files into soure ([fc345e3](https://github.com/qmhc/vite-plugin-dts/commit/fc345e31b79fd7ca40581727d1964f80d1b9db82)), closes [#126](https://github.com/qmhc/vite-plugin-dts/issues/126)

## [1.6.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.4...v1.6.5) (2022-10-06)

### Bug Fixes

- remove pnpm limitation in preinstall to support npm@6 ([d7167b8](https://github.com/qmhc/vite-plugin-dts/commit/d7167b83381c54075e0e9114c07fe9451b6ffa2d)), closes [#123](https://github.com/qmhc/vite-plugin-dts/issues/123)

## [1.6.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.3...v1.6.4) (2022-09-30)

### Bug Fixes

- patch cjs vars for esm scope ([57e093d](https://github.com/qmhc/vite-plugin-dts/commit/57e093d734e4b81bbeeecbd694b269cca698f914)), closes [#119](https://github.com/qmhc/vite-plugin-dts/issues/119) [#122](https://github.com/qmhc/vite-plugin-dts/issues/122)

## [1.6.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.2...v1.6.3) (2022-09-30)

### Bug Fixes

- both support cjs and esm(using by tsx) ([38bd6a6](https://github.com/qmhc/vite-plugin-dts/commit/38bd6a6789fe375dd5da0aec1ea9b6816751719a))

## [1.6.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.1...v1.6.2) (2022-09-30)

### Bug Fixes

- ensure generate dts for type only files ([f3f4919](https://github.com/qmhc/vite-plugin-dts/commit/f3f4919fa441a27b7d842f1e64dd8d711bd05ec9)), closes [#118](https://github.com/qmhc/vite-plugin-dts/issues/118)

## [1.6.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.0...v1.6.1) (2022-09-28)

### Bug Fixes

- path error in cjs running ([0832af4](https://github.com/qmhc/vite-plugin-dts/commit/0832af4ab49d8166e14b6897bb1538ec6ddf3bb5))

# [1.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.5.0...v1.6.0) (2022-09-28)

### Bug Fixes

- correct compilerOptions.outDir for project init ([8699219](https://github.com/qmhc/vite-plugin-dts/commit/86992194411017e75b1d17c3f72d631267ec187b))
- type error occurred while define `defineProps` retruns as `props` ([41eb53a](https://github.com/qmhc/vite-plugin-dts/commit/41eb53a4da681d2c809dc8a7674a03284acbea02)), closes [#113](https://github.com/qmhc/vite-plugin-dts/issues/113)

### Features

- skip write file when `beforeWriteFile` return exact `false` ([9404ebc](https://github.com/qmhc/vite-plugin-dts/commit/9404ebc811b919a59a21b954d4ba4d43be255390)), closes [#110](https://github.com/qmhc/vite-plugin-dts/issues/110)

# [1.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.1...v1.5.0) (2022-09-11)

### Features

- improve aliasesExclude to support more flexible definition ([f652523](https://github.com/qmhc/vite-plugin-dts/commit/f6525235758b0d29347feb7f21a5085dc81b13a4)), closes [#93](https://github.com/qmhc/vite-plugin-dts/issues/93)

## [1.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.0...v1.4.1) (2022-08-01)

### Bug Fixes

- includes `extends` field when parse tsconfig.json ([#96](https://github.com/qmhc/vite-plugin-dts/issues/96)) ([2631de0](https://github.com/qmhc/vite-plugin-dts/commit/2631de0725e89083752fd590ff604f3f763abd3a))

# [1.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.1...v1.4.0) (2022-07-20)

### Bug Fixes

- ensure emit dts when no script sfc in vue component ([869a466](https://github.com/qmhc/vite-plugin-dts/commit/869a4662af2e690b2e1e63faf941a9e1343dd6ea)), closes [#88](https://github.com/qmhc/vite-plugin-dts/issues/88)

### Features

- support vue 2.7 ([c4e2c4b](https://github.com/qmhc/vite-plugin-dts/commit/c4e2c4b479da837ab697220284ac3c54e89c54a0)), closes [#87](https://github.com/qmhc/vite-plugin-dts/issues/87)

## [1.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.0...v1.3.1) (2022-07-18)

### Bug Fixes

- dynamiclly adjust the exports of inserted index file ([abc9431](https://github.com/qmhc/vite-plugin-dts/commit/abc943143b97dbec0935b62171b16faeebd6fbf4)), closes [#81](https://github.com/qmhc/vite-plugin-dts/issues/81) [#86](https://github.com/qmhc/vite-plugin-dts/issues/86)
- missing inserted entry when multiple outputs ([39ff8ab](https://github.com/qmhc/vite-plugin-dts/commit/39ff8abc0e1dda232c3cf1e6f25ff8daddb37acb))

# [1.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.1...v1.3.0) (2022-07-13)

### Bug Fixes

- aliasesExclude not work when includes empty value ([#85](https://github.com/qmhc/vite-plugin-dts/issues/85)) ([8b9b9aa](https://github.com/qmhc/vite-plugin-dts/commit/8b9b9aa4e9d1c4fa84a2945f4f2421c9269240ff))
- correct type files generate when root is set ([#68](https://github.com/qmhc/vite-plugin-dts/issues/68)) ([0b491bd](https://github.com/qmhc/vite-plugin-dts/commit/0b491bd3720c5b6065dd00a00f9b95e39bf6c8fe))

### Features

- support multiple output dirs ([cd19ee7](https://github.com/qmhc/vite-plugin-dts/commit/cd19ee7f4cf25906a3ffcd89a6c93baf7c7266ed))

## [1.2.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.0...v1.2.1) (2022-07-05)

### Bug Fixes

- add parser plugins param for vue compiler ([7d6bd16](https://github.com/qmhc/vite-plugin-dts/commit/7d6bd16af88701152bf8847e160acf6169bd0918)), closes [#78](https://github.com/qmhc/vite-plugin-dts/issues/78)
- insert entry fail when no default export in source entry ([#82](https://github.com/qmhc/vite-plugin-dts/issues/82)) ([1a4b161](https://github.com/qmhc/vite-plugin-dts/commit/1a4b161647ba1826c3bfa7c9ca5ee7ca4c3ee4bf))

# [1.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.1...v1.2.0) (2022-05-24)

### Bug Fixes

- support read typings form package.json ([6b1bb29](https://github.com/qmhc/vite-plugin-dts/commit/6b1bb2951512733091b950f5767bfe5a1cbe8992))

### Features

- add `aliasesExclude` option ([#75](https://github.com/qmhc/vite-plugin-dts/issues/75)) ([7588ba4](https://github.com/qmhc/vite-plugin-dts/commit/7588ba4755c19e25ca2482b95cb99a59621e693e)), closes [#73](https://github.com/qmhc/vite-plugin-dts/issues/73)
- support override compilerOptions when rollup up ([995612d](https://github.com/qmhc/vite-plugin-dts/commit/995612d5eafa6b610a9ab8826ee7b8691c673b4e)), closes [#74](https://github.com/qmhc/vite-plugin-dts/issues/74)

## [1.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.0...v1.1.1) (2022-04-25)

### Bug Fixes

- incorrect rollup entry path ([a9309d8](https://github.com/qmhc/vite-plugin-dts/commit/a9309d8ca8c0531d1579d3a541cd67ac0a37ce1b))

# [1.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.5...v1.1.0) (2022-04-18)

### Bug Fixes

- lose the type of entry export default ([50f55de](https://github.com/qmhc/vite-plugin-dts/commit/50f55de3ec89d7995056c428a37d16e0cd2a6a4a))

### Features

- support rollup dts files after output ([1d87b44](https://github.com/qmhc/vite-plugin-dts/commit/1d87b44dff3c54a5b1b983b060d3d0d4972c1d94))

## [1.0.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.4...v1.0.5) (2022-04-02)

### Bug Fixes

- entryRoot option not work ([#66](https://github.com/qmhc/vite-plugin-dts/issues/66)) ([bca6423](https://github.com/qmhc/vite-plugin-dts/commit/bca64236076a28dbdd7e6e373c46f3af3723b4e1))

## [1.0.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.3...v1.0.4) (2022-03-28)

### Bug Fixes

- transfer 'debug' to dependencies ([7af9232](https://github.com/qmhc/vite-plugin-dts/commit/7af9232e381f6d572a543706d640c6ecdb5a6c00))

## [1.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.2...v1.0.3) (2022-03-25)

### Bug Fixes

- **example:** cannot resolve types through symlinks ([0914a6a](https://github.com/qmhc/vite-plugin-dts/commit/0914a6ad8dde3514f94e586798d6d73a9c2ac165)), closes [#63](https://github.com/qmhc/vite-plugin-dts/issues/63)

## [1.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.1...v1.0.2) (2022-03-24)

### Bug Fixes

- incorrect entryRoot calculation in linux an mac ([0136990](https://github.com/qmhc/vite-plugin-dts/commit/01369903f484eb74ae6fa23b49537fa64d610706)), closes [#62](https://github.com/qmhc/vite-plugin-dts/issues/62)

## [1.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0...v1.0.1) (2022-03-22)

### Bug Fixes

- missing some libs defind in dependencies ([ab7960f](https://github.com/qmhc/vite-plugin-dts/commit/ab7960f0d957aad6945ef469274bca3e142baa87))

# [1.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.10...v1.0.0) (2022-03-22)

### Features

- support entryRoot option ([c939e35](https://github.com/qmhc/vite-plugin-dts/commit/c939e358dfecacaf2dfd2b0d42118c16462c260a)), closes [#59](https://github.com/qmhc/vite-plugin-dts/issues/59)

### BREAKING CHANGES

- The calculating output paths funtion of root option is
  assigned to entryRoot option, and currently will auto calculating the
  smallest public path as the default value for entryRoot option.

## [0.9.10](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.9...v0.9.10) (2022-03-12)

### Bug Fixes

- make default include same as tsconfig.json ([5ca7fc5](https://github.com/qmhc/vite-plugin-dts/commit/5ca7fc51ab321d4b25ce9856c0e52894c1264d44)), closes [#58](https://github.com/qmhc/vite-plugin-dts/issues/58)

## [0.9.9](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.8...v0.9.9) (2022-01-11)

### Bug Fixes

- should filter vite virtual files ([5fb24ba](https://github.com/qmhc/vite-plugin-dts/commit/5fb24ba2c40ad2ef81e45c33533aada3bb5aefd3)), closes [#50](https://github.com/qmhc/vite-plugin-dts/issues/50)

## [0.9.8](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.7...v0.9.8) (2022-01-10)

### Bug Fixes

- put `copyDtsFiles` option in use ([#53](https://github.com/qmhc/vite-plugin-dts/issues/53)) ([261700f](https://github.com/qmhc/vite-plugin-dts/commit/261700f80a60b3bc1f22f391e00d9999205fe0d2)), closes [#52](https://github.com/qmhc/vite-plugin-dts/issues/52)

## [0.9.7](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.6...v0.9.7) (2021-12-30)

### Bug Fixes

- inserted entry not through beforeWriteFile ([e16b9b1](https://github.com/qmhc/vite-plugin-dts/commit/e16b9b15c66df887bac0ca0b6be05e4d1f8628ed)), closes [#48](https://github.com/qmhc/vite-plugin-dts/issues/48)

## [0.9.6](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.5...v0.9.6) (2021-11-23)

### Bug Fixes

- aliases are not resolved when find ends with '/' ([f04aab2](https://github.com/qmhc/vite-plugin-dts/commit/f04aab21f9f6dc02316a9ff3a9cd43e90cd97828)), closes [#37](https://github.com/qmhc/vite-plugin-dts/issues/37)
- not equally transform dts source files ([ede5146](https://github.com/qmhc/vite-plugin-dts/commit/ede514649282aec786549d490e8127824913914c))

## [0.9.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.4...v0.9.5) (2021-11-21)

### Bug Fixes

- ensure dts source files through beforeWriteFile hook ([3265412](https://github.com/qmhc/vite-plugin-dts/commit/3265412e26dd8736fefab0cf99e920d01bb246c5)), closes [#43](https://github.com/qmhc/vite-plugin-dts/issues/43)

## [0.9.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.3...v0.9.4) (2021-11-10)

### Bug Fixes

- cannot resolve types defined in dts files ([666ca09](https://github.com/qmhc/vite-plugin-dts/commit/666ca0925075bed6926f648a210f37d56af9577b)), closes [#42](https://github.com/qmhc/vite-plugin-dts/issues/42)
- take unused error when using setup-script ([c4145b7](https://github.com/qmhc/vite-plugin-dts/commit/c4145b7352359c79b8ba7c01a1c4afeace4dbc7c))

## [0.9.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.2...v0.9.3) (2021-11-03)

### Bug Fixes

- support require for cjs exports ([cc5aff9](https://github.com/qmhc/vite-plugin-dts/commit/cc5aff9b9906fc87f6012fb66566fd1937a9381e)), closes [#39](https://github.com/qmhc/vite-plugin-dts/issues/39)

## [0.9.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.1...v0.9.2) (2021-10-20)

### Bug Fixes

- support optional @vue/compiler-sfc ([34e1958](https://github.com/qmhc/vite-plugin-dts/commit/34e19587aa64c802cfbd99c5c8018bde8d0e1e2f))

## [0.9.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.3...v0.9.1) (2021-10-18)

### Bug Fixes

- watch mode not update ts/js files ([32a5699](https://github.com/qmhc/vite-plugin-dts/commit/32a5699a9b4f5a24b2a2a870ced43850a0573f82))

### Features

- add afterBuild hook option ([#34](https://github.com/qmhc/vite-plugin-dts/issues/34)) ([e836689](https://github.com/qmhc/vite-plugin-dts/commit/e83668988dab189d185ed9637032f7f80ba1e4db))
- afterDiagnostic and afterBuild support async ([c92d548](https://github.com/qmhc/vite-plugin-dts/commit/c92d54826b81f50fbb38fa909df730b323b75b24))
- skip dependencies by default ([8ca3ed3](https://github.com/qmhc/vite-plugin-dts/commit/8ca3ed30dfcc23c2dd9822fe6ef460a6c832dfe2))

## [0.8.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.2...v0.8.3) (2021-10-11)

### Bug Fixes

- support tsconfig.json using comments ([6e6e446](https://github.com/qmhc/vite-plugin-dts/commit/6e6e44683592060ebd27d1c5712058f2f0f0aeb6)), closes [#31](https://github.com/qmhc/vite-plugin-dts/issues/31)

## [0.8.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.1...v0.8.2) (2021-09-30)

### Bug Fixes

- create correct source for tsx/jsx script ([#29](https://github.com/qmhc/vite-plugin-dts/issues/29)) ([109721e](https://github.com/qmhc/vite-plugin-dts/commit/109721e89007cd702fe73fded44cc6b7efeef46e))

## [0.8.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.0...v0.8.1) (2021-09-22)

### Bug Fixes

- declarationDir make no file generated ([3313a19](https://github.com/qmhc/vite-plugin-dts/commit/3313a19da669bda7fa8fff3a5211652bc22e7413)), closes [#27](https://github.com/qmhc/vite-plugin-dts/issues/27)
- rewrite noEmit option when init porject ([735d26b](https://github.com/qmhc/vite-plugin-dts/commit/735d26b3cad9a90dd272a08448d238045306a1ba)), closes [#28](https://github.com/qmhc/vite-plugin-dts/issues/28)

# [0.8.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.7.0...v0.8.0) (2021-09-13)

### Bug Fixes

- adapt vue@3.2.6+ setup script ([1b62755](https://github.com/qmhc/vite-plugin-dts/commit/1b62755947972a67a034830cc7478fa1a65924c4))
- ouput files out of include bounds ([e1cdedf](https://github.com/qmhc/vite-plugin-dts/commit/e1cdedfc8b41a311d2c22674bd132f23242482ac)), closes [#24](https://github.com/qmhc/vite-plugin-dts/issues/24)

### Features

- add afterDiagnostic option ([7d43ece](https://github.com/qmhc/vite-plugin-dts/commit/7d43ece8fcb9b71d645982a45b01cd9136c525d8)), closes [#22](https://github.com/qmhc/vite-plugin-dts/issues/22)
- support build watch mode ([a920d97](https://github.com/qmhc/vite-plugin-dts/commit/a920d97825dced453f5f70d8776944c02b50e14b)), closes [#5](https://github.com/qmhc/vite-plugin-dts/issues/5)

# [0.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.6.0...v0.7.0) (2021-08-23)

### Bug Fixes

- support using script-setup alongside script ([39517ad](https://github.com/qmhc/vite-plugin-dts/commit/39517ad7119a4b97be7a2d874b43cb73cfa95f07)), closes [#21](https://github.com/qmhc/vite-plugin-dts/issues/21)

### Features

- add noEmitOnError and logDiagnostics options ([8a840fe](https://github.com/qmhc/vite-plugin-dts/commit/8a840fe2692e07e8e881c58ca8f6887d08493cc9))

# [0.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.3...v0.6.0) (2021-08-14)

### Bug Fixes

- resolve alias when using default import ([3121d5b](https://github.com/qmhc/vite-plugin-dts/commit/3121d5bd56a6863e5175c95b00d7a3dedc0cff6d)), closes [#20](https://github.com/qmhc/vite-plugin-dts/issues/20)

### Features

- add copyDtsFiles option ([bdab8c4](https://github.com/qmhc/vite-plugin-dts/commit/bdab8c4b4efa894209c2edeffbbe4d79680eafe9)), closes [#19](https://github.com/qmhc/vite-plugin-dts/issues/19)

## [0.5.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.2...v0.5.3) (2021-07-22)

### Bug Fixes

- add allowJs option dynamically ([36f8de2](https://github.com/qmhc/vite-plugin-dts/commit/36f8de28c68cd52945faeb375cd2931c6ad0468a)), closes [#17](https://github.com/qmhc/vite-plugin-dts/issues/17)
- add js and jsx files when allowJs ([0e1e6f7](https://github.com/qmhc/vite-plugin-dts/commit/0e1e6f7c09c85e169568b2c77c66d452d04a28a2))

## [0.5.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.1...v0.5.2) (2021-07-01)

### Bug Fixes

- cannot require @vue/compiler-sfc in monorepo ([fd9b5c1](https://github.com/qmhc/vite-plugin-dts/commit/fd9b5c1c018feb87e374cdf6671b7b8be14e775b)), closes [#14](https://github.com/qmhc/vite-plugin-dts/issues/14)

## [0.5.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.0...v0.5.1) (2021-06-18)

### Bug Fixes

- support insert entry from '.tsx' file ([e38b7c4](https://github.com/qmhc/vite-plugin-dts/commit/e38b7c4686a8d7405583a97078e97fbef4757da6))

# [0.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.3...v0.5.0) (2021-06-15)

### Bug Fixes

- ignore none export files ([f9c41bc](https://github.com/qmhc/vite-plugin-dts/commit/f9c41bc4e2fd498b53aa366a5f8f2a57589b6176))
- rename insertIndexEntry to insertTypesEntry ([c9d392e](https://github.com/qmhc/vite-plugin-dts/commit/c9d392ec3def98b541bb597c5ed38933b225fe5e))

### Features

- add clearPureImport option ([0357f69](https://github.com/qmhc/vite-plugin-dts/commit/0357f69485204f24d9830a4de59558a23eb66e19))
- defaults insert entry base on pkg.types ([9c71f28](https://github.com/qmhc/vite-plugin-dts/commit/9c71f28eac50d23a42d92bd79ac6d09f1be0544d))
- optional insert index type entry ([592a701](https://github.com/qmhc/vite-plugin-dts/commit/592a701d6213f955306df9de0c7f1d3243a28faa))

## [0.4.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.2...v0.4.3) (2021-06-11)

### Bug Fixes

- back off optional chaining and nullish coalescing ([8e09129](https://github.com/qmhc/vite-plugin-dts/commit/8e09129c1600a013a2c3c50983ab7f358216757f)), closes [#2](https://github.com/qmhc/vite-plugin-dts/issues/2)
- transform fs/promise to fs-extra ([1794b0b](https://github.com/qmhc/vite-plugin-dts/commit/1794b0b93baf4212b4efc5ef06a697adf70e4933)), closes [#4](https://github.com/qmhc/vite-plugin-dts/issues/4)

### Performance Improvements

- use menory result generate bundle ([858bf31](https://github.com/qmhc/vite-plugin-dts/commit/858bf317d16c995feb73e53339d61f7602e36484))

## [0.4.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.1...v0.4.2) (2021-06-09)

### Bug Fixes

- incomplete remove pure import ([a1fd54e](https://github.com/qmhc/vite-plugin-dts/commit/a1fd54e769f1b50ee5858d33879b2a6732625797))
- mamual set include and exclude ([b6fb510](https://github.com/qmhc/vite-plugin-dts/commit/b6fb5106206df9de83276687dd1451fa3d882067))
- more accurate normalize glob ([1d65c47](https://github.com/qmhc/vite-plugin-dts/commit/1d65c47811344a6b566a8dcf22cd22d9298d5a02))
- set rootDir if not set in compilerOptions ([a1d83d2](https://github.com/qmhc/vite-plugin-dts/commit/a1d83d2aa56a32ebef11b9d98fa508a6d9fbd412)), closes [#3](https://github.com/qmhc/vite-plugin-dts/issues/3)
- transform alias include dynamic imports ([a6919b4](https://github.com/qmhc/vite-plugin-dts/commit/a6919b4760cf5cbefbdad1ac674b8a8275dc27dd))
- transform alias include dynamic imports ([3a5511e](https://github.com/qmhc/vite-plugin-dts/commit/3a5511e3e0b961d7f4ac393da623502a186a0538))

## [0.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.0...v0.4.1) (2021-06-08)

### Bug Fixes

- dynamic import regexp endings include ']' and ')' ([e5f37a6](https://github.com/qmhc/vite-plugin-dts/commit/e5f37a6d9e232e268ea1b2ec2eadb6c7bc7d7115))

# [0.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.5...v0.4.0) (2021-06-08)

### Bug Fixes

- bundle only once for multiple formats ([be37fbf](https://github.com/qmhc/vite-plugin-dts/commit/be37fbfcbd03dd23c73908a2d7f2d019437e003a))

### Features

- bundle all from tsconfig include ([252554a](https://github.com/qmhc/vite-plugin-dts/commit/252554af1fa403af1ee00dba16a1c7938e7374c6))

### BREAKING CHANGES

- Deprecated include and exclude options

## [0.3.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.4...v0.3.5) (2021-06-08)

### Bug Fixes

- includes prue type export files ([1341359](https://github.com/qmhc/vite-plugin-dts/commit/1341359b9943fd961ec0d3d40d71252e77c73390))
- incorrect path in transform alias ([d686ff9](https://github.com/qmhc/vite-plugin-dts/commit/d686ff94157c400d7f235331a47fbb9d452afeb9))

## [0.3.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.3...v0.3.4) (2021-06-07)

### Bug Fixes

- remove pure import ([fe241de](https://github.com/qmhc/vite-plugin-dts/commit/fe241de5b583cb5bf2dde83383a8a43e53724ce1))
- static import include relative path ([4065217](https://github.com/qmhc/vite-plugin-dts/commit/40652178b9071509269e6b66cbbbcb3562cf349d))

## [0.3.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.2...v0.3.3) (2021-06-07)

### Bug Fixes

- keep output relative to root not to entry dir ([e83ec64](https://github.com/qmhc/vite-plugin-dts/commit/e83ec643536f888166055a5495db3e2fd1030584))

### BREAKING CHANGES

- Ouput declaration structure no longer relative to entry dir

## [0.3.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.1...v0.3.2) (2021-06-07)

### Bug Fixes

- default root base on vite config ([787ebc1](https://github.com/qmhc/vite-plugin-dts/commit/787ebc175d07370628589a6fc73e325b29655a0b))

## [0.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.0...v0.3.1) (2021-06-06)

### Bug Fixes

- vue file explicit type lost ([d0d8803](https://github.com/qmhc/vite-plugin-dts/commit/d0d88038fb51d71dfb71ab4d0223600801d50349))

# [0.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.2.0...v0.3.0) (2021-06-06)

### Bug Fixes

- transform alias import to relative path ([6d5a2d5](https://github.com/qmhc/vite-plugin-dts/commit/6d5a2d5b5ba691b5572727cbf42b340d05964951))

### Features

- projectOptions refine to compilerOptions and tsConfigFilePath ([eb61113](https://github.com/qmhc/vite-plugin-dts/commit/eb611135446fff7bc82e3bd0d1d2b856a829de98))

### BREAKING CHANGES

- projectOptions no longer supported, the project init should be up to the plugin.

# [0.2.0](https://github.com/qmhc/vite-plugin-dts/compare/b2f0c0aa6eea5b48703248eca3294c5d845404ba...v0.2.0) (2021-06-05)

### Features

- add beforeWriteFile hook ([139e818](https://github.com/qmhc/vite-plugin-dts/commit/139e818cecfa80d4208b3f5ced55e7db57bf7e52))
- add outputDir option ([f289723](https://github.com/qmhc/vite-plugin-dts/commit/f289723672279795c0b96aaac3abf83dd8913b20))
- add transform dynamic import to static ([b2f0c0a](https://github.com/qmhc/vite-plugin-dts/commit/b2f0c0aa6eea5b48703248eca3294c5d845404ba))

# [3.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.1.1...v3.2.0) (2023-07-08)

### Bug Fixes

- ensure paths are absolute when process public root ([3628877](https://github.com/qmhc/vite-plugin-dts/commit/3628877f447e6383365024dc43dacfa963f41036)), closes [#238](https://github.com/qmhc/vite-plugin-dts/issues/238)
- normalize paths of resolver transform returns ([3b5a945](https://github.com/qmhc/vite-plugin-dts/commit/3b5a94524a9a00de94ebff015934bb72ad71b192))

### Features

- create resolver for json files ([#237](https://github.com/qmhc/vite-plugin-dts/issues/237)) ([53c58c8](https://github.com/qmhc/vite-plugin-dts/commit/53c58c8071cb892e969cec693f6e75a11eea3fec))
- support parse paths of tsconfig.json to aliases ([#236](https://github.com/qmhc/vite-plugin-dts/issues/236)) ([68fc12a](https://github.com/qmhc/vite-plugin-dts/commit/68fc12af50683fef12f302bc95c3ce6da679ae74))

## [3.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.1.0...v3.1.1) (2023-07-07)

### Bug Fixes

- ensure aliases init when using Rollup ([22c69a4](https://github.com/qmhc/vite-plugin-dts/commit/22c69a4df9cffd0444a64de09221e1ec30d7f8c2))

# [3.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.3...v3.1.0) (2023-07-05)

### Features

- support custom resolvers to transform files ([#233](https://github.com/qmhc/vite-plugin-dts/issues/233)) ([be43a4d](https://github.com/qmhc/vite-plugin-dts/commit/be43a4dfd96ae76bb851dde675d222d51ea46e92))

## [3.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.2...v3.0.3) (2023-07-03)

### Bug Fixes

- incorrect lib path process when rollup types ([292b8b7](https://github.com/qmhc/vite-plugin-dts/commit/292b8b7be90e05d2d19febde2e57ec126aba0d33)), closes [#232](https://github.com/qmhc/vite-plugin-dts/issues/232)

## [3.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.1...v3.0.2) (2023-06-30)

### Bug Fixes

- error if exists same lib when transfrom dynamic imports ([c187278](https://github.com/qmhc/vite-plugin-dts/commit/c187278044972ecab077abada4a761398c74223c))

## [3.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0...v3.0.1) (2023-06-30)

### Bug Fixes

- correctly process default dynamic imports ([99105b0](https://github.com/qmhc/vite-plugin-dts/commit/99105b004325ade3c8ccc19c5375fa60716db300)), closes [#222](https://github.com/qmhc/vite-plugin-dts/issues/222)
- ensure collect manual dts for js source files ([5b7c5e5](https://github.com/qmhc/vite-plugin-dts/commit/5b7c5e52c71e457b904dd2f28b430dc9db267cf7)), closes [#184](https://github.com/qmhc/vite-plugin-dts/issues/184)

# [3.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.3...v3.0.0) (2023-06-30)

### Bug Fixes

- correct path process when specify entryRoot ([fc15dac](https://github.com/qmhc/vite-plugin-dts/commit/fc15dacf0561fc598e25f6de435edf97d6edfdf1)), closes [#229](https://github.com/qmhc/vite-plugin-dts/issues/229) [#230](https://github.com/qmhc/vite-plugin-dts/issues/230)
- correct time cost recording ([57eb430](https://github.com/qmhc/vite-plugin-dts/commit/57eb4309aeec4b5773bfa10c6e48a41c2fd23c69))

### Features

- add strictOutput to limit output write ([07224d1](https://github.com/qmhc/vite-plugin-dts/commit/07224d15576ee6528c9068d8a80fcbbf502018f0))

# [3.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2023-06-27)

### Bug Fixes

- incorrect entryRoot when in single inner entry ([96d32d1](https://github.com/qmhc/vite-plugin-dts/commit/96d32d127b73d48ce192424c4596fe24a2d24619))
- promise A+ specification for `isPromise` method ([#228](https://github.com/qmhc/vite-plugin-dts/issues/228)) ([3454a35](https://github.com/qmhc/vite-plugin-dts/commit/3454a356683a97752b0161a0e5be0328aa55a4f3))

# [3.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.3.0...v3.0.0-beta.2) (2023-06-27)

### Features

- transfer to use Volar, support Rollup, improve watch mode ([#226](https://github.com/qmhc/vite-plugin-dts/issues/226)) ([bb7949c](https://github.com/qmhc/vite-plugin-dts/commit/bb7949c841141b2305640d953be4dddf45ce7d1a))

### BREAKING CHANGES

- Deprecated options: `noEmitOnError`, `skipDiagnostics`
  and `libFolderPath`. Rename options: `outputDir` -> `outDir`,
  `tsConfigFilePath` -> `tsconfigPath`.

# [2.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.1.0...v2.3.0) (2023-04-17)

### Features

- compatible with svelte ([#197](https://github.com/qmhc/vite-plugin-dts/issues/197)) ([5d38517](https://github.com/qmhc/vite-plugin-dts/commit/5d38517ee16fdfc2009725b9146bfe38c49d1709))
- supports multiple extends in tsconfig.json ([#202](https://github.com/qmhc/vite-plugin-dts/issues/202)) ([9fdac66](https://github.com/qmhc/vite-plugin-dts/commit/9fdac66c0cfd827791208a31fbbefd1fad4ac2bf)), closes [#200](https://github.com/qmhc/vite-plugin-dts/issues/200)

# [2.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.2...v2.1.0) (2023-03-08)

### Features

- add bundledPackages configuration ([#186](https://github.com/qmhc/vite-plugin-dts/issues/186)) ([8997680](https://github.com/qmhc/vite-plugin-dts/commit/8997680776d8f35ae5248cc73b2d6a734e5dbc4a))

## [2.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.1...v2.0.2) (2023-02-23)

### Bug Fixes

- recursively resolve extended tsconfig path ([#181](https://github.com/qmhc/vite-plugin-dts/issues/181)) ([7ca8502](https://github.com/qmhc/vite-plugin-dts/commit/7ca85026e9a3e345c334222af5ffa823bda380a7))

## [2.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0...v2.0.1) (2023-02-23)

### Bug Fixes

- **vue:** correctly remove components for normal script ([6dbd9af](https://github.com/qmhc/vite-plugin-dts/commit/6dbd9af3bbd8175ef8a1cee4054ba38f330eef0c))
- **vue:** error when parse no argument function ([4db63b4](https://github.com/qmhc/vite-plugin-dts/commit/4db63b4b1b48686146f07e7e69dcbd4a82b33efb))

# [2.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.3...v2.0.0) (2023-02-23)

### Bug Fixes

- ensure watch all the files defined in include ([42a755c](https://github.com/qmhc/vite-plugin-dts/commit/42a755cf502cdfa8dc9dab0f600e8cc2a46eec18)), closes [#151](https://github.com/qmhc/vite-plugin-dts/issues/151)
- incorrect path resolve when copy dts source files ([434f69e](https://github.com/qmhc/vite-plugin-dts/commit/434f69e9629db5b2e74e609ffbc5f9cd436c1177)), closes [#179](https://github.com/qmhc/vite-plugin-dts/issues/179)
- **react:** unlimited init order when using with react plugin ([92b82ff](https://github.com/qmhc/vite-plugin-dts/commit/92b82ff47e0480c86c76e298feaa7cea8e06f7fa)), closes [#148](https://github.com/qmhc/vite-plugin-dts/issues/148)

### BREAKING CHANGES

- `copyDtsFiles` option now default to false.

# [2.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2023-02-21)

### Bug Fixes

- support manually create dts for source file ([2174868](https://github.com/qmhc/vite-plugin-dts/commit/2174868158766fd16a72f9f44b979d2c62d8ab07)), closes [#178](https://github.com/qmhc/vite-plugin-dts/issues/178)

### Features

- support parse types entry from exports in package.json ([f033cf8](https://github.com/qmhc/vite-plugin-dts/commit/f033cf876b51d7e11f1aa562567f3fd1f97d04f5))

# [2.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2023-02-20)

### Bug Fixes

- should re-transform when file changed in watch mode ([eafdd3c](https://github.com/qmhc/vite-plugin-dts/commit/eafdd3ce7d6757f93a378130b8e34f41e17e4004)), closes [#99](https://github.com/qmhc/vite-plugin-dts/issues/99)
- **vue:** preprocess not direct exported component ([8bd769e](https://github.com/qmhc/vite-plugin-dts/commit/8bd769e013f845a8e486d354d9f8517bd7b02e72))

### Features

- support specify log level of plugin ([2c1aeb0](https://github.com/qmhc/vite-plugin-dts/commit/2c1aeb01637aa4511f4e4c26b891b6e7ea235d50)), closes [#177](https://github.com/qmhc/vite-plugin-dts/issues/177)

# [2.0.0-beta.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2023-02-17)

### Bug Fixes

- **vue:** conversion error when using outside ts props ([25307cf](https://github.com/qmhc/vite-plugin-dts/commit/25307cf6ef89aa8501c8c35ff8ca519021adafea)), closes [#175](https://github.com/qmhc/vite-plugin-dts/issues/175)
- **vue:** remove components option before inferring ([90f8ac1](https://github.com/qmhc/vite-plugin-dts/commit/90f8ac160412de418bc7dc31c97f4ca7daa524ca))

# [2.0.0-beta.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.3...v2.0.0-beta.0) (2023-02-16)

### Bug Fixes

- override composite for root tsconfig ([df1d0f4](https://github.com/qmhc/vite-plugin-dts/commit/df1d0f42d0d9d9341d7766f5c147e7e3fa3733cf)), closes [#153](https://github.com/qmhc/vite-plugin-dts/issues/153)
- **vue:** ignore css vars when compile ([6d2369a](https://github.com/qmhc/vite-plugin-dts/commit/6d2369afe31c18b3dff45296d74b90aba86bb656)), closes [#167](https://github.com/qmhc/vite-plugin-dts/issues/167)

### Features

- **vue:** accurate types inferring for exposed and props ([#173](https://github.com/qmhc/vite-plugin-dts/issues/173)) ([c25448c](https://github.com/qmhc/vite-plugin-dts/commit/c25448c90f3b3969d51dbfa31ad5dc3ce2a9a2aa))

## [1.7.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.2...v1.7.3) (2023-02-14)

### Bug Fixes

- incorrect compilerOptions when rollup dts ([9dd8d9c](https://github.com/qmhc/vite-plugin-dts/commit/9dd8d9c41bed7f79e24ee890c1f28d867346326e)), closes [#171](https://github.com/qmhc/vite-plugin-dts/issues/171)
- normalize `mts` and `cts` declaration files extension ([410288a](https://github.com/qmhc/vite-plugin-dts/commit/410288ac65d7fb4a3065d93c6d7be9e2a8dd3f77)), closes [#169](https://github.com/qmhc/vite-plugin-dts/issues/169)

## [1.7.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.1...v1.7.2) (2023-01-31)

### Bug Fixes

- correct .d.ts extension in multiple outputs ([5c9709c](https://github.com/qmhc/vite-plugin-dts/commit/5c9709c4082ee36f2f28b4ad6e21b846aa27d5d6)), closes [#144](https://github.com/qmhc/vite-plugin-dts/issues/144)
- insertTypesEntry config supports publishConfig.types ([#164](https://github.com/qmhc/vite-plugin-dts/issues/164)) ([dae4ef9](https://github.com/qmhc/vite-plugin-dts/commit/dae4ef9de1175cf5bdc5a7dedfa60d7bab381dba))
- mark typescript as external dependency ([#160](https://github.com/qmhc/vite-plugin-dts/issues/160)) ([31e10d4](https://github.com/qmhc/vite-plugin-dts/commit/31e10d4ec2a37148ad63fdfb141264d6c4966135))

## [1.7.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.0...v1.7.1) (2022-11-14)

### Bug Fixes

- ensure exulde working when transform ([aea8ebd](https://github.com/qmhc/vite-plugin-dts/commit/aea8ebdc4eac489bc62ccebf3552421bd43d318c)), closes [#143](https://github.com/qmhc/vite-plugin-dts/issues/143) [#140](https://github.com/qmhc/vite-plugin-dts/issues/140) [#97](https://github.com/qmhc/vite-plugin-dts/issues/97)
- import vite plugin type via dynamic import ([8bd73c8](https://github.com/qmhc/vite-plugin-dts/commit/8bd73c8fae010ba0d32df8b144345b7f641a6085)), closes [#139](https://github.com/qmhc/vite-plugin-dts/issues/139)

# [1.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.6...v1.7.0) (2022-11-07)

### Bug Fixes

- compiler missing plugin `decorators-legacy` ([#138](https://github.com/qmhc/vite-plugin-dts/issues/138)) ([717af2f](https://github.com/qmhc/vite-plugin-dts/commit/717af2f4bc1b5bd549339179bc5b75dbbd9a348a))
- derprecate logDiagnostics option ([e405328](https://github.com/qmhc/vite-plugin-dts/commit/e405328f64870919a3ee4100fac087870ed4662e))
- incorrect compiler address resolution ([#133](https://github.com/qmhc/vite-plugin-dts/issues/133)) ([01cc125](https://github.com/qmhc/vite-plugin-dts/commit/01cc125ea98b1994e364487f73d71b0cb6ebcdbf))

### Features

- support customize typescript lib path ([27b83f3](https://github.com/qmhc/vite-plugin-dts/commit/27b83f3423f50307852257f3747c112f2f3cd325)), closes [#134](https://github.com/qmhc/vite-plugin-dts/issues/134)
- support multiple entries for lib mode ([1fafe54](https://github.com/qmhc/vite-plugin-dts/commit/1fafe54991431ce86a404ecb7e179ef1aa8aff0a)), closes [#136](https://github.com/qmhc/vite-plugin-dts/issues/136)

## [1.6.6](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.5...v1.6.6) (2022-10-13)

### Bug Fixes

- adapt @microsoft/api-extractor 7.33+ ([5acb4be](https://github.com/qmhc/vite-plugin-dts/commit/5acb4be4d1e4fe41e42a38ec9e92eeeb6f3a9c15))
- always ship included dts files into soure ([fc345e3](https://github.com/qmhc/vite-plugin-dts/commit/fc345e31b79fd7ca40581727d1964f80d1b9db82)), closes [#126](https://github.com/qmhc/vite-plugin-dts/issues/126)

## [1.6.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.4...v1.6.5) (2022-10-06)

### Bug Fixes

- remove pnpm limitation in preinstall to support npm@6 ([d7167b8](https://github.com/qmhc/vite-plugin-dts/commit/d7167b83381c54075e0e9114c07fe9451b6ffa2d)), closes [#123](https://github.com/qmhc/vite-plugin-dts/issues/123)

## [1.6.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.3...v1.6.4) (2022-09-30)

### Bug Fixes

- patch cjs vars for esm scope ([57e093d](https://github.com/qmhc/vite-plugin-dts/commit/57e093d734e4b81bbeeecbd694b269cca698f914)), closes [#119](https://github.com/qmhc/vite-plugin-dts/issues/119) [#122](https://github.com/qmhc/vite-plugin-dts/issues/122)

## [1.6.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.2...v1.6.3) (2022-09-30)

### Bug Fixes

- both support cjs and esm(using by tsx) ([38bd6a6](https://github.com/qmhc/vite-plugin-dts/commit/38bd6a6789fe375dd5da0aec1ea9b6816751719a))

## [1.6.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.1...v1.6.2) (2022-09-30)

### Bug Fixes

- ensure generate dts for type only files ([f3f4919](https://github.com/qmhc/vite-plugin-dts/commit/f3f4919fa441a27b7d842f1e64dd8d711bd05ec9)), closes [#118](https://github.com/qmhc/vite-plugin-dts/issues/118)

## [1.6.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.0...v1.6.1) (2022-09-28)

### Bug Fixes

- path error in cjs running ([0832af4](https://github.com/qmhc/vite-plugin-dts/commit/0832af4ab49d8166e14b6897bb1538ec6ddf3bb5))

# [1.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.5.0...v1.6.0) (2022-09-28)

### Bug Fixes

- correct compilerOptions.outDir for project init ([8699219](https://github.com/qmhc/vite-plugin-dts/commit/86992194411017e75b1d17c3f72d631267ec187b))
- type error occurred while define `defineProps` retruns as `props` ([41eb53a](https://github.com/qmhc/vite-plugin-dts/commit/41eb53a4da681d2c809dc8a7674a03284acbea02)), closes [#113](https://github.com/qmhc/vite-plugin-dts/issues/113)

### Features

- skip write file when `beforeWriteFile` return exact `false` ([9404ebc](https://github.com/qmhc/vite-plugin-dts/commit/9404ebc811b919a59a21b954d4ba4d43be255390)), closes [#110](https://github.com/qmhc/vite-plugin-dts/issues/110)

# [1.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.1...v1.5.0) (2022-09-11)

### Features

- improve aliasesExclude to support more flexible definition ([f652523](https://github.com/qmhc/vite-plugin-dts/commit/f6525235758b0d29347feb7f21a5085dc81b13a4)), closes [#93](https://github.com/qmhc/vite-plugin-dts/issues/93)

## [1.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.0...v1.4.1) (2022-08-01)

### Bug Fixes

- includes `extends` field when parse tsconfig.json ([#96](https://github.com/qmhc/vite-plugin-dts/issues/96)) ([2631de0](https://github.com/qmhc/vite-plugin-dts/commit/2631de0725e89083752fd590ff604f3f763abd3a))

# [1.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.1...v1.4.0) (2022-07-20)

### Bug Fixes

- ensure emit dts when no script sfc in vue component ([869a466](https://github.com/qmhc/vite-plugin-dts/commit/869a4662af2e690b2e1e63faf941a9e1343dd6ea)), closes [#88](https://github.com/qmhc/vite-plugin-dts/issues/88)

### Features

- support vue 2.7 ([c4e2c4b](https://github.com/qmhc/vite-plugin-dts/commit/c4e2c4b479da837ab697220284ac3c54e89c54a0)), closes [#87](https://github.com/qmhc/vite-plugin-dts/issues/87)

## [1.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.0...v1.3.1) (2022-07-18)

### Bug Fixes

- dynamiclly adjust the exports of inserted index file ([abc9431](https://github.com/qmhc/vite-plugin-dts/commit/abc943143b97dbec0935b62171b16faeebd6fbf4)), closes [#81](https://github.com/qmhc/vite-plugin-dts/issues/81) [#86](https://github.com/qmhc/vite-plugin-dts/issues/86)
- missing inserted entry when multiple outputs ([39ff8ab](https://github.com/qmhc/vite-plugin-dts/commit/39ff8abc0e1dda232c3cf1e6f25ff8daddb37acb))

# [1.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.1...v1.3.0) (2022-07-13)

### Bug Fixes

- aliasesExclude not work when includes empty value ([#85](https://github.com/qmhc/vite-plugin-dts/issues/85)) ([8b9b9aa](https://github.com/qmhc/vite-plugin-dts/commit/8b9b9aa4e9d1c4fa84a2945f4f2421c9269240ff))
- correct type files generate when root is set ([#68](https://github.com/qmhc/vite-plugin-dts/issues/68)) ([0b491bd](https://github.com/qmhc/vite-plugin-dts/commit/0b491bd3720c5b6065dd00a00f9b95e39bf6c8fe))

### Features

- support multiple output dirs ([cd19ee7](https://github.com/qmhc/vite-plugin-dts/commit/cd19ee7f4cf25906a3ffcd89a6c93baf7c7266ed))

## [1.2.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.0...v1.2.1) (2022-07-05)

### Bug Fixes

- add parser plugins param for vue compiler ([7d6bd16](https://github.com/qmhc/vite-plugin-dts/commit/7d6bd16af88701152bf8847e160acf6169bd0918)), closes [#78](https://github.com/qmhc/vite-plugin-dts/issues/78)
- insert entry fail when no default export in source entry ([#82](https://github.com/qmhc/vite-plugin-dts/issues/82)) ([1a4b161](https://github.com/qmhc/vite-plugin-dts/commit/1a4b161647ba1826c3bfa7c9ca5ee7ca4c3ee4bf))

# [1.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.1...v1.2.0) (2022-05-24)

### Bug Fixes

- support read typings form package.json ([6b1bb29](https://github.com/qmhc/vite-plugin-dts/commit/6b1bb2951512733091b950f5767bfe5a1cbe8992))

### Features

- add `aliasesExclude` option ([#75](https://github.com/qmhc/vite-plugin-dts/issues/75)) ([7588ba4](https://github.com/qmhc/vite-plugin-dts/commit/7588ba4755c19e25ca2482b95cb99a59621e693e)), closes [#73](https://github.com/qmhc/vite-plugin-dts/issues/73)
- support override compilerOptions when rollup up ([995612d](https://github.com/qmhc/vite-plugin-dts/commit/995612d5eafa6b610a9ab8826ee7b8691c673b4e)), closes [#74](https://github.com/qmhc/vite-plugin-dts/issues/74)

## [1.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.0...v1.1.1) (2022-04-25)

### Bug Fixes

- incorrect rollup entry path ([a9309d8](https://github.com/qmhc/vite-plugin-dts/commit/a9309d8ca8c0531d1579d3a541cd67ac0a37ce1b))

# [1.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.5...v1.1.0) (2022-04-18)

### Bug Fixes

- lose the type of entry export default ([50f55de](https://github.com/qmhc/vite-plugin-dts/commit/50f55de3ec89d7995056c428a37d16e0cd2a6a4a))

### Features

- support rollup dts files after output ([1d87b44](https://github.com/qmhc/vite-plugin-dts/commit/1d87b44dff3c54a5b1b983b060d3d0d4972c1d94))

## [1.0.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.4...v1.0.5) (2022-04-02)

### Bug Fixes

- entryRoot option not work ([#66](https://github.com/qmhc/vite-plugin-dts/issues/66)) ([bca6423](https://github.com/qmhc/vite-plugin-dts/commit/bca64236076a28dbdd7e6e373c46f3af3723b4e1))

## [1.0.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.3...v1.0.4) (2022-03-28)

### Bug Fixes

- transfer 'debug' to dependencies ([7af9232](https://github.com/qmhc/vite-plugin-dts/commit/7af9232e381f6d572a543706d640c6ecdb5a6c00))

## [1.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.2...v1.0.3) (2022-03-25)

### Bug Fixes

- **example:** cannot resolve types through symlinks ([0914a6a](https://github.com/qmhc/vite-plugin-dts/commit/0914a6ad8dde3514f94e586798d6d73a9c2ac165)), closes [#63](https://github.com/qmhc/vite-plugin-dts/issues/63)

## [1.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.1...v1.0.2) (2022-03-24)

### Bug Fixes

- incorrect entryRoot calculation in linux an mac ([0136990](https://github.com/qmhc/vite-plugin-dts/commit/01369903f484eb74ae6fa23b49537fa64d610706)), closes [#62](https://github.com/qmhc/vite-plugin-dts/issues/62)

## [1.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0...v1.0.1) (2022-03-22)

### Bug Fixes

- missing some libs defind in dependencies ([ab7960f](https://github.com/qmhc/vite-plugin-dts/commit/ab7960f0d957aad6945ef469274bca3e142baa87))

# [1.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.10...v1.0.0) (2022-03-22)

### Features

- support entryRoot option ([c939e35](https://github.com/qmhc/vite-plugin-dts/commit/c939e358dfecacaf2dfd2b0d42118c16462c260a)), closes [#59](https://github.com/qmhc/vite-plugin-dts/issues/59)

### BREAKING CHANGES

- The calculating output paths funtion of root option is
  assigned to entryRoot option, and currently will auto calculating the
  smallest public path as the default value for entryRoot option.

## [0.9.10](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.9...v0.9.10) (2022-03-12)

### Bug Fixes

- make default include same as tsconfig.json ([5ca7fc5](https://github.com/qmhc/vite-plugin-dts/commit/5ca7fc51ab321d4b25ce9856c0e52894c1264d44)), closes [#58](https://github.com/qmhc/vite-plugin-dts/issues/58)

## [0.9.9](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.8...v0.9.9) (2022-01-11)

### Bug Fixes

- should filter vite virtual files ([5fb24ba](https://github.com/qmhc/vite-plugin-dts/commit/5fb24ba2c40ad2ef81e45c33533aada3bb5aefd3)), closes [#50](https://github.com/qmhc/vite-plugin-dts/issues/50)

## [0.9.8](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.7...v0.9.8) (2022-01-10)

### Bug Fixes

- put `copyDtsFiles` option in use ([#53](https://github.com/qmhc/vite-plugin-dts/issues/53)) ([261700f](https://github.com/qmhc/vite-plugin-dts/commit/261700f80a60b3bc1f22f391e00d9999205fe0d2)), closes [#52](https://github.com/qmhc/vite-plugin-dts/issues/52)

## [0.9.7](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.6...v0.9.7) (2021-12-30)

### Bug Fixes

- inserted entry not through beforeWriteFile ([e16b9b1](https://github.com/qmhc/vite-plugin-dts/commit/e16b9b15c66df887bac0ca0b6be05e4d1f8628ed)), closes [#48](https://github.com/qmhc/vite-plugin-dts/issues/48)

## [0.9.6](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.5...v0.9.6) (2021-11-23)

### Bug Fixes

- aliases are not resolved when find ends with '/' ([f04aab2](https://github.com/qmhc/vite-plugin-dts/commit/f04aab21f9f6dc02316a9ff3a9cd43e90cd97828)), closes [#37](https://github.com/qmhc/vite-plugin-dts/issues/37)
- not equally transform dts source files ([ede5146](https://github.com/qmhc/vite-plugin-dts/commit/ede514649282aec786549d490e8127824913914c))

## [0.9.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.4...v0.9.5) (2021-11-21)

### Bug Fixes

- ensure dts source files through beforeWriteFile hook ([3265412](https://github.com/qmhc/vite-plugin-dts/commit/3265412e26dd8736fefab0cf99e920d01bb246c5)), closes [#43](https://github.com/qmhc/vite-plugin-dts/issues/43)

## [0.9.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.3...v0.9.4) (2021-11-10)

### Bug Fixes

- cannot resolve types defined in dts files ([666ca09](https://github.com/qmhc/vite-plugin-dts/commit/666ca0925075bed6926f648a210f37d56af9577b)), closes [#42](https://github.com/qmhc/vite-plugin-dts/issues/42)
- take unused error when using setup-script ([c4145b7](https://github.com/qmhc/vite-plugin-dts/commit/c4145b7352359c79b8ba7c01a1c4afeace4dbc7c))

## [0.9.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.2...v0.9.3) (2021-11-03)

### Bug Fixes

- support require for cjs exports ([cc5aff9](https://github.com/qmhc/vite-plugin-dts/commit/cc5aff9b9906fc87f6012fb66566fd1937a9381e)), closes [#39](https://github.com/qmhc/vite-plugin-dts/issues/39)

## [0.9.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.1...v0.9.2) (2021-10-20)

### Bug Fixes

- support optional @vue/compiler-sfc ([34e1958](https://github.com/qmhc/vite-plugin-dts/commit/34e19587aa64c802cfbd99c5c8018bde8d0e1e2f))

## [0.9.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.3...v0.9.1) (2021-10-18)

### Bug Fixes

- watch mode not update ts/js files ([32a5699](https://github.com/qmhc/vite-plugin-dts/commit/32a5699a9b4f5a24b2a2a870ced43850a0573f82))

### Features

- add afterBuild hook option ([#34](https://github.com/qmhc/vite-plugin-dts/issues/34)) ([e836689](https://github.com/qmhc/vite-plugin-dts/commit/e83668988dab189d185ed9637032f7f80ba1e4db))
- afterDiagnostic and afterBuild support async ([c92d548](https://github.com/qmhc/vite-plugin-dts/commit/c92d54826b81f50fbb38fa909df730b323b75b24))
- skip dependencies by default ([8ca3ed3](https://github.com/qmhc/vite-plugin-dts/commit/8ca3ed30dfcc23c2dd9822fe6ef460a6c832dfe2))

## [0.8.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.2...v0.8.3) (2021-10-11)

### Bug Fixes

- support tsconfig.json using comments ([6e6e446](https://github.com/qmhc/vite-plugin-dts/commit/6e6e44683592060ebd27d1c5712058f2f0f0aeb6)), closes [#31](https://github.com/qmhc/vite-plugin-dts/issues/31)

## [0.8.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.1...v0.8.2) (2021-09-30)

### Bug Fixes

- create correct source for tsx/jsx script ([#29](https://github.com/qmhc/vite-plugin-dts/issues/29)) ([109721e](https://github.com/qmhc/vite-plugin-dts/commit/109721e89007cd702fe73fded44cc6b7efeef46e))

## [0.8.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.0...v0.8.1) (2021-09-22)

### Bug Fixes

- declarationDir make no file generated ([3313a19](https://github.com/qmhc/vite-plugin-dts/commit/3313a19da669bda7fa8fff3a5211652bc22e7413)), closes [#27](https://github.com/qmhc/vite-plugin-dts/issues/27)
- rewrite noEmit option when init porject ([735d26b](https://github.com/qmhc/vite-plugin-dts/commit/735d26b3cad9a90dd272a08448d238045306a1ba)), closes [#28](https://github.com/qmhc/vite-plugin-dts/issues/28)

# [0.8.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.7.0...v0.8.0) (2021-09-13)

### Bug Fixes

- adapt vue@3.2.6+ setup script ([1b62755](https://github.com/qmhc/vite-plugin-dts/commit/1b62755947972a67a034830cc7478fa1a65924c4))
- ouput files out of include bounds ([e1cdedf](https://github.com/qmhc/vite-plugin-dts/commit/e1cdedfc8b41a311d2c22674bd132f23242482ac)), closes [#24](https://github.com/qmhc/vite-plugin-dts/issues/24)

### Features

- add afterDiagnostic option ([7d43ece](https://github.com/qmhc/vite-plugin-dts/commit/7d43ece8fcb9b71d645982a45b01cd9136c525d8)), closes [#22](https://github.com/qmhc/vite-plugin-dts/issues/22)
- support build watch mode ([a920d97](https://github.com/qmhc/vite-plugin-dts/commit/a920d97825dced453f5f70d8776944c02b50e14b)), closes [#5](https://github.com/qmhc/vite-plugin-dts/issues/5)

# [0.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.6.0...v0.7.0) (2021-08-23)

### Bug Fixes

- support using script-setup alongside script ([39517ad](https://github.com/qmhc/vite-plugin-dts/commit/39517ad7119a4b97be7a2d874b43cb73cfa95f07)), closes [#21](https://github.com/qmhc/vite-plugin-dts/issues/21)

### Features

- add noEmitOnError and logDiagnostics options ([8a840fe](https://github.com/qmhc/vite-plugin-dts/commit/8a840fe2692e07e8e881c58ca8f6887d08493cc9))

# [0.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.3...v0.6.0) (2021-08-14)

### Bug Fixes

- resolve alias when using default import ([3121d5b](https://github.com/qmhc/vite-plugin-dts/commit/3121d5bd56a6863e5175c95b00d7a3dedc0cff6d)), closes [#20](https://github.com/qmhc/vite-plugin-dts/issues/20)

### Features

- add copyDtsFiles option ([bdab8c4](https://github.com/qmhc/vite-plugin-dts/commit/bdab8c4b4efa894209c2edeffbbe4d79680eafe9)), closes [#19](https://github.com/qmhc/vite-plugin-dts/issues/19)

## [0.5.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.2...v0.5.3) (2021-07-22)

### Bug Fixes

- add allowJs option dynamically ([36f8de2](https://github.com/qmhc/vite-plugin-dts/commit/36f8de28c68cd52945faeb375cd2931c6ad0468a)), closes [#17](https://github.com/qmhc/vite-plugin-dts/issues/17)
- add js and jsx files when allowJs ([0e1e6f7](https://github.com/qmhc/vite-plugin-dts/commit/0e1e6f7c09c85e169568b2c77c66d452d04a28a2))

## [0.5.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.1...v0.5.2) (2021-07-01)

### Bug Fixes

- cannot require @vue/compiler-sfc in monorepo ([fd9b5c1](https://github.com/qmhc/vite-plugin-dts/commit/fd9b5c1c018feb87e374cdf6671b7b8be14e775b)), closes [#14](https://github.com/qmhc/vite-plugin-dts/issues/14)

## [0.5.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.0...v0.5.1) (2021-06-18)

### Bug Fixes

- support insert entry from '.tsx' file ([e38b7c4](https://github.com/qmhc/vite-plugin-dts/commit/e38b7c4686a8d7405583a97078e97fbef4757da6))

# [0.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.3...v0.5.0) (2021-06-15)

### Bug Fixes

- ignore none export files ([f9c41bc](https://github.com/qmhc/vite-plugin-dts/commit/f9c41bc4e2fd498b53aa366a5f8f2a57589b6176))
- rename insertIndexEntry to insertTypesEntry ([c9d392e](https://github.com/qmhc/vite-plugin-dts/commit/c9d392ec3def98b541bb597c5ed38933b225fe5e))

### Features

- add clearPureImport option ([0357f69](https://github.com/qmhc/vite-plugin-dts/commit/0357f69485204f24d9830a4de59558a23eb66e19))
- defaults insert entry base on pkg.types ([9c71f28](https://github.com/qmhc/vite-plugin-dts/commit/9c71f28eac50d23a42d92bd79ac6d09f1be0544d))
- optional insert index type entry ([592a701](https://github.com/qmhc/vite-plugin-dts/commit/592a701d6213f955306df9de0c7f1d3243a28faa))

## [0.4.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.2...v0.4.3) (2021-06-11)

### Bug Fixes

- back off optional chaining and nullish coalescing ([8e09129](https://github.com/qmhc/vite-plugin-dts/commit/8e09129c1600a013a2c3c50983ab7f358216757f)), closes [#2](https://github.com/qmhc/vite-plugin-dts/issues/2)
- transform fs/promise to fs-extra ([1794b0b](https://github.com/qmhc/vite-plugin-dts/commit/1794b0b93baf4212b4efc5ef06a697adf70e4933)), closes [#4](https://github.com/qmhc/vite-plugin-dts/issues/4)

### Performance Improvements

- use menory result generate bundle ([858bf31](https://github.com/qmhc/vite-plugin-dts/commit/858bf317d16c995feb73e53339d61f7602e36484))

## [0.4.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.1...v0.4.2) (2021-06-09)

### Bug Fixes

- incomplete remove pure import ([a1fd54e](https://github.com/qmhc/vite-plugin-dts/commit/a1fd54e769f1b50ee5858d33879b2a6732625797))
- mamual set include and exclude ([b6fb510](https://github.com/qmhc/vite-plugin-dts/commit/b6fb5106206df9de83276687dd1451fa3d882067))
- more accurate normalize glob ([1d65c47](https://github.com/qmhc/vite-plugin-dts/commit/1d65c47811344a6b566a8dcf22cd22d9298d5a02))
- set rootDir if not set in compilerOptions ([a1d83d2](https://github.com/qmhc/vite-plugin-dts/commit/a1d83d2aa56a32ebef11b9d98fa508a6d9fbd412)), closes [#3](https://github.com/qmhc/vite-plugin-dts/issues/3)
- transform alias include dynamic imports ([a6919b4](https://github.com/qmhc/vite-plugin-dts/commit/a6919b4760cf5cbefbdad1ac674b8a8275dc27dd))
- transform alias include dynamic imports ([3a5511e](https://github.com/qmhc/vite-plugin-dts/commit/3a5511e3e0b961d7f4ac393da623502a186a0538))

## [0.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.0...v0.4.1) (2021-06-08)

### Bug Fixes

- dynamic import regexp endings include ']' and ')' ([e5f37a6](https://github.com/qmhc/vite-plugin-dts/commit/e5f37a6d9e232e268ea1b2ec2eadb6c7bc7d7115))

# [0.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.5...v0.4.0) (2021-06-08)

### Bug Fixes

- bundle only once for multiple formats ([be37fbf](https://github.com/qmhc/vite-plugin-dts/commit/be37fbfcbd03dd23c73908a2d7f2d019437e003a))

### Features

- bundle all from tsconfig include ([252554a](https://github.com/qmhc/vite-plugin-dts/commit/252554af1fa403af1ee00dba16a1c7938e7374c6))

### BREAKING CHANGES

- Deprecated include and exclude options

## [0.3.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.4...v0.3.5) (2021-06-08)

### Bug Fixes

- includes prue type export files ([1341359](https://github.com/qmhc/vite-plugin-dts/commit/1341359b9943fd961ec0d3d40d71252e77c73390))
- incorrect path in transform alias ([d686ff9](https://github.com/qmhc/vite-plugin-dts/commit/d686ff94157c400d7f235331a47fbb9d452afeb9))

## [0.3.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.3...v0.3.4) (2021-06-07)

### Bug Fixes

- remove pure import ([fe241de](https://github.com/qmhc/vite-plugin-dts/commit/fe241de5b583cb5bf2dde83383a8a43e53724ce1))
- static import include relative path ([4065217](https://github.com/qmhc/vite-plugin-dts/commit/40652178b9071509269e6b66cbbbcb3562cf349d))

## [0.3.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.2...v0.3.3) (2021-06-07)

### Bug Fixes

- keep output relative to root not to entry dir ([e83ec64](https://github.com/qmhc/vite-plugin-dts/commit/e83ec643536f888166055a5495db3e2fd1030584))

### BREAKING CHANGES

- Ouput declaration structure no longer relative to entry dir

## [0.3.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.1...v0.3.2) (2021-06-07)

### Bug Fixes

- default root base on vite config ([787ebc1](https://github.com/qmhc/vite-plugin-dts/commit/787ebc175d07370628589a6fc73e325b29655a0b))

## [0.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.0...v0.3.1) (2021-06-06)

### Bug Fixes

- vue file explicit type lost ([d0d8803](https://github.com/qmhc/vite-plugin-dts/commit/d0d88038fb51d71dfb71ab4d0223600801d50349))

# [0.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.2.0...v0.3.0) (2021-06-06)

### Bug Fixes

- transform alias import to relative path ([6d5a2d5](https://github.com/qmhc/vite-plugin-dts/commit/6d5a2d5b5ba691b5572727cbf42b340d05964951))

### Features

- projectOptions refine to compilerOptions and tsConfigFilePath ([eb61113](https://github.com/qmhc/vite-plugin-dts/commit/eb611135446fff7bc82e3bd0d1d2b856a829de98))

### BREAKING CHANGES

- projectOptions no longer supported, the project init should be up to the plugin.

# [0.2.0](https://github.com/qmhc/vite-plugin-dts/compare/b2f0c0aa6eea5b48703248eca3294c5d845404ba...v0.2.0) (2021-06-05)

### Features

- add beforeWriteFile hook ([139e818](https://github.com/qmhc/vite-plugin-dts/commit/139e818cecfa80d4208b3f5ced55e7db57bf7e52))
- add outputDir option ([f289723](https://github.com/qmhc/vite-plugin-dts/commit/f289723672279795c0b96aaac3abf83dd8913b20))
- add transform dynamic import to static ([b2f0c0a](https://github.com/qmhc/vite-plugin-dts/commit/b2f0c0aa6eea5b48703248eca3294c5d845404ba))

## [3.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.1.0...v3.1.1) (2023-07-07)

### Bug Fixes

- ensure aliases init when using Rollup ([22c69a4](https://github.com/qmhc/vite-plugin-dts/commit/22c69a4df9cffd0444a64de09221e1ec30d7f8c2))

# [3.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.3...v3.1.0) (2023-07-05)

### Features

- support custom resolvers to transform files ([#233](https://github.com/qmhc/vite-plugin-dts/issues/233)) ([be43a4d](https://github.com/qmhc/vite-plugin-dts/commit/be43a4dfd96ae76bb851dde675d222d51ea46e92))

## [3.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.2...v3.0.3) (2023-07-03)

### Bug Fixes

- incorrect lib path process when rollup types ([292b8b7](https://github.com/qmhc/vite-plugin-dts/commit/292b8b7be90e05d2d19febde2e57ec126aba0d33)), closes [#232](https://github.com/qmhc/vite-plugin-dts/issues/232)

## [3.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.1...v3.0.2) (2023-06-30)

### Bug Fixes

- error if exists same lib when transfrom dynamic imports ([c187278](https://github.com/qmhc/vite-plugin-dts/commit/c187278044972ecab077abada4a761398c74223c))

## [3.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0...v3.0.1) (2023-06-30)

### Bug Fixes

- correctly process default dynamic imports ([99105b0](https://github.com/qmhc/vite-plugin-dts/commit/99105b004325ade3c8ccc19c5375fa60716db300)), closes [#222](https://github.com/qmhc/vite-plugin-dts/issues/222)
- ensure collect manual dts for js source files ([5b7c5e5](https://github.com/qmhc/vite-plugin-dts/commit/5b7c5e52c71e457b904dd2f28b430dc9db267cf7)), closes [#184](https://github.com/qmhc/vite-plugin-dts/issues/184)

# [3.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.3...v3.0.0) (2023-06-30)

### Bug Fixes

- correct path process when specify entryRoot ([fc15dac](https://github.com/qmhc/vite-plugin-dts/commit/fc15dacf0561fc598e25f6de435edf97d6edfdf1)), closes [#229](https://github.com/qmhc/vite-plugin-dts/issues/229) [#230](https://github.com/qmhc/vite-plugin-dts/issues/230)
- correct time cost recording ([57eb430](https://github.com/qmhc/vite-plugin-dts/commit/57eb4309aeec4b5773bfa10c6e48a41c2fd23c69))

### Features

- add strictOutput to limit output write ([07224d1](https://github.com/qmhc/vite-plugin-dts/commit/07224d15576ee6528c9068d8a80fcbbf502018f0))

# [3.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2023-06-27)

### Bug Fixes

- incorrect entryRoot when in single inner entry ([96d32d1](https://github.com/qmhc/vite-plugin-dts/commit/96d32d127b73d48ce192424c4596fe24a2d24619))
- promise A+ specification for `isPromise` method ([#228](https://github.com/qmhc/vite-plugin-dts/issues/228)) ([3454a35](https://github.com/qmhc/vite-plugin-dts/commit/3454a356683a97752b0161a0e5be0328aa55a4f3))

# [3.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.3.0...v3.0.0-beta.2) (2023-06-27)

### Features

- transfer to use Volar, support Rollup, improve watch mode ([#226](https://github.com/qmhc/vite-plugin-dts/issues/226)) ([bb7949c](https://github.com/qmhc/vite-plugin-dts/commit/bb7949c841141b2305640d953be4dddf45ce7d1a))

### BREAKING CHANGES

- Deprecated options: `noEmitOnError`, `skipDiagnostics`
  and `libFolderPath`. Rename options: `outputDir` -> `outDir`,
  `tsConfigFilePath` -> `tsconfigPath`.

# [2.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.1.0...v2.3.0) (2023-04-17)

### Features

- compatible with svelte ([#197](https://github.com/qmhc/vite-plugin-dts/issues/197)) ([5d38517](https://github.com/qmhc/vite-plugin-dts/commit/5d38517ee16fdfc2009725b9146bfe38c49d1709))
- supports multiple extends in tsconfig.json ([#202](https://github.com/qmhc/vite-plugin-dts/issues/202)) ([9fdac66](https://github.com/qmhc/vite-plugin-dts/commit/9fdac66c0cfd827791208a31fbbefd1fad4ac2bf)), closes [#200](https://github.com/qmhc/vite-plugin-dts/issues/200)

# [2.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.2...v2.1.0) (2023-03-08)

### Features

- add bundledPackages configuration ([#186](https://github.com/qmhc/vite-plugin-dts/issues/186)) ([8997680](https://github.com/qmhc/vite-plugin-dts/commit/8997680776d8f35ae5248cc73b2d6a734e5dbc4a))

## [2.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.1...v2.0.2) (2023-02-23)

### Bug Fixes

- recursively resolve extended tsconfig path ([#181](https://github.com/qmhc/vite-plugin-dts/issues/181)) ([7ca8502](https://github.com/qmhc/vite-plugin-dts/commit/7ca85026e9a3e345c334222af5ffa823bda380a7))

## [2.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0...v2.0.1) (2023-02-23)

### Bug Fixes

- **vue:** correctly remove components for normal script ([6dbd9af](https://github.com/qmhc/vite-plugin-dts/commit/6dbd9af3bbd8175ef8a1cee4054ba38f330eef0c))
- **vue:** error when parse no argument function ([4db63b4](https://github.com/qmhc/vite-plugin-dts/commit/4db63b4b1b48686146f07e7e69dcbd4a82b33efb))

# [2.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.3...v2.0.0) (2023-02-23)

### Bug Fixes

- ensure watch all the files defined in include ([42a755c](https://github.com/qmhc/vite-plugin-dts/commit/42a755cf502cdfa8dc9dab0f600e8cc2a46eec18)), closes [#151](https://github.com/qmhc/vite-plugin-dts/issues/151)
- incorrect path resolve when copy dts source files ([434f69e](https://github.com/qmhc/vite-plugin-dts/commit/434f69e9629db5b2e74e609ffbc5f9cd436c1177)), closes [#179](https://github.com/qmhc/vite-plugin-dts/issues/179)
- **react:** unlimited init order when using with react plugin ([92b82ff](https://github.com/qmhc/vite-plugin-dts/commit/92b82ff47e0480c86c76e298feaa7cea8e06f7fa)), closes [#148](https://github.com/qmhc/vite-plugin-dts/issues/148)

### BREAKING CHANGES

- `copyDtsFiles` option now default to false.

# [2.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2023-02-21)

### Bug Fixes

- support manually create dts for source file ([2174868](https://github.com/qmhc/vite-plugin-dts/commit/2174868158766fd16a72f9f44b979d2c62d8ab07)), closes [#178](https://github.com/qmhc/vite-plugin-dts/issues/178)

### Features

- support parse types entry from exports in package.json ([f033cf8](https://github.com/qmhc/vite-plugin-dts/commit/f033cf876b51d7e11f1aa562567f3fd1f97d04f5))

# [2.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2023-02-20)

### Bug Fixes

- should re-transform when file changed in watch mode ([eafdd3c](https://github.com/qmhc/vite-plugin-dts/commit/eafdd3ce7d6757f93a378130b8e34f41e17e4004)), closes [#99](https://github.com/qmhc/vite-plugin-dts/issues/99)
- **vue:** preprocess not direct exported component ([8bd769e](https://github.com/qmhc/vite-plugin-dts/commit/8bd769e013f845a8e486d354d9f8517bd7b02e72))

### Features

- support specify log level of plugin ([2c1aeb0](https://github.com/qmhc/vite-plugin-dts/commit/2c1aeb01637aa4511f4e4c26b891b6e7ea235d50)), closes [#177](https://github.com/qmhc/vite-plugin-dts/issues/177)

# [2.0.0-beta.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2023-02-17)

### Bug Fixes

- **vue:** conversion error when using outside ts props ([25307cf](https://github.com/qmhc/vite-plugin-dts/commit/25307cf6ef89aa8501c8c35ff8ca519021adafea)), closes [#175](https://github.com/qmhc/vite-plugin-dts/issues/175)
- **vue:** remove components option before inferring ([90f8ac1](https://github.com/qmhc/vite-plugin-dts/commit/90f8ac160412de418bc7dc31c97f4ca7daa524ca))

# [2.0.0-beta.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.3...v2.0.0-beta.0) (2023-02-16)

### Bug Fixes

- override composite for root tsconfig ([df1d0f4](https://github.com/qmhc/vite-plugin-dts/commit/df1d0f42d0d9d9341d7766f5c147e7e3fa3733cf)), closes [#153](https://github.com/qmhc/vite-plugin-dts/issues/153)
- **vue:** ignore css vars when compile ([6d2369a](https://github.com/qmhc/vite-plugin-dts/commit/6d2369afe31c18b3dff45296d74b90aba86bb656)), closes [#167](https://github.com/qmhc/vite-plugin-dts/issues/167)

### Features

- **vue:** accurate types inferring for exposed and props ([#173](https://github.com/qmhc/vite-plugin-dts/issues/173)) ([c25448c](https://github.com/qmhc/vite-plugin-dts/commit/c25448c90f3b3969d51dbfa31ad5dc3ce2a9a2aa))

## [1.7.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.2...v1.7.3) (2023-02-14)

### Bug Fixes

- incorrect compilerOptions when rollup dts ([9dd8d9c](https://github.com/qmhc/vite-plugin-dts/commit/9dd8d9c41bed7f79e24ee890c1f28d867346326e)), closes [#171](https://github.com/qmhc/vite-plugin-dts/issues/171)
- normalize `mts` and `cts` declaration files extension ([410288a](https://github.com/qmhc/vite-plugin-dts/commit/410288ac65d7fb4a3065d93c6d7be9e2a8dd3f77)), closes [#169](https://github.com/qmhc/vite-plugin-dts/issues/169)

## [1.7.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.1...v1.7.2) (2023-01-31)

### Bug Fixes

- correct .d.ts extension in multiple outputs ([5c9709c](https://github.com/qmhc/vite-plugin-dts/commit/5c9709c4082ee36f2f28b4ad6e21b846aa27d5d6)), closes [#144](https://github.com/qmhc/vite-plugin-dts/issues/144)
- insertTypesEntry config supports publishConfig.types ([#164](https://github.com/qmhc/vite-plugin-dts/issues/164)) ([dae4ef9](https://github.com/qmhc/vite-plugin-dts/commit/dae4ef9de1175cf5bdc5a7dedfa60d7bab381dba))
- mark typescript as external dependency ([#160](https://github.com/qmhc/vite-plugin-dts/issues/160)) ([31e10d4](https://github.com/qmhc/vite-plugin-dts/commit/31e10d4ec2a37148ad63fdfb141264d6c4966135))

## [1.7.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.0...v1.7.1) (2022-11-14)

### Bug Fixes

- ensure exulde working when transform ([aea8ebd](https://github.com/qmhc/vite-plugin-dts/commit/aea8ebdc4eac489bc62ccebf3552421bd43d318c)), closes [#143](https://github.com/qmhc/vite-plugin-dts/issues/143) [#140](https://github.com/qmhc/vite-plugin-dts/issues/140) [#97](https://github.com/qmhc/vite-plugin-dts/issues/97)
- import vite plugin type via dynamic import ([8bd73c8](https://github.com/qmhc/vite-plugin-dts/commit/8bd73c8fae010ba0d32df8b144345b7f641a6085)), closes [#139](https://github.com/qmhc/vite-plugin-dts/issues/139)

# [1.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.6...v1.7.0) (2022-11-07)

### Bug Fixes

- compiler missing plugin `decorators-legacy` ([#138](https://github.com/qmhc/vite-plugin-dts/issues/138)) ([717af2f](https://github.com/qmhc/vite-plugin-dts/commit/717af2f4bc1b5bd549339179bc5b75dbbd9a348a))
- derprecate logDiagnostics option ([e405328](https://github.com/qmhc/vite-plugin-dts/commit/e405328f64870919a3ee4100fac087870ed4662e))
- incorrect compiler address resolution ([#133](https://github.com/qmhc/vite-plugin-dts/issues/133)) ([01cc125](https://github.com/qmhc/vite-plugin-dts/commit/01cc125ea98b1994e364487f73d71b0cb6ebcdbf))

### Features

- support customize typescript lib path ([27b83f3](https://github.com/qmhc/vite-plugin-dts/commit/27b83f3423f50307852257f3747c112f2f3cd325)), closes [#134](https://github.com/qmhc/vite-plugin-dts/issues/134)
- support multiple entries for lib mode ([1fafe54](https://github.com/qmhc/vite-plugin-dts/commit/1fafe54991431ce86a404ecb7e179ef1aa8aff0a)), closes [#136](https://github.com/qmhc/vite-plugin-dts/issues/136)

## [1.6.6](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.5...v1.6.6) (2022-10-13)

### Bug Fixes

- adapt @microsoft/api-extractor 7.33+ ([5acb4be](https://github.com/qmhc/vite-plugin-dts/commit/5acb4be4d1e4fe41e42a38ec9e92eeeb6f3a9c15))
- always ship included dts files into soure ([fc345e3](https://github.com/qmhc/vite-plugin-dts/commit/fc345e31b79fd7ca40581727d1964f80d1b9db82)), closes [#126](https://github.com/qmhc/vite-plugin-dts/issues/126)

## [1.6.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.4...v1.6.5) (2022-10-06)

### Bug Fixes

- remove pnpm limitation in preinstall to support npm@6 ([d7167b8](https://github.com/qmhc/vite-plugin-dts/commit/d7167b83381c54075e0e9114c07fe9451b6ffa2d)), closes [#123](https://github.com/qmhc/vite-plugin-dts/issues/123)

## [1.6.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.3...v1.6.4) (2022-09-30)

### Bug Fixes

- patch cjs vars for esm scope ([57e093d](https://github.com/qmhc/vite-plugin-dts/commit/57e093d734e4b81bbeeecbd694b269cca698f914)), closes [#119](https://github.com/qmhc/vite-plugin-dts/issues/119) [#122](https://github.com/qmhc/vite-plugin-dts/issues/122)

## [1.6.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.2...v1.6.3) (2022-09-30)

### Bug Fixes

- both support cjs and esm(using by tsx) ([38bd6a6](https://github.com/qmhc/vite-plugin-dts/commit/38bd6a6789fe375dd5da0aec1ea9b6816751719a))

## [1.6.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.1...v1.6.2) (2022-09-30)

### Bug Fixes

- ensure generate dts for type only files ([f3f4919](https://github.com/qmhc/vite-plugin-dts/commit/f3f4919fa441a27b7d842f1e64dd8d711bd05ec9)), closes [#118](https://github.com/qmhc/vite-plugin-dts/issues/118)

## [1.6.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.0...v1.6.1) (2022-09-28)

### Bug Fixes

- path error in cjs running ([0832af4](https://github.com/qmhc/vite-plugin-dts/commit/0832af4ab49d8166e14b6897bb1538ec6ddf3bb5))

# [1.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.5.0...v1.6.0) (2022-09-28)

### Bug Fixes

- correct compilerOptions.outDir for project init ([8699219](https://github.com/qmhc/vite-plugin-dts/commit/86992194411017e75b1d17c3f72d631267ec187b))
- type error occurred while define `defineProps` retruns as `props` ([41eb53a](https://github.com/qmhc/vite-plugin-dts/commit/41eb53a4da681d2c809dc8a7674a03284acbea02)), closes [#113](https://github.com/qmhc/vite-plugin-dts/issues/113)

### Features

- skip write file when `beforeWriteFile` return exact `false` ([9404ebc](https://github.com/qmhc/vite-plugin-dts/commit/9404ebc811b919a59a21b954d4ba4d43be255390)), closes [#110](https://github.com/qmhc/vite-plugin-dts/issues/110)

# [1.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.1...v1.5.0) (2022-09-11)

### Features

- improve aliasesExclude to support more flexible definition ([f652523](https://github.com/qmhc/vite-plugin-dts/commit/f6525235758b0d29347feb7f21a5085dc81b13a4)), closes [#93](https://github.com/qmhc/vite-plugin-dts/issues/93)

## [1.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.0...v1.4.1) (2022-08-01)

### Bug Fixes

- includes `extends` field when parse tsconfig.json ([#96](https://github.com/qmhc/vite-plugin-dts/issues/96)) ([2631de0](https://github.com/qmhc/vite-plugin-dts/commit/2631de0725e89083752fd590ff604f3f763abd3a))

# [1.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.1...v1.4.0) (2022-07-20)

### Bug Fixes

- ensure emit dts when no script sfc in vue component ([869a466](https://github.com/qmhc/vite-plugin-dts/commit/869a4662af2e690b2e1e63faf941a9e1343dd6ea)), closes [#88](https://github.com/qmhc/vite-plugin-dts/issues/88)

### Features

- support vue 2.7 ([c4e2c4b](https://github.com/qmhc/vite-plugin-dts/commit/c4e2c4b479da837ab697220284ac3c54e89c54a0)), closes [#87](https://github.com/qmhc/vite-plugin-dts/issues/87)

## [1.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.0...v1.3.1) (2022-07-18)

### Bug Fixes

- dynamiclly adjust the exports of inserted index file ([abc9431](https://github.com/qmhc/vite-plugin-dts/commit/abc943143b97dbec0935b62171b16faeebd6fbf4)), closes [#81](https://github.com/qmhc/vite-plugin-dts/issues/81) [#86](https://github.com/qmhc/vite-plugin-dts/issues/86)
- missing inserted entry when multiple outputs ([39ff8ab](https://github.com/qmhc/vite-plugin-dts/commit/39ff8abc0e1dda232c3cf1e6f25ff8daddb37acb))

# [1.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.1...v1.3.0) (2022-07-13)

### Bug Fixes

- aliasesExclude not work when includes empty value ([#85](https://github.com/qmhc/vite-plugin-dts/issues/85)) ([8b9b9aa](https://github.com/qmhc/vite-plugin-dts/commit/8b9b9aa4e9d1c4fa84a2945f4f2421c9269240ff))
- correct type files generate when root is set ([#68](https://github.com/qmhc/vite-plugin-dts/issues/68)) ([0b491bd](https://github.com/qmhc/vite-plugin-dts/commit/0b491bd3720c5b6065dd00a00f9b95e39bf6c8fe))

### Features

- support multiple output dirs ([cd19ee7](https://github.com/qmhc/vite-plugin-dts/commit/cd19ee7f4cf25906a3ffcd89a6c93baf7c7266ed))

## [1.2.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.0...v1.2.1) (2022-07-05)

### Bug Fixes

- add parser plugins param for vue compiler ([7d6bd16](https://github.com/qmhc/vite-plugin-dts/commit/7d6bd16af88701152bf8847e160acf6169bd0918)), closes [#78](https://github.com/qmhc/vite-plugin-dts/issues/78)
- insert entry fail when no default export in source entry ([#82](https://github.com/qmhc/vite-plugin-dts/issues/82)) ([1a4b161](https://github.com/qmhc/vite-plugin-dts/commit/1a4b161647ba1826c3bfa7c9ca5ee7ca4c3ee4bf))

# [1.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.1...v1.2.0) (2022-05-24)

### Bug Fixes

- support read typings form package.json ([6b1bb29](https://github.com/qmhc/vite-plugin-dts/commit/6b1bb2951512733091b950f5767bfe5a1cbe8992))

### Features

- add `aliasesExclude` option ([#75](https://github.com/qmhc/vite-plugin-dts/issues/75)) ([7588ba4](https://github.com/qmhc/vite-plugin-dts/commit/7588ba4755c19e25ca2482b95cb99a59621e693e)), closes [#73](https://github.com/qmhc/vite-plugin-dts/issues/73)
- support override compilerOptions when rollup up ([995612d](https://github.com/qmhc/vite-plugin-dts/commit/995612d5eafa6b610a9ab8826ee7b8691c673b4e)), closes [#74](https://github.com/qmhc/vite-plugin-dts/issues/74)

## [1.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.0...v1.1.1) (2022-04-25)

### Bug Fixes

- incorrect rollup entry path ([a9309d8](https://github.com/qmhc/vite-plugin-dts/commit/a9309d8ca8c0531d1579d3a541cd67ac0a37ce1b))

# [1.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.5...v1.1.0) (2022-04-18)

### Bug Fixes

- lose the type of entry export default ([50f55de](https://github.com/qmhc/vite-plugin-dts/commit/50f55de3ec89d7995056c428a37d16e0cd2a6a4a))

### Features

- support rollup dts files after output ([1d87b44](https://github.com/qmhc/vite-plugin-dts/commit/1d87b44dff3c54a5b1b983b060d3d0d4972c1d94))

## [1.0.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.4...v1.0.5) (2022-04-02)

### Bug Fixes

- entryRoot option not work ([#66](https://github.com/qmhc/vite-plugin-dts/issues/66)) ([bca6423](https://github.com/qmhc/vite-plugin-dts/commit/bca64236076a28dbdd7e6e373c46f3af3723b4e1))

## [1.0.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.3...v1.0.4) (2022-03-28)

### Bug Fixes

- transfer 'debug' to dependencies ([7af9232](https://github.com/qmhc/vite-plugin-dts/commit/7af9232e381f6d572a543706d640c6ecdb5a6c00))

## [1.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.2...v1.0.3) (2022-03-25)

### Bug Fixes

- **example:** cannot resolve types through symlinks ([0914a6a](https://github.com/qmhc/vite-plugin-dts/commit/0914a6ad8dde3514f94e586798d6d73a9c2ac165)), closes [#63](https://github.com/qmhc/vite-plugin-dts/issues/63)

## [1.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.1...v1.0.2) (2022-03-24)

### Bug Fixes

- incorrect entryRoot calculation in linux an mac ([0136990](https://github.com/qmhc/vite-plugin-dts/commit/01369903f484eb74ae6fa23b49537fa64d610706)), closes [#62](https://github.com/qmhc/vite-plugin-dts/issues/62)

## [1.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0...v1.0.1) (2022-03-22)

### Bug Fixes

- missing some libs defind in dependencies ([ab7960f](https://github.com/qmhc/vite-plugin-dts/commit/ab7960f0d957aad6945ef469274bca3e142baa87))

# [1.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.10...v1.0.0) (2022-03-22)

### Features

- support entryRoot option ([c939e35](https://github.com/qmhc/vite-plugin-dts/commit/c939e358dfecacaf2dfd2b0d42118c16462c260a)), closes [#59](https://github.com/qmhc/vite-plugin-dts/issues/59)

### BREAKING CHANGES

- The calculating output paths funtion of root option is
  assigned to entryRoot option, and currently will auto calculating the
  smallest public path as the default value for entryRoot option.

## [0.9.10](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.9...v0.9.10) (2022-03-12)

### Bug Fixes

- make default include same as tsconfig.json ([5ca7fc5](https://github.com/qmhc/vite-plugin-dts/commit/5ca7fc51ab321d4b25ce9856c0e52894c1264d44)), closes [#58](https://github.com/qmhc/vite-plugin-dts/issues/58)

## [0.9.9](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.8...v0.9.9) (2022-01-11)

### Bug Fixes

- should filter vite virtual files ([5fb24ba](https://github.com/qmhc/vite-plugin-dts/commit/5fb24ba2c40ad2ef81e45c33533aada3bb5aefd3)), closes [#50](https://github.com/qmhc/vite-plugin-dts/issues/50)

## [0.9.8](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.7...v0.9.8) (2022-01-10)

### Bug Fixes

- put `copyDtsFiles` option in use ([#53](https://github.com/qmhc/vite-plugin-dts/issues/53)) ([261700f](https://github.com/qmhc/vite-plugin-dts/commit/261700f80a60b3bc1f22f391e00d9999205fe0d2)), closes [#52](https://github.com/qmhc/vite-plugin-dts/issues/52)

## [0.9.7](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.6...v0.9.7) (2021-12-30)

### Bug Fixes

- inserted entry not through beforeWriteFile ([e16b9b1](https://github.com/qmhc/vite-plugin-dts/commit/e16b9b15c66df887bac0ca0b6be05e4d1f8628ed)), closes [#48](https://github.com/qmhc/vite-plugin-dts/issues/48)

## [0.9.6](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.5...v0.9.6) (2021-11-23)

### Bug Fixes

- aliases are not resolved when find ends with '/' ([f04aab2](https://github.com/qmhc/vite-plugin-dts/commit/f04aab21f9f6dc02316a9ff3a9cd43e90cd97828)), closes [#37](https://github.com/qmhc/vite-plugin-dts/issues/37)
- not equally transform dts source files ([ede5146](https://github.com/qmhc/vite-plugin-dts/commit/ede514649282aec786549d490e8127824913914c))

## [0.9.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.4...v0.9.5) (2021-11-21)

### Bug Fixes

- ensure dts source files through beforeWriteFile hook ([3265412](https://github.com/qmhc/vite-plugin-dts/commit/3265412e26dd8736fefab0cf99e920d01bb246c5)), closes [#43](https://github.com/qmhc/vite-plugin-dts/issues/43)

## [0.9.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.3...v0.9.4) (2021-11-10)

### Bug Fixes

- cannot resolve types defined in dts files ([666ca09](https://github.com/qmhc/vite-plugin-dts/commit/666ca0925075bed6926f648a210f37d56af9577b)), closes [#42](https://github.com/qmhc/vite-plugin-dts/issues/42)
- take unused error when using setup-script ([c4145b7](https://github.com/qmhc/vite-plugin-dts/commit/c4145b7352359c79b8ba7c01a1c4afeace4dbc7c))

## [0.9.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.2...v0.9.3) (2021-11-03)

### Bug Fixes

- support require for cjs exports ([cc5aff9](https://github.com/qmhc/vite-plugin-dts/commit/cc5aff9b9906fc87f6012fb66566fd1937a9381e)), closes [#39](https://github.com/qmhc/vite-plugin-dts/issues/39)

## [0.9.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.1...v0.9.2) (2021-10-20)

### Bug Fixes

- support optional @vue/compiler-sfc ([34e1958](https://github.com/qmhc/vite-plugin-dts/commit/34e19587aa64c802cfbd99c5c8018bde8d0e1e2f))

## [0.9.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.3...v0.9.1) (2021-10-18)

### Bug Fixes

- watch mode not update ts/js files ([32a5699](https://github.com/qmhc/vite-plugin-dts/commit/32a5699a9b4f5a24b2a2a870ced43850a0573f82))

### Features

- add afterBuild hook option ([#34](https://github.com/qmhc/vite-plugin-dts/issues/34)) ([e836689](https://github.com/qmhc/vite-plugin-dts/commit/e83668988dab189d185ed9637032f7f80ba1e4db))
- afterDiagnostic and afterBuild support async ([c92d548](https://github.com/qmhc/vite-plugin-dts/commit/c92d54826b81f50fbb38fa909df730b323b75b24))
- skip dependencies by default ([8ca3ed3](https://github.com/qmhc/vite-plugin-dts/commit/8ca3ed30dfcc23c2dd9822fe6ef460a6c832dfe2))

## [0.8.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.2...v0.8.3) (2021-10-11)

### Bug Fixes

- support tsconfig.json using comments ([6e6e446](https://github.com/qmhc/vite-plugin-dts/commit/6e6e44683592060ebd27d1c5712058f2f0f0aeb6)), closes [#31](https://github.com/qmhc/vite-plugin-dts/issues/31)

## [0.8.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.1...v0.8.2) (2021-09-30)

### Bug Fixes

- create correct source for tsx/jsx script ([#29](https://github.com/qmhc/vite-plugin-dts/issues/29)) ([109721e](https://github.com/qmhc/vite-plugin-dts/commit/109721e89007cd702fe73fded44cc6b7efeef46e))

## [0.8.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.0...v0.8.1) (2021-09-22)

### Bug Fixes

- declarationDir make no file generated ([3313a19](https://github.com/qmhc/vite-plugin-dts/commit/3313a19da669bda7fa8fff3a5211652bc22e7413)), closes [#27](https://github.com/qmhc/vite-plugin-dts/issues/27)
- rewrite noEmit option when init porject ([735d26b](https://github.com/qmhc/vite-plugin-dts/commit/735d26b3cad9a90dd272a08448d238045306a1ba)), closes [#28](https://github.com/qmhc/vite-plugin-dts/issues/28)

# [0.8.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.7.0...v0.8.0) (2021-09-13)

### Bug Fixes

- adapt vue@3.2.6+ setup script ([1b62755](https://github.com/qmhc/vite-plugin-dts/commit/1b62755947972a67a034830cc7478fa1a65924c4))
- ouput files out of include bounds ([e1cdedf](https://github.com/qmhc/vite-plugin-dts/commit/e1cdedfc8b41a311d2c22674bd132f23242482ac)), closes [#24](https://github.com/qmhc/vite-plugin-dts/issues/24)

### Features

- add afterDiagnostic option ([7d43ece](https://github.com/qmhc/vite-plugin-dts/commit/7d43ece8fcb9b71d645982a45b01cd9136c525d8)), closes [#22](https://github.com/qmhc/vite-plugin-dts/issues/22)
- support build watch mode ([a920d97](https://github.com/qmhc/vite-plugin-dts/commit/a920d97825dced453f5f70d8776944c02b50e14b)), closes [#5](https://github.com/qmhc/vite-plugin-dts/issues/5)

# [0.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.6.0...v0.7.0) (2021-08-23)

### Bug Fixes

- support using script-setup alongside script ([39517ad](https://github.com/qmhc/vite-plugin-dts/commit/39517ad7119a4b97be7a2d874b43cb73cfa95f07)), closes [#21](https://github.com/qmhc/vite-plugin-dts/issues/21)

### Features

- add noEmitOnError and logDiagnostics options ([8a840fe](https://github.com/qmhc/vite-plugin-dts/commit/8a840fe2692e07e8e881c58ca8f6887d08493cc9))

# [0.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.3...v0.6.0) (2021-08-14)

### Bug Fixes

- resolve alias when using default import ([3121d5b](https://github.com/qmhc/vite-plugin-dts/commit/3121d5bd56a6863e5175c95b00d7a3dedc0cff6d)), closes [#20](https://github.com/qmhc/vite-plugin-dts/issues/20)

### Features

- add copyDtsFiles option ([bdab8c4](https://github.com/qmhc/vite-plugin-dts/commit/bdab8c4b4efa894209c2edeffbbe4d79680eafe9)), closes [#19](https://github.com/qmhc/vite-plugin-dts/issues/19)

## [0.5.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.2...v0.5.3) (2021-07-22)

### Bug Fixes

- add allowJs option dynamically ([36f8de2](https://github.com/qmhc/vite-plugin-dts/commit/36f8de28c68cd52945faeb375cd2931c6ad0468a)), closes [#17](https://github.com/qmhc/vite-plugin-dts/issues/17)
- add js and jsx files when allowJs ([0e1e6f7](https://github.com/qmhc/vite-plugin-dts/commit/0e1e6f7c09c85e169568b2c77c66d452d04a28a2))

## [0.5.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.1...v0.5.2) (2021-07-01)

### Bug Fixes

- cannot require @vue/compiler-sfc in monorepo ([fd9b5c1](https://github.com/qmhc/vite-plugin-dts/commit/fd9b5c1c018feb87e374cdf6671b7b8be14e775b)), closes [#14](https://github.com/qmhc/vite-plugin-dts/issues/14)

## [0.5.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.0...v0.5.1) (2021-06-18)

### Bug Fixes

- support insert entry from '.tsx' file ([e38b7c4](https://github.com/qmhc/vite-plugin-dts/commit/e38b7c4686a8d7405583a97078e97fbef4757da6))

# [0.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.3...v0.5.0) (2021-06-15)

### Bug Fixes

- ignore none export files ([f9c41bc](https://github.com/qmhc/vite-plugin-dts/commit/f9c41bc4e2fd498b53aa366a5f8f2a57589b6176))
- rename insertIndexEntry to insertTypesEntry ([c9d392e](https://github.com/qmhc/vite-plugin-dts/commit/c9d392ec3def98b541bb597c5ed38933b225fe5e))

### Features

- add clearPureImport option ([0357f69](https://github.com/qmhc/vite-plugin-dts/commit/0357f69485204f24d9830a4de59558a23eb66e19))
- defaults insert entry base on pkg.types ([9c71f28](https://github.com/qmhc/vite-plugin-dts/commit/9c71f28eac50d23a42d92bd79ac6d09f1be0544d))
- optional insert index type entry ([592a701](https://github.com/qmhc/vite-plugin-dts/commit/592a701d6213f955306df9de0c7f1d3243a28faa))

## [0.4.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.2...v0.4.3) (2021-06-11)

### Bug Fixes

- back off optional chaining and nullish coalescing ([8e09129](https://github.com/qmhc/vite-plugin-dts/commit/8e09129c1600a013a2c3c50983ab7f358216757f)), closes [#2](https://github.com/qmhc/vite-plugin-dts/issues/2)
- transform fs/promise to fs-extra ([1794b0b](https://github.com/qmhc/vite-plugin-dts/commit/1794b0b93baf4212b4efc5ef06a697adf70e4933)), closes [#4](https://github.com/qmhc/vite-plugin-dts/issues/4)

### Performance Improvements

- use menory result generate bundle ([858bf31](https://github.com/qmhc/vite-plugin-dts/commit/858bf317d16c995feb73e53339d61f7602e36484))

## [0.4.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.1...v0.4.2) (2021-06-09)

### Bug Fixes

- incomplete remove pure import ([a1fd54e](https://github.com/qmhc/vite-plugin-dts/commit/a1fd54e769f1b50ee5858d33879b2a6732625797))
- mamual set include and exclude ([b6fb510](https://github.com/qmhc/vite-plugin-dts/commit/b6fb5106206df9de83276687dd1451fa3d882067))
- more accurate normalize glob ([1d65c47](https://github.com/qmhc/vite-plugin-dts/commit/1d65c47811344a6b566a8dcf22cd22d9298d5a02))
- set rootDir if not set in compilerOptions ([a1d83d2](https://github.com/qmhc/vite-plugin-dts/commit/a1d83d2aa56a32ebef11b9d98fa508a6d9fbd412)), closes [#3](https://github.com/qmhc/vite-plugin-dts/issues/3)
- transform alias include dynamic imports ([a6919b4](https://github.com/qmhc/vite-plugin-dts/commit/a6919b4760cf5cbefbdad1ac674b8a8275dc27dd))
- transform alias include dynamic imports ([3a5511e](https://github.com/qmhc/vite-plugin-dts/commit/3a5511e3e0b961d7f4ac393da623502a186a0538))

## [0.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.0...v0.4.1) (2021-06-08)

### Bug Fixes

- dynamic import regexp endings include ']' and ')' ([e5f37a6](https://github.com/qmhc/vite-plugin-dts/commit/e5f37a6d9e232e268ea1b2ec2eadb6c7bc7d7115))

# [0.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.5...v0.4.0) (2021-06-08)

### Bug Fixes

- bundle only once for multiple formats ([be37fbf](https://github.com/qmhc/vite-plugin-dts/commit/be37fbfcbd03dd23c73908a2d7f2d019437e003a))

### Features

- bundle all from tsconfig include ([252554a](https://github.com/qmhc/vite-plugin-dts/commit/252554af1fa403af1ee00dba16a1c7938e7374c6))

### BREAKING CHANGES

- Deprecated include and exclude options

## [0.3.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.4...v0.3.5) (2021-06-08)

### Bug Fixes

- includes prue type export files ([1341359](https://github.com/qmhc/vite-plugin-dts/commit/1341359b9943fd961ec0d3d40d71252e77c73390))
- incorrect path in transform alias ([d686ff9](https://github.com/qmhc/vite-plugin-dts/commit/d686ff94157c400d7f235331a47fbb9d452afeb9))

## [0.3.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.3...v0.3.4) (2021-06-07)

### Bug Fixes

- remove pure import ([fe241de](https://github.com/qmhc/vite-plugin-dts/commit/fe241de5b583cb5bf2dde83383a8a43e53724ce1))
- static import include relative path ([4065217](https://github.com/qmhc/vite-plugin-dts/commit/40652178b9071509269e6b66cbbbcb3562cf349d))

## [0.3.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.2...v0.3.3) (2021-06-07)

### Bug Fixes

- keep output relative to root not to entry dir ([e83ec64](https://github.com/qmhc/vite-plugin-dts/commit/e83ec643536f888166055a5495db3e2fd1030584))

### BREAKING CHANGES

- Ouput declaration structure no longer relative to entry dir

## [0.3.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.1...v0.3.2) (2021-06-07)

### Bug Fixes

- default root base on vite config ([787ebc1](https://github.com/qmhc/vite-plugin-dts/commit/787ebc175d07370628589a6fc73e325b29655a0b))

## [0.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.0...v0.3.1) (2021-06-06)

### Bug Fixes

- vue file explicit type lost ([d0d8803](https://github.com/qmhc/vite-plugin-dts/commit/d0d88038fb51d71dfb71ab4d0223600801d50349))

# [0.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.2.0...v0.3.0) (2021-06-06)

### Bug Fixes

- transform alias import to relative path ([6d5a2d5](https://github.com/qmhc/vite-plugin-dts/commit/6d5a2d5b5ba691b5572727cbf42b340d05964951))

### Features

- projectOptions refine to compilerOptions and tsConfigFilePath ([eb61113](https://github.com/qmhc/vite-plugin-dts/commit/eb611135446fff7bc82e3bd0d1d2b856a829de98))

### BREAKING CHANGES

- projectOptions no longer supported, the project init should be up to the plugin.

# [0.2.0](https://github.com/qmhc/vite-plugin-dts/compare/b2f0c0aa6eea5b48703248eca3294c5d845404ba...v0.2.0) (2021-06-05)

### Features

- add beforeWriteFile hook ([139e818](https://github.com/qmhc/vite-plugin-dts/commit/139e818cecfa80d4208b3f5ced55e7db57bf7e52))
- add outputDir option ([f289723](https://github.com/qmhc/vite-plugin-dts/commit/f289723672279795c0b96aaac3abf83dd8913b20))
- add transform dynamic import to static ([b2f0c0a](https://github.com/qmhc/vite-plugin-dts/commit/b2f0c0aa6eea5b48703248eca3294c5d845404ba))

# [3.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.3...v3.1.0) (2023-07-05)

### Features

- support custom resolvers to transform files ([#233](https://github.com/qmhc/vite-plugin-dts/issues/233)) ([be43a4d](https://github.com/qmhc/vite-plugin-dts/commit/be43a4dfd96ae76bb851dde675d222d51ea46e92))

## [3.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.2...v3.0.3) (2023-07-03)

### Bug Fixes

- incorrect lib path process when rollup types ([292b8b7](https://github.com/qmhc/vite-plugin-dts/commit/292b8b7be90e05d2d19febde2e57ec126aba0d33)), closes [#232](https://github.com/qmhc/vite-plugin-dts/issues/232)

## [3.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.1...v3.0.2) (2023-06-30)

### Bug Fixes

- error if exists same lib when transfrom dynamic imports ([c187278](https://github.com/qmhc/vite-plugin-dts/commit/c187278044972ecab077abada4a761398c74223c))

## [3.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0...v3.0.1) (2023-06-30)

### Bug Fixes

- correctly process default dynamic imports ([99105b0](https://github.com/qmhc/vite-plugin-dts/commit/99105b004325ade3c8ccc19c5375fa60716db300)), closes [#222](https://github.com/qmhc/vite-plugin-dts/issues/222)
- ensure collect manual dts for js source files ([5b7c5e5](https://github.com/qmhc/vite-plugin-dts/commit/5b7c5e52c71e457b904dd2f28b430dc9db267cf7)), closes [#184](https://github.com/qmhc/vite-plugin-dts/issues/184)

# [3.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.3...v3.0.0) (2023-06-30)

### Bug Fixes

- correct path process when specify entryRoot ([fc15dac](https://github.com/qmhc/vite-plugin-dts/commit/fc15dacf0561fc598e25f6de435edf97d6edfdf1)), closes [#229](https://github.com/qmhc/vite-plugin-dts/issues/229) [#230](https://github.com/qmhc/vite-plugin-dts/issues/230)
- correct time cost recording ([57eb430](https://github.com/qmhc/vite-plugin-dts/commit/57eb4309aeec4b5773bfa10c6e48a41c2fd23c69))

### Features

- add strictOutput to limit output write ([07224d1](https://github.com/qmhc/vite-plugin-dts/commit/07224d15576ee6528c9068d8a80fcbbf502018f0))

# [3.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2023-06-27)

### Bug Fixes

- incorrect entryRoot when in single inner entry ([96d32d1](https://github.com/qmhc/vite-plugin-dts/commit/96d32d127b73d48ce192424c4596fe24a2d24619))
- promise A+ specification for `isPromise` method ([#228](https://github.com/qmhc/vite-plugin-dts/issues/228)) ([3454a35](https://github.com/qmhc/vite-plugin-dts/commit/3454a356683a97752b0161a0e5be0328aa55a4f3))

# [3.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.3.0...v3.0.0-beta.2) (2023-06-27)

### Features

- transfer to use Volar, support Rollup, improve watch mode ([#226](https://github.com/qmhc/vite-plugin-dts/issues/226)) ([bb7949c](https://github.com/qmhc/vite-plugin-dts/commit/bb7949c841141b2305640d953be4dddf45ce7d1a))

### BREAKING CHANGES

- Deprecated options: `noEmitOnError`, `skipDiagnostics`
  and `libFolderPath`. Rename options: `outputDir` -> `outDir`,
  `tsConfigFilePath` -> `tsconfigPath`.

# [2.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.1.0...v2.3.0) (2023-04-17)

### Features

- compatible with svelte ([#197](https://github.com/qmhc/vite-plugin-dts/issues/197)) ([5d38517](https://github.com/qmhc/vite-plugin-dts/commit/5d38517ee16fdfc2009725b9146bfe38c49d1709))
- supports multiple extends in tsconfig.json ([#202](https://github.com/qmhc/vite-plugin-dts/issues/202)) ([9fdac66](https://github.com/qmhc/vite-plugin-dts/commit/9fdac66c0cfd827791208a31fbbefd1fad4ac2bf)), closes [#200](https://github.com/qmhc/vite-plugin-dts/issues/200)

# [2.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.2...v2.1.0) (2023-03-08)

### Features

- add bundledPackages configuration ([#186](https://github.com/qmhc/vite-plugin-dts/issues/186)) ([8997680](https://github.com/qmhc/vite-plugin-dts/commit/8997680776d8f35ae5248cc73b2d6a734e5dbc4a))

## [2.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.1...v2.0.2) (2023-02-23)

### Bug Fixes

- recursively resolve extended tsconfig path ([#181](https://github.com/qmhc/vite-plugin-dts/issues/181)) ([7ca8502](https://github.com/qmhc/vite-plugin-dts/commit/7ca85026e9a3e345c334222af5ffa823bda380a7))

## [2.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0...v2.0.1) (2023-02-23)

### Bug Fixes

- **vue:** correctly remove components for normal script ([6dbd9af](https://github.com/qmhc/vite-plugin-dts/commit/6dbd9af3bbd8175ef8a1cee4054ba38f330eef0c))
- **vue:** error when parse no argument function ([4db63b4](https://github.com/qmhc/vite-plugin-dts/commit/4db63b4b1b48686146f07e7e69dcbd4a82b33efb))

# [2.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.3...v2.0.0) (2023-02-23)

### Bug Fixes

- ensure watch all the files defined in include ([42a755c](https://github.com/qmhc/vite-plugin-dts/commit/42a755cf502cdfa8dc9dab0f600e8cc2a46eec18)), closes [#151](https://github.com/qmhc/vite-plugin-dts/issues/151)
- incorrect path resolve when copy dts source files ([434f69e](https://github.com/qmhc/vite-plugin-dts/commit/434f69e9629db5b2e74e609ffbc5f9cd436c1177)), closes [#179](https://github.com/qmhc/vite-plugin-dts/issues/179)
- **react:** unlimited init order when using with react plugin ([92b82ff](https://github.com/qmhc/vite-plugin-dts/commit/92b82ff47e0480c86c76e298feaa7cea8e06f7fa)), closes [#148](https://github.com/qmhc/vite-plugin-dts/issues/148)

### BREAKING CHANGES

- `copyDtsFiles` option now default to false.

# [2.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2023-02-21)

### Bug Fixes

- support manually create dts for source file ([2174868](https://github.com/qmhc/vite-plugin-dts/commit/2174868158766fd16a72f9f44b979d2c62d8ab07)), closes [#178](https://github.com/qmhc/vite-plugin-dts/issues/178)

### Features

- support parse types entry from exports in package.json ([f033cf8](https://github.com/qmhc/vite-plugin-dts/commit/f033cf876b51d7e11f1aa562567f3fd1f97d04f5))

# [2.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2023-02-20)

### Bug Fixes

- should re-transform when file changed in watch mode ([eafdd3c](https://github.com/qmhc/vite-plugin-dts/commit/eafdd3ce7d6757f93a378130b8e34f41e17e4004)), closes [#99](https://github.com/qmhc/vite-plugin-dts/issues/99)
- **vue:** preprocess not direct exported component ([8bd769e](https://github.com/qmhc/vite-plugin-dts/commit/8bd769e013f845a8e486d354d9f8517bd7b02e72))

### Features

- support specify log level of plugin ([2c1aeb0](https://github.com/qmhc/vite-plugin-dts/commit/2c1aeb01637aa4511f4e4c26b891b6e7ea235d50)), closes [#177](https://github.com/qmhc/vite-plugin-dts/issues/177)

# [2.0.0-beta.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2023-02-17)

### Bug Fixes

- **vue:** conversion error when using outside ts props ([25307cf](https://github.com/qmhc/vite-plugin-dts/commit/25307cf6ef89aa8501c8c35ff8ca519021adafea)), closes [#175](https://github.com/qmhc/vite-plugin-dts/issues/175)
- **vue:** remove components option before inferring ([90f8ac1](https://github.com/qmhc/vite-plugin-dts/commit/90f8ac160412de418bc7dc31c97f4ca7daa524ca))

# [2.0.0-beta.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.3...v2.0.0-beta.0) (2023-02-16)

### Bug Fixes

- override composite for root tsconfig ([df1d0f4](https://github.com/qmhc/vite-plugin-dts/commit/df1d0f42d0d9d9341d7766f5c147e7e3fa3733cf)), closes [#153](https://github.com/qmhc/vite-plugin-dts/issues/153)
- **vue:** ignore css vars when compile ([6d2369a](https://github.com/qmhc/vite-plugin-dts/commit/6d2369afe31c18b3dff45296d74b90aba86bb656)), closes [#167](https://github.com/qmhc/vite-plugin-dts/issues/167)

### Features

- **vue:** accurate types inferring for exposed and props ([#173](https://github.com/qmhc/vite-plugin-dts/issues/173)) ([c25448c](https://github.com/qmhc/vite-plugin-dts/commit/c25448c90f3b3969d51dbfa31ad5dc3ce2a9a2aa))

## [1.7.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.2...v1.7.3) (2023-02-14)

### Bug Fixes

- incorrect compilerOptions when rollup dts ([9dd8d9c](https://github.com/qmhc/vite-plugin-dts/commit/9dd8d9c41bed7f79e24ee890c1f28d867346326e)), closes [#171](https://github.com/qmhc/vite-plugin-dts/issues/171)
- normalize `mts` and `cts` declaration files extension ([410288a](https://github.com/qmhc/vite-plugin-dts/commit/410288ac65d7fb4a3065d93c6d7be9e2a8dd3f77)), closes [#169](https://github.com/qmhc/vite-plugin-dts/issues/169)

## [1.7.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.1...v1.7.2) (2023-01-31)

### Bug Fixes

- correct .d.ts extension in multiple outputs ([5c9709c](https://github.com/qmhc/vite-plugin-dts/commit/5c9709c4082ee36f2f28b4ad6e21b846aa27d5d6)), closes [#144](https://github.com/qmhc/vite-plugin-dts/issues/144)
- insertTypesEntry config supports publishConfig.types ([#164](https://github.com/qmhc/vite-plugin-dts/issues/164)) ([dae4ef9](https://github.com/qmhc/vite-plugin-dts/commit/dae4ef9de1175cf5bdc5a7dedfa60d7bab381dba))
- mark typescript as external dependency ([#160](https://github.com/qmhc/vite-plugin-dts/issues/160)) ([31e10d4](https://github.com/qmhc/vite-plugin-dts/commit/31e10d4ec2a37148ad63fdfb141264d6c4966135))

## [1.7.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.0...v1.7.1) (2022-11-14)

### Bug Fixes

- ensure exulde working when transform ([aea8ebd](https://github.com/qmhc/vite-plugin-dts/commit/aea8ebdc4eac489bc62ccebf3552421bd43d318c)), closes [#143](https://github.com/qmhc/vite-plugin-dts/issues/143) [#140](https://github.com/qmhc/vite-plugin-dts/issues/140) [#97](https://github.com/qmhc/vite-plugin-dts/issues/97)
- import vite plugin type via dynamic import ([8bd73c8](https://github.com/qmhc/vite-plugin-dts/commit/8bd73c8fae010ba0d32df8b144345b7f641a6085)), closes [#139](https://github.com/qmhc/vite-plugin-dts/issues/139)

# [1.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.6...v1.7.0) (2022-11-07)

### Bug Fixes

- compiler missing plugin `decorators-legacy` ([#138](https://github.com/qmhc/vite-plugin-dts/issues/138)) ([717af2f](https://github.com/qmhc/vite-plugin-dts/commit/717af2f4bc1b5bd549339179bc5b75dbbd9a348a))
- derprecate logDiagnostics option ([e405328](https://github.com/qmhc/vite-plugin-dts/commit/e405328f64870919a3ee4100fac087870ed4662e))
- incorrect compiler address resolution ([#133](https://github.com/qmhc/vite-plugin-dts/issues/133)) ([01cc125](https://github.com/qmhc/vite-plugin-dts/commit/01cc125ea98b1994e364487f73d71b0cb6ebcdbf))

### Features

- support customize typescript lib path ([27b83f3](https://github.com/qmhc/vite-plugin-dts/commit/27b83f3423f50307852257f3747c112f2f3cd325)), closes [#134](https://github.com/qmhc/vite-plugin-dts/issues/134)
- support multiple entries for lib mode ([1fafe54](https://github.com/qmhc/vite-plugin-dts/commit/1fafe54991431ce86a404ecb7e179ef1aa8aff0a)), closes [#136](https://github.com/qmhc/vite-plugin-dts/issues/136)

## [1.6.6](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.5...v1.6.6) (2022-10-13)

### Bug Fixes

- adapt @microsoft/api-extractor 7.33+ ([5acb4be](https://github.com/qmhc/vite-plugin-dts/commit/5acb4be4d1e4fe41e42a38ec9e92eeeb6f3a9c15))
- always ship included dts files into soure ([fc345e3](https://github.com/qmhc/vite-plugin-dts/commit/fc345e31b79fd7ca40581727d1964f80d1b9db82)), closes [#126](https://github.com/qmhc/vite-plugin-dts/issues/126)

## [1.6.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.4...v1.6.5) (2022-10-06)

### Bug Fixes

- remove pnpm limitation in preinstall to support npm@6 ([d7167b8](https://github.com/qmhc/vite-plugin-dts/commit/d7167b83381c54075e0e9114c07fe9451b6ffa2d)), closes [#123](https://github.com/qmhc/vite-plugin-dts/issues/123)

## [1.6.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.3...v1.6.4) (2022-09-30)

### Bug Fixes

- patch cjs vars for esm scope ([57e093d](https://github.com/qmhc/vite-plugin-dts/commit/57e093d734e4b81bbeeecbd694b269cca698f914)), closes [#119](https://github.com/qmhc/vite-plugin-dts/issues/119) [#122](https://github.com/qmhc/vite-plugin-dts/issues/122)

## [1.6.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.2...v1.6.3) (2022-09-30)

### Bug Fixes

- both support cjs and esm(using by tsx) ([38bd6a6](https://github.com/qmhc/vite-plugin-dts/commit/38bd6a6789fe375dd5da0aec1ea9b6816751719a))

## [1.6.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.1...v1.6.2) (2022-09-30)

### Bug Fixes

- ensure generate dts for type only files ([f3f4919](https://github.com/qmhc/vite-plugin-dts/commit/f3f4919fa441a27b7d842f1e64dd8d711bd05ec9)), closes [#118](https://github.com/qmhc/vite-plugin-dts/issues/118)

## [1.6.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.0...v1.6.1) (2022-09-28)

### Bug Fixes

- path error in cjs running ([0832af4](https://github.com/qmhc/vite-plugin-dts/commit/0832af4ab49d8166e14b6897bb1538ec6ddf3bb5))

# [1.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.5.0...v1.6.0) (2022-09-28)

### Bug Fixes

- correct compilerOptions.outDir for project init ([8699219](https://github.com/qmhc/vite-plugin-dts/commit/86992194411017e75b1d17c3f72d631267ec187b))
- type error occurred while define `defineProps` retruns as `props` ([41eb53a](https://github.com/qmhc/vite-plugin-dts/commit/41eb53a4da681d2c809dc8a7674a03284acbea02)), closes [#113](https://github.com/qmhc/vite-plugin-dts/issues/113)

### Features

- skip write file when `beforeWriteFile` return exact `false` ([9404ebc](https://github.com/qmhc/vite-plugin-dts/commit/9404ebc811b919a59a21b954d4ba4d43be255390)), closes [#110](https://github.com/qmhc/vite-plugin-dts/issues/110)

# [1.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.1...v1.5.0) (2022-09-11)

### Features

- improve aliasesExclude to support more flexible definition ([f652523](https://github.com/qmhc/vite-plugin-dts/commit/f6525235758b0d29347feb7f21a5085dc81b13a4)), closes [#93](https://github.com/qmhc/vite-plugin-dts/issues/93)

## [1.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.0...v1.4.1) (2022-08-01)

### Bug Fixes

- includes `extends` field when parse tsconfig.json ([#96](https://github.com/qmhc/vite-plugin-dts/issues/96)) ([2631de0](https://github.com/qmhc/vite-plugin-dts/commit/2631de0725e89083752fd590ff604f3f763abd3a))

# [1.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.1...v1.4.0) (2022-07-20)

### Bug Fixes

- ensure emit dts when no script sfc in vue component ([869a466](https://github.com/qmhc/vite-plugin-dts/commit/869a4662af2e690b2e1e63faf941a9e1343dd6ea)), closes [#88](https://github.com/qmhc/vite-plugin-dts/issues/88)

### Features

- support vue 2.7 ([c4e2c4b](https://github.com/qmhc/vite-plugin-dts/commit/c4e2c4b479da837ab697220284ac3c54e89c54a0)), closes [#87](https://github.com/qmhc/vite-plugin-dts/issues/87)

## [1.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.0...v1.3.1) (2022-07-18)

### Bug Fixes

- dynamiclly adjust the exports of inserted index file ([abc9431](https://github.com/qmhc/vite-plugin-dts/commit/abc943143b97dbec0935b62171b16faeebd6fbf4)), closes [#81](https://github.com/qmhc/vite-plugin-dts/issues/81) [#86](https://github.com/qmhc/vite-plugin-dts/issues/86)
- missing inserted entry when multiple outputs ([39ff8ab](https://github.com/qmhc/vite-plugin-dts/commit/39ff8abc0e1dda232c3cf1e6f25ff8daddb37acb))

# [1.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.1...v1.3.0) (2022-07-13)

### Bug Fixes

- aliasesExclude not work when includes empty value ([#85](https://github.com/qmhc/vite-plugin-dts/issues/85)) ([8b9b9aa](https://github.com/qmhc/vite-plugin-dts/commit/8b9b9aa4e9d1c4fa84a2945f4f2421c9269240ff))
- correct type files generate when root is set ([#68](https://github.com/qmhc/vite-plugin-dts/issues/68)) ([0b491bd](https://github.com/qmhc/vite-plugin-dts/commit/0b491bd3720c5b6065dd00a00f9b95e39bf6c8fe))

### Features

- support multiple output dirs ([cd19ee7](https://github.com/qmhc/vite-plugin-dts/commit/cd19ee7f4cf25906a3ffcd89a6c93baf7c7266ed))

## [1.2.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.0...v1.2.1) (2022-07-05)

### Bug Fixes

- add parser plugins param for vue compiler ([7d6bd16](https://github.com/qmhc/vite-plugin-dts/commit/7d6bd16af88701152bf8847e160acf6169bd0918)), closes [#78](https://github.com/qmhc/vite-plugin-dts/issues/78)
- insert entry fail when no default export in source entry ([#82](https://github.com/qmhc/vite-plugin-dts/issues/82)) ([1a4b161](https://github.com/qmhc/vite-plugin-dts/commit/1a4b161647ba1826c3bfa7c9ca5ee7ca4c3ee4bf))

# [1.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.1...v1.2.0) (2022-05-24)

### Bug Fixes

- support read typings form package.json ([6b1bb29](https://github.com/qmhc/vite-plugin-dts/commit/6b1bb2951512733091b950f5767bfe5a1cbe8992))

### Features

- add `aliasesExclude` option ([#75](https://github.com/qmhc/vite-plugin-dts/issues/75)) ([7588ba4](https://github.com/qmhc/vite-plugin-dts/commit/7588ba4755c19e25ca2482b95cb99a59621e693e)), closes [#73](https://github.com/qmhc/vite-plugin-dts/issues/73)
- support override compilerOptions when rollup up ([995612d](https://github.com/qmhc/vite-plugin-dts/commit/995612d5eafa6b610a9ab8826ee7b8691c673b4e)), closes [#74](https://github.com/qmhc/vite-plugin-dts/issues/74)

## [1.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.0...v1.1.1) (2022-04-25)

### Bug Fixes

- incorrect rollup entry path ([a9309d8](https://github.com/qmhc/vite-plugin-dts/commit/a9309d8ca8c0531d1579d3a541cd67ac0a37ce1b))

# [1.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.5...v1.1.0) (2022-04-18)

### Bug Fixes

- lose the type of entry export default ([50f55de](https://github.com/qmhc/vite-plugin-dts/commit/50f55de3ec89d7995056c428a37d16e0cd2a6a4a))

### Features

- support rollup dts files after output ([1d87b44](https://github.com/qmhc/vite-plugin-dts/commit/1d87b44dff3c54a5b1b983b060d3d0d4972c1d94))

## [1.0.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.4...v1.0.5) (2022-04-02)

### Bug Fixes

- entryRoot option not work ([#66](https://github.com/qmhc/vite-plugin-dts/issues/66)) ([bca6423](https://github.com/qmhc/vite-plugin-dts/commit/bca64236076a28dbdd7e6e373c46f3af3723b4e1))

## [1.0.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.3...v1.0.4) (2022-03-28)

### Bug Fixes

- transfer 'debug' to dependencies ([7af9232](https://github.com/qmhc/vite-plugin-dts/commit/7af9232e381f6d572a543706d640c6ecdb5a6c00))

## [1.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.2...v1.0.3) (2022-03-25)

### Bug Fixes

- **example:** cannot resolve types through symlinks ([0914a6a](https://github.com/qmhc/vite-plugin-dts/commit/0914a6ad8dde3514f94e586798d6d73a9c2ac165)), closes [#63](https://github.com/qmhc/vite-plugin-dts/issues/63)

## [1.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.1...v1.0.2) (2022-03-24)

### Bug Fixes

- incorrect entryRoot calculation in linux an mac ([0136990](https://github.com/qmhc/vite-plugin-dts/commit/01369903f484eb74ae6fa23b49537fa64d610706)), closes [#62](https://github.com/qmhc/vite-plugin-dts/issues/62)

## [1.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0...v1.0.1) (2022-03-22)

### Bug Fixes

- missing some libs defind in dependencies ([ab7960f](https://github.com/qmhc/vite-plugin-dts/commit/ab7960f0d957aad6945ef469274bca3e142baa87))

# [1.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.10...v1.0.0) (2022-03-22)

### Features

- support entryRoot option ([c939e35](https://github.com/qmhc/vite-plugin-dts/commit/c939e358dfecacaf2dfd2b0d42118c16462c260a)), closes [#59](https://github.com/qmhc/vite-plugin-dts/issues/59)

### BREAKING CHANGES

- The calculating output paths funtion of root option is
  assigned to entryRoot option, and currently will auto calculating the
  smallest public path as the default value for entryRoot option.

## [0.9.10](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.9...v0.9.10) (2022-03-12)

### Bug Fixes

- make default include same as tsconfig.json ([5ca7fc5](https://github.com/qmhc/vite-plugin-dts/commit/5ca7fc51ab321d4b25ce9856c0e52894c1264d44)), closes [#58](https://github.com/qmhc/vite-plugin-dts/issues/58)

## [0.9.9](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.8...v0.9.9) (2022-01-11)

### Bug Fixes

- should filter vite virtual files ([5fb24ba](https://github.com/qmhc/vite-plugin-dts/commit/5fb24ba2c40ad2ef81e45c33533aada3bb5aefd3)), closes [#50](https://github.com/qmhc/vite-plugin-dts/issues/50)

## [0.9.8](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.7...v0.9.8) (2022-01-10)

### Bug Fixes

- put `copyDtsFiles` option in use ([#53](https://github.com/qmhc/vite-plugin-dts/issues/53)) ([261700f](https://github.com/qmhc/vite-plugin-dts/commit/261700f80a60b3bc1f22f391e00d9999205fe0d2)), closes [#52](https://github.com/qmhc/vite-plugin-dts/issues/52)

## [0.9.7](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.6...v0.9.7) (2021-12-30)

### Bug Fixes

- inserted entry not through beforeWriteFile ([e16b9b1](https://github.com/qmhc/vite-plugin-dts/commit/e16b9b15c66df887bac0ca0b6be05e4d1f8628ed)), closes [#48](https://github.com/qmhc/vite-plugin-dts/issues/48)

## [0.9.6](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.5...v0.9.6) (2021-11-23)

### Bug Fixes

- aliases are not resolved when find ends with '/' ([f04aab2](https://github.com/qmhc/vite-plugin-dts/commit/f04aab21f9f6dc02316a9ff3a9cd43e90cd97828)), closes [#37](https://github.com/qmhc/vite-plugin-dts/issues/37)
- not equally transform dts source files ([ede5146](https://github.com/qmhc/vite-plugin-dts/commit/ede514649282aec786549d490e8127824913914c))

## [0.9.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.4...v0.9.5) (2021-11-21)

### Bug Fixes

- ensure dts source files through beforeWriteFile hook ([3265412](https://github.com/qmhc/vite-plugin-dts/commit/3265412e26dd8736fefab0cf99e920d01bb246c5)), closes [#43](https://github.com/qmhc/vite-plugin-dts/issues/43)

## [0.9.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.3...v0.9.4) (2021-11-10)

### Bug Fixes

- cannot resolve types defined in dts files ([666ca09](https://github.com/qmhc/vite-plugin-dts/commit/666ca0925075bed6926f648a210f37d56af9577b)), closes [#42](https://github.com/qmhc/vite-plugin-dts/issues/42)
- take unused error when using setup-script ([c4145b7](https://github.com/qmhc/vite-plugin-dts/commit/c4145b7352359c79b8ba7c01a1c4afeace4dbc7c))

## [0.9.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.2...v0.9.3) (2021-11-03)

### Bug Fixes

- support require for cjs exports ([cc5aff9](https://github.com/qmhc/vite-plugin-dts/commit/cc5aff9b9906fc87f6012fb66566fd1937a9381e)), closes [#39](https://github.com/qmhc/vite-plugin-dts/issues/39)

## [0.9.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.1...v0.9.2) (2021-10-20)

### Bug Fixes

- support optional @vue/compiler-sfc ([34e1958](https://github.com/qmhc/vite-plugin-dts/commit/34e19587aa64c802cfbd99c5c8018bde8d0e1e2f))

## [0.9.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.3...v0.9.1) (2021-10-18)

### Bug Fixes

- watch mode not update ts/js files ([32a5699](https://github.com/qmhc/vite-plugin-dts/commit/32a5699a9b4f5a24b2a2a870ced43850a0573f82))

### Features

- add afterBuild hook option ([#34](https://github.com/qmhc/vite-plugin-dts/issues/34)) ([e836689](https://github.com/qmhc/vite-plugin-dts/commit/e83668988dab189d185ed9637032f7f80ba1e4db))
- afterDiagnostic and afterBuild support async ([c92d548](https://github.com/qmhc/vite-plugin-dts/commit/c92d54826b81f50fbb38fa909df730b323b75b24))
- skip dependencies by default ([8ca3ed3](https://github.com/qmhc/vite-plugin-dts/commit/8ca3ed30dfcc23c2dd9822fe6ef460a6c832dfe2))

## [0.8.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.2...v0.8.3) (2021-10-11)

### Bug Fixes

- support tsconfig.json using comments ([6e6e446](https://github.com/qmhc/vite-plugin-dts/commit/6e6e44683592060ebd27d1c5712058f2f0f0aeb6)), closes [#31](https://github.com/qmhc/vite-plugin-dts/issues/31)

## [0.8.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.1...v0.8.2) (2021-09-30)

### Bug Fixes

- create correct source for tsx/jsx script ([#29](https://github.com/qmhc/vite-plugin-dts/issues/29)) ([109721e](https://github.com/qmhc/vite-plugin-dts/commit/109721e89007cd702fe73fded44cc6b7efeef46e))

## [0.8.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.0...v0.8.1) (2021-09-22)

### Bug Fixes

- declarationDir make no file generated ([3313a19](https://github.com/qmhc/vite-plugin-dts/commit/3313a19da669bda7fa8fff3a5211652bc22e7413)), closes [#27](https://github.com/qmhc/vite-plugin-dts/issues/27)
- rewrite noEmit option when init porject ([735d26b](https://github.com/qmhc/vite-plugin-dts/commit/735d26b3cad9a90dd272a08448d238045306a1ba)), closes [#28](https://github.com/qmhc/vite-plugin-dts/issues/28)

# [0.8.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.7.0...v0.8.0) (2021-09-13)

### Bug Fixes

- adapt vue@3.2.6+ setup script ([1b62755](https://github.com/qmhc/vite-plugin-dts/commit/1b62755947972a67a034830cc7478fa1a65924c4))
- ouput files out of include bounds ([e1cdedf](https://github.com/qmhc/vite-plugin-dts/commit/e1cdedfc8b41a311d2c22674bd132f23242482ac)), closes [#24](https://github.com/qmhc/vite-plugin-dts/issues/24)

### Features

- add afterDiagnostic option ([7d43ece](https://github.com/qmhc/vite-plugin-dts/commit/7d43ece8fcb9b71d645982a45b01cd9136c525d8)), closes [#22](https://github.com/qmhc/vite-plugin-dts/issues/22)
- support build watch mode ([a920d97](https://github.com/qmhc/vite-plugin-dts/commit/a920d97825dced453f5f70d8776944c02b50e14b)), closes [#5](https://github.com/qmhc/vite-plugin-dts/issues/5)

# [0.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.6.0...v0.7.0) (2021-08-23)

### Bug Fixes

- support using script-setup alongside script ([39517ad](https://github.com/qmhc/vite-plugin-dts/commit/39517ad7119a4b97be7a2d874b43cb73cfa95f07)), closes [#21](https://github.com/qmhc/vite-plugin-dts/issues/21)

### Features

- add noEmitOnError and logDiagnostics options ([8a840fe](https://github.com/qmhc/vite-plugin-dts/commit/8a840fe2692e07e8e881c58ca8f6887d08493cc9))

# [0.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.3...v0.6.0) (2021-08-14)

### Bug Fixes

- resolve alias when using default import ([3121d5b](https://github.com/qmhc/vite-plugin-dts/commit/3121d5bd56a6863e5175c95b00d7a3dedc0cff6d)), closes [#20](https://github.com/qmhc/vite-plugin-dts/issues/20)

### Features

- add copyDtsFiles option ([bdab8c4](https://github.com/qmhc/vite-plugin-dts/commit/bdab8c4b4efa894209c2edeffbbe4d79680eafe9)), closes [#19](https://github.com/qmhc/vite-plugin-dts/issues/19)

## [0.5.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.2...v0.5.3) (2021-07-22)

### Bug Fixes

- add allowJs option dynamically ([36f8de2](https://github.com/qmhc/vite-plugin-dts/commit/36f8de28c68cd52945faeb375cd2931c6ad0468a)), closes [#17](https://github.com/qmhc/vite-plugin-dts/issues/17)
- add js and jsx files when allowJs ([0e1e6f7](https://github.com/qmhc/vite-plugin-dts/commit/0e1e6f7c09c85e169568b2c77c66d452d04a28a2))

## [0.5.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.1...v0.5.2) (2021-07-01)

### Bug Fixes

- cannot require @vue/compiler-sfc in monorepo ([fd9b5c1](https://github.com/qmhc/vite-plugin-dts/commit/fd9b5c1c018feb87e374cdf6671b7b8be14e775b)), closes [#14](https://github.com/qmhc/vite-plugin-dts/issues/14)

## [0.5.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.0...v0.5.1) (2021-06-18)

### Bug Fixes

- support insert entry from '.tsx' file ([e38b7c4](https://github.com/qmhc/vite-plugin-dts/commit/e38b7c4686a8d7405583a97078e97fbef4757da6))

# [0.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.3...v0.5.0) (2021-06-15)

### Bug Fixes

- ignore none export files ([f9c41bc](https://github.com/qmhc/vite-plugin-dts/commit/f9c41bc4e2fd498b53aa366a5f8f2a57589b6176))
- rename insertIndexEntry to insertTypesEntry ([c9d392e](https://github.com/qmhc/vite-plugin-dts/commit/c9d392ec3def98b541bb597c5ed38933b225fe5e))

### Features

- add clearPureImport option ([0357f69](https://github.com/qmhc/vite-plugin-dts/commit/0357f69485204f24d9830a4de59558a23eb66e19))
- defaults insert entry base on pkg.types ([9c71f28](https://github.com/qmhc/vite-plugin-dts/commit/9c71f28eac50d23a42d92bd79ac6d09f1be0544d))
- optional insert index type entry ([592a701](https://github.com/qmhc/vite-plugin-dts/commit/592a701d6213f955306df9de0c7f1d3243a28faa))

## [0.4.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.2...v0.4.3) (2021-06-11)

### Bug Fixes

- back off optional chaining and nullish coalescing ([8e09129](https://github.com/qmhc/vite-plugin-dts/commit/8e09129c1600a013a2c3c50983ab7f358216757f)), closes [#2](https://github.com/qmhc/vite-plugin-dts/issues/2)
- transform fs/promise to fs-extra ([1794b0b](https://github.com/qmhc/vite-plugin-dts/commit/1794b0b93baf4212b4efc5ef06a697adf70e4933)), closes [#4](https://github.com/qmhc/vite-plugin-dts/issues/4)

### Performance Improvements

- use menory result generate bundle ([858bf31](https://github.com/qmhc/vite-plugin-dts/commit/858bf317d16c995feb73e53339d61f7602e36484))

## [0.4.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.1...v0.4.2) (2021-06-09)

### Bug Fixes

- incomplete remove pure import ([a1fd54e](https://github.com/qmhc/vite-plugin-dts/commit/a1fd54e769f1b50ee5858d33879b2a6732625797))
- mamual set include and exclude ([b6fb510](https://github.com/qmhc/vite-plugin-dts/commit/b6fb5106206df9de83276687dd1451fa3d882067))
- more accurate normalize glob ([1d65c47](https://github.com/qmhc/vite-plugin-dts/commit/1d65c47811344a6b566a8dcf22cd22d9298d5a02))
- set rootDir if not set in compilerOptions ([a1d83d2](https://github.com/qmhc/vite-plugin-dts/commit/a1d83d2aa56a32ebef11b9d98fa508a6d9fbd412)), closes [#3](https://github.com/qmhc/vite-plugin-dts/issues/3)
- transform alias include dynamic imports ([a6919b4](https://github.com/qmhc/vite-plugin-dts/commit/a6919b4760cf5cbefbdad1ac674b8a8275dc27dd))
- transform alias include dynamic imports ([3a5511e](https://github.com/qmhc/vite-plugin-dts/commit/3a5511e3e0b961d7f4ac393da623502a186a0538))

## [0.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.0...v0.4.1) (2021-06-08)

### Bug Fixes

- dynamic import regexp endings include ']' and ')' ([e5f37a6](https://github.com/qmhc/vite-plugin-dts/commit/e5f37a6d9e232e268ea1b2ec2eadb6c7bc7d7115))

# [0.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.5...v0.4.0) (2021-06-08)

### Bug Fixes

- bundle only once for multiple formats ([be37fbf](https://github.com/qmhc/vite-plugin-dts/commit/be37fbfcbd03dd23c73908a2d7f2d019437e003a))

### Features

- bundle all from tsconfig include ([252554a](https://github.com/qmhc/vite-plugin-dts/commit/252554af1fa403af1ee00dba16a1c7938e7374c6))

### BREAKING CHANGES

- Deprecated include and exclude options

## [0.3.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.4...v0.3.5) (2021-06-08)

### Bug Fixes

- includes prue type export files ([1341359](https://github.com/qmhc/vite-plugin-dts/commit/1341359b9943fd961ec0d3d40d71252e77c73390))
- incorrect path in transform alias ([d686ff9](https://github.com/qmhc/vite-plugin-dts/commit/d686ff94157c400d7f235331a47fbb9d452afeb9))

## [0.3.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.3...v0.3.4) (2021-06-07)

### Bug Fixes

- remove pure import ([fe241de](https://github.com/qmhc/vite-plugin-dts/commit/fe241de5b583cb5bf2dde83383a8a43e53724ce1))
- static import include relative path ([4065217](https://github.com/qmhc/vite-plugin-dts/commit/40652178b9071509269e6b66cbbbcb3562cf349d))

## [0.3.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.2...v0.3.3) (2021-06-07)

### Bug Fixes

- keep output relative to root not to entry dir ([e83ec64](https://github.com/qmhc/vite-plugin-dts/commit/e83ec643536f888166055a5495db3e2fd1030584))

### BREAKING CHANGES

- Ouput declaration structure no longer relative to entry dir

## [0.3.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.1...v0.3.2) (2021-06-07)

### Bug Fixes

- default root base on vite config ([787ebc1](https://github.com/qmhc/vite-plugin-dts/commit/787ebc175d07370628589a6fc73e325b29655a0b))

## [0.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.0...v0.3.1) (2021-06-06)

### Bug Fixes

- vue file explicit type lost ([d0d8803](https://github.com/qmhc/vite-plugin-dts/commit/d0d88038fb51d71dfb71ab4d0223600801d50349))

# [0.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.2.0...v0.3.0) (2021-06-06)

### Bug Fixes

- transform alias import to relative path ([6d5a2d5](https://github.com/qmhc/vite-plugin-dts/commit/6d5a2d5b5ba691b5572727cbf42b340d05964951))

### Features

- projectOptions refine to compilerOptions and tsConfigFilePath ([eb61113](https://github.com/qmhc/vite-plugin-dts/commit/eb611135446fff7bc82e3bd0d1d2b856a829de98))

### BREAKING CHANGES

- projectOptions no longer supported, the project init should be up to the plugin.

# [0.2.0](https://github.com/qmhc/vite-plugin-dts/compare/b2f0c0aa6eea5b48703248eca3294c5d845404ba...v0.2.0) (2021-06-05)

### Features

- add beforeWriteFile hook ([139e818](https://github.com/qmhc/vite-plugin-dts/commit/139e818cecfa80d4208b3f5ced55e7db57bf7e52))
- add outputDir option ([f289723](https://github.com/qmhc/vite-plugin-dts/commit/f289723672279795c0b96aaac3abf83dd8913b20))
- add transform dynamic import to static ([b2f0c0a](https://github.com/qmhc/vite-plugin-dts/commit/b2f0c0aa6eea5b48703248eca3294c5d845404ba))

## [3.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.2...v3.0.3) (2023-07-03)

### Bug Fixes

- incorrect lib path process when rollup types ([292b8b7](https://github.com/qmhc/vite-plugin-dts/commit/292b8b7be90e05d2d19febde2e57ec126aba0d33)), closes [#232](https://github.com/qmhc/vite-plugin-dts/issues/232)

## [3.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.1...v3.0.2) (2023-06-30)

### Bug Fixes

- error if exists same lib when transfrom dynamic imports ([c187278](https://github.com/qmhc/vite-plugin-dts/commit/c187278044972ecab077abada4a761398c74223c))

## [3.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0...v3.0.1) (2023-06-30)

### Bug Fixes

- correctly process default dynamic imports ([99105b0](https://github.com/qmhc/vite-plugin-dts/commit/99105b004325ade3c8ccc19c5375fa60716db300)), closes [#222](https://github.com/qmhc/vite-plugin-dts/issues/222)
- ensure collect manual dts for js source files ([5b7c5e5](https://github.com/qmhc/vite-plugin-dts/commit/5b7c5e52c71e457b904dd2f28b430dc9db267cf7)), closes [#184](https://github.com/qmhc/vite-plugin-dts/issues/184)

# [3.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.3...v3.0.0) (2023-06-30)

### Bug Fixes

- correct path process when specify entryRoot ([fc15dac](https://github.com/qmhc/vite-plugin-dts/commit/fc15dacf0561fc598e25f6de435edf97d6edfdf1)), closes [#229](https://github.com/qmhc/vite-plugin-dts/issues/229) [#230](https://github.com/qmhc/vite-plugin-dts/issues/230)
- correct time cost recording ([57eb430](https://github.com/qmhc/vite-plugin-dts/commit/57eb4309aeec4b5773bfa10c6e48a41c2fd23c69))

### Features

- add strictOutput to limit output write ([07224d1](https://github.com/qmhc/vite-plugin-dts/commit/07224d15576ee6528c9068d8a80fcbbf502018f0))

# [3.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2023-06-27)

### Bug Fixes

- incorrect entryRoot when in single inner entry ([96d32d1](https://github.com/qmhc/vite-plugin-dts/commit/96d32d127b73d48ce192424c4596fe24a2d24619))
- promise A+ specification for `isPromise` method ([#228](https://github.com/qmhc/vite-plugin-dts/issues/228)) ([3454a35](https://github.com/qmhc/vite-plugin-dts/commit/3454a356683a97752b0161a0e5be0328aa55a4f3))

# [3.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.3.0...v3.0.0-beta.2) (2023-06-27)

### Features

- transfer to use Volar, support Rollup, improve watch mode ([#226](https://github.com/qmhc/vite-plugin-dts/issues/226)) ([bb7949c](https://github.com/qmhc/vite-plugin-dts/commit/bb7949c841141b2305640d953be4dddf45ce7d1a))

### BREAKING CHANGES

- Deprecated options: `noEmitOnError`, `skipDiagnostics`
  and `libFolderPath`. Rename options: `outputDir` -> `outDir`,
  `tsConfigFilePath` -> `tsconfigPath`.

# [2.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.1.0...v2.3.0) (2023-04-17)

### Features

- compatible with svelte ([#197](https://github.com/qmhc/vite-plugin-dts/issues/197)) ([5d38517](https://github.com/qmhc/vite-plugin-dts/commit/5d38517ee16fdfc2009725b9146bfe38c49d1709))
- supports multiple extends in tsconfig.json ([#202](https://github.com/qmhc/vite-plugin-dts/issues/202)) ([9fdac66](https://github.com/qmhc/vite-plugin-dts/commit/9fdac66c0cfd827791208a31fbbefd1fad4ac2bf)), closes [#200](https://github.com/qmhc/vite-plugin-dts/issues/200)

# [2.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.2...v2.1.0) (2023-03-08)

### Features

- add bundledPackages configuration ([#186](https://github.com/qmhc/vite-plugin-dts/issues/186)) ([8997680](https://github.com/qmhc/vite-plugin-dts/commit/8997680776d8f35ae5248cc73b2d6a734e5dbc4a))

## [2.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.1...v2.0.2) (2023-02-23)

### Bug Fixes

- recursively resolve extended tsconfig path ([#181](https://github.com/qmhc/vite-plugin-dts/issues/181)) ([7ca8502](https://github.com/qmhc/vite-plugin-dts/commit/7ca85026e9a3e345c334222af5ffa823bda380a7))

## [2.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0...v2.0.1) (2023-02-23)

### Bug Fixes

- **vue:** correctly remove components for normal script ([6dbd9af](https://github.com/qmhc/vite-plugin-dts/commit/6dbd9af3bbd8175ef8a1cee4054ba38f330eef0c))
- **vue:** error when parse no argument function ([4db63b4](https://github.com/qmhc/vite-plugin-dts/commit/4db63b4b1b48686146f07e7e69dcbd4a82b33efb))

# [2.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.3...v2.0.0) (2023-02-23)

### Bug Fixes

- ensure watch all the files defined in include ([42a755c](https://github.com/qmhc/vite-plugin-dts/commit/42a755cf502cdfa8dc9dab0f600e8cc2a46eec18)), closes [#151](https://github.com/qmhc/vite-plugin-dts/issues/151)
- incorrect path resolve when copy dts source files ([434f69e](https://github.com/qmhc/vite-plugin-dts/commit/434f69e9629db5b2e74e609ffbc5f9cd436c1177)), closes [#179](https://github.com/qmhc/vite-plugin-dts/issues/179)
- **react:** unlimited init order when using with react plugin ([92b82ff](https://github.com/qmhc/vite-plugin-dts/commit/92b82ff47e0480c86c76e298feaa7cea8e06f7fa)), closes [#148](https://github.com/qmhc/vite-plugin-dts/issues/148)

### BREAKING CHANGES

- `copyDtsFiles` option now default to false.

# [2.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2023-02-21)

### Bug Fixes

- support manually create dts for source file ([2174868](https://github.com/qmhc/vite-plugin-dts/commit/2174868158766fd16a72f9f44b979d2c62d8ab07)), closes [#178](https://github.com/qmhc/vite-plugin-dts/issues/178)

### Features

- support parse types entry from exports in package.json ([f033cf8](https://github.com/qmhc/vite-plugin-dts/commit/f033cf876b51d7e11f1aa562567f3fd1f97d04f5))

# [2.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2023-02-20)

### Bug Fixes

- should re-transform when file changed in watch mode ([eafdd3c](https://github.com/qmhc/vite-plugin-dts/commit/eafdd3ce7d6757f93a378130b8e34f41e17e4004)), closes [#99](https://github.com/qmhc/vite-plugin-dts/issues/99)
- **vue:** preprocess not direct exported component ([8bd769e](https://github.com/qmhc/vite-plugin-dts/commit/8bd769e013f845a8e486d354d9f8517bd7b02e72))

### Features

- support specify log level of plugin ([2c1aeb0](https://github.com/qmhc/vite-plugin-dts/commit/2c1aeb01637aa4511f4e4c26b891b6e7ea235d50)), closes [#177](https://github.com/qmhc/vite-plugin-dts/issues/177)

# [2.0.0-beta.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2023-02-17)

### Bug Fixes

- **vue:** conversion error when using outside ts props ([25307cf](https://github.com/qmhc/vite-plugin-dts/commit/25307cf6ef89aa8501c8c35ff8ca519021adafea)), closes [#175](https://github.com/qmhc/vite-plugin-dts/issues/175)
- **vue:** remove components option before inferring ([90f8ac1](https://github.com/qmhc/vite-plugin-dts/commit/90f8ac160412de418bc7dc31c97f4ca7daa524ca))

# [2.0.0-beta.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.3...v2.0.0-beta.0) (2023-02-16)

### Bug Fixes

- override composite for root tsconfig ([df1d0f4](https://github.com/qmhc/vite-plugin-dts/commit/df1d0f42d0d9d9341d7766f5c147e7e3fa3733cf)), closes [#153](https://github.com/qmhc/vite-plugin-dts/issues/153)
- **vue:** ignore css vars when compile ([6d2369a](https://github.com/qmhc/vite-plugin-dts/commit/6d2369afe31c18b3dff45296d74b90aba86bb656)), closes [#167](https://github.com/qmhc/vite-plugin-dts/issues/167)

### Features

- **vue:** accurate types inferring for exposed and props ([#173](https://github.com/qmhc/vite-plugin-dts/issues/173)) ([c25448c](https://github.com/qmhc/vite-plugin-dts/commit/c25448c90f3b3969d51dbfa31ad5dc3ce2a9a2aa))

## [1.7.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.2...v1.7.3) (2023-02-14)

### Bug Fixes

- incorrect compilerOptions when rollup dts ([9dd8d9c](https://github.com/qmhc/vite-plugin-dts/commit/9dd8d9c41bed7f79e24ee890c1f28d867346326e)), closes [#171](https://github.com/qmhc/vite-plugin-dts/issues/171)
- normalize `mts` and `cts` declaration files extension ([410288a](https://github.com/qmhc/vite-plugin-dts/commit/410288ac65d7fb4a3065d93c6d7be9e2a8dd3f77)), closes [#169](https://github.com/qmhc/vite-plugin-dts/issues/169)

## [1.7.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.1...v1.7.2) (2023-01-31)

### Bug Fixes

- correct .d.ts extension in multiple outputs ([5c9709c](https://github.com/qmhc/vite-plugin-dts/commit/5c9709c4082ee36f2f28b4ad6e21b846aa27d5d6)), closes [#144](https://github.com/qmhc/vite-plugin-dts/issues/144)
- insertTypesEntry config supports publishConfig.types ([#164](https://github.com/qmhc/vite-plugin-dts/issues/164)) ([dae4ef9](https://github.com/qmhc/vite-plugin-dts/commit/dae4ef9de1175cf5bdc5a7dedfa60d7bab381dba))
- mark typescript as external dependency ([#160](https://github.com/qmhc/vite-plugin-dts/issues/160)) ([31e10d4](https://github.com/qmhc/vite-plugin-dts/commit/31e10d4ec2a37148ad63fdfb141264d6c4966135))

## [1.7.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.0...v1.7.1) (2022-11-14)

### Bug Fixes

- ensure exulde working when transform ([aea8ebd](https://github.com/qmhc/vite-plugin-dts/commit/aea8ebdc4eac489bc62ccebf3552421bd43d318c)), closes [#143](https://github.com/qmhc/vite-plugin-dts/issues/143) [#140](https://github.com/qmhc/vite-plugin-dts/issues/140) [#97](https://github.com/qmhc/vite-plugin-dts/issues/97)
- import vite plugin type via dynamic import ([8bd73c8](https://github.com/qmhc/vite-plugin-dts/commit/8bd73c8fae010ba0d32df8b144345b7f641a6085)), closes [#139](https://github.com/qmhc/vite-plugin-dts/issues/139)

# [1.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.6...v1.7.0) (2022-11-07)

### Bug Fixes

- compiler missing plugin `decorators-legacy` ([#138](https://github.com/qmhc/vite-plugin-dts/issues/138)) ([717af2f](https://github.com/qmhc/vite-plugin-dts/commit/717af2f4bc1b5bd549339179bc5b75dbbd9a348a))
- derprecate logDiagnostics option ([e405328](https://github.com/qmhc/vite-plugin-dts/commit/e405328f64870919a3ee4100fac087870ed4662e))
- incorrect compiler address resolution ([#133](https://github.com/qmhc/vite-plugin-dts/issues/133)) ([01cc125](https://github.com/qmhc/vite-plugin-dts/commit/01cc125ea98b1994e364487f73d71b0cb6ebcdbf))

### Features

- support customize typescript lib path ([27b83f3](https://github.com/qmhc/vite-plugin-dts/commit/27b83f3423f50307852257f3747c112f2f3cd325)), closes [#134](https://github.com/qmhc/vite-plugin-dts/issues/134)
- support multiple entries for lib mode ([1fafe54](https://github.com/qmhc/vite-plugin-dts/commit/1fafe54991431ce86a404ecb7e179ef1aa8aff0a)), closes [#136](https://github.com/qmhc/vite-plugin-dts/issues/136)

## [1.6.6](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.5...v1.6.6) (2022-10-13)

### Bug Fixes

- adapt @microsoft/api-extractor 7.33+ ([5acb4be](https://github.com/qmhc/vite-plugin-dts/commit/5acb4be4d1e4fe41e42a38ec9e92eeeb6f3a9c15))
- always ship included dts files into soure ([fc345e3](https://github.com/qmhc/vite-plugin-dts/commit/fc345e31b79fd7ca40581727d1964f80d1b9db82)), closes [#126](https://github.com/qmhc/vite-plugin-dts/issues/126)

## [1.6.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.4...v1.6.5) (2022-10-06)

### Bug Fixes

- remove pnpm limitation in preinstall to support npm@6 ([d7167b8](https://github.com/qmhc/vite-plugin-dts/commit/d7167b83381c54075e0e9114c07fe9451b6ffa2d)), closes [#123](https://github.com/qmhc/vite-plugin-dts/issues/123)

## [1.6.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.3...v1.6.4) (2022-09-30)

### Bug Fixes

- patch cjs vars for esm scope ([57e093d](https://github.com/qmhc/vite-plugin-dts/commit/57e093d734e4b81bbeeecbd694b269cca698f914)), closes [#119](https://github.com/qmhc/vite-plugin-dts/issues/119) [#122](https://github.com/qmhc/vite-plugin-dts/issues/122)

## [1.6.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.2...v1.6.3) (2022-09-30)

### Bug Fixes

- both support cjs and esm(using by tsx) ([38bd6a6](https://github.com/qmhc/vite-plugin-dts/commit/38bd6a6789fe375dd5da0aec1ea9b6816751719a))

## [1.6.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.1...v1.6.2) (2022-09-30)

### Bug Fixes

- ensure generate dts for type only files ([f3f4919](https://github.com/qmhc/vite-plugin-dts/commit/f3f4919fa441a27b7d842f1e64dd8d711bd05ec9)), closes [#118](https://github.com/qmhc/vite-plugin-dts/issues/118)

## [1.6.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.0...v1.6.1) (2022-09-28)

### Bug Fixes

- path error in cjs running ([0832af4](https://github.com/qmhc/vite-plugin-dts/commit/0832af4ab49d8166e14b6897bb1538ec6ddf3bb5))

# [1.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.5.0...v1.6.0) (2022-09-28)

### Bug Fixes

- correct compilerOptions.outDir for project init ([8699219](https://github.com/qmhc/vite-plugin-dts/commit/86992194411017e75b1d17c3f72d631267ec187b))
- type error occurred while define `defineProps` retruns as `props` ([41eb53a](https://github.com/qmhc/vite-plugin-dts/commit/41eb53a4da681d2c809dc8a7674a03284acbea02)), closes [#113](https://github.com/qmhc/vite-plugin-dts/issues/113)

### Features

- skip write file when `beforeWriteFile` return exact `false` ([9404ebc](https://github.com/qmhc/vite-plugin-dts/commit/9404ebc811b919a59a21b954d4ba4d43be255390)), closes [#110](https://github.com/qmhc/vite-plugin-dts/issues/110)

# [1.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.1...v1.5.0) (2022-09-11)

### Features

- improve aliasesExclude to support more flexible definition ([f652523](https://github.com/qmhc/vite-plugin-dts/commit/f6525235758b0d29347feb7f21a5085dc81b13a4)), closes [#93](https://github.com/qmhc/vite-plugin-dts/issues/93)

## [1.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.0...v1.4.1) (2022-08-01)

### Bug Fixes

- includes `extends` field when parse tsconfig.json ([#96](https://github.com/qmhc/vite-plugin-dts/issues/96)) ([2631de0](https://github.com/qmhc/vite-plugin-dts/commit/2631de0725e89083752fd590ff604f3f763abd3a))

# [1.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.1...v1.4.0) (2022-07-20)

### Bug Fixes

- ensure emit dts when no script sfc in vue component ([869a466](https://github.com/qmhc/vite-plugin-dts/commit/869a4662af2e690b2e1e63faf941a9e1343dd6ea)), closes [#88](https://github.com/qmhc/vite-plugin-dts/issues/88)

### Features

- support vue 2.7 ([c4e2c4b](https://github.com/qmhc/vite-plugin-dts/commit/c4e2c4b479da837ab697220284ac3c54e89c54a0)), closes [#87](https://github.com/qmhc/vite-plugin-dts/issues/87)

## [1.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.0...v1.3.1) (2022-07-18)

### Bug Fixes

- dynamiclly adjust the exports of inserted index file ([abc9431](https://github.com/qmhc/vite-plugin-dts/commit/abc943143b97dbec0935b62171b16faeebd6fbf4)), closes [#81](https://github.com/qmhc/vite-plugin-dts/issues/81) [#86](https://github.com/qmhc/vite-plugin-dts/issues/86)
- missing inserted entry when multiple outputs ([39ff8ab](https://github.com/qmhc/vite-plugin-dts/commit/39ff8abc0e1dda232c3cf1e6f25ff8daddb37acb))

# [1.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.1...v1.3.0) (2022-07-13)

### Bug Fixes

- aliasesExclude not work when includes empty value ([#85](https://github.com/qmhc/vite-plugin-dts/issues/85)) ([8b9b9aa](https://github.com/qmhc/vite-plugin-dts/commit/8b9b9aa4e9d1c4fa84a2945f4f2421c9269240ff))
- correct type files generate when root is set ([#68](https://github.com/qmhc/vite-plugin-dts/issues/68)) ([0b491bd](https://github.com/qmhc/vite-plugin-dts/commit/0b491bd3720c5b6065dd00a00f9b95e39bf6c8fe))

### Features

- support multiple output dirs ([cd19ee7](https://github.com/qmhc/vite-plugin-dts/commit/cd19ee7f4cf25906a3ffcd89a6c93baf7c7266ed))

## [1.2.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.0...v1.2.1) (2022-07-05)

### Bug Fixes

- add parser plugins param for vue compiler ([7d6bd16](https://github.com/qmhc/vite-plugin-dts/commit/7d6bd16af88701152bf8847e160acf6169bd0918)), closes [#78](https://github.com/qmhc/vite-plugin-dts/issues/78)
- insert entry fail when no default export in source entry ([#82](https://github.com/qmhc/vite-plugin-dts/issues/82)) ([1a4b161](https://github.com/qmhc/vite-plugin-dts/commit/1a4b161647ba1826c3bfa7c9ca5ee7ca4c3ee4bf))

# [1.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.1...v1.2.0) (2022-05-24)

### Bug Fixes

- support read typings form package.json ([6b1bb29](https://github.com/qmhc/vite-plugin-dts/commit/6b1bb2951512733091b950f5767bfe5a1cbe8992))

### Features

- add `aliasesExclude` option ([#75](https://github.com/qmhc/vite-plugin-dts/issues/75)) ([7588ba4](https://github.com/qmhc/vite-plugin-dts/commit/7588ba4755c19e25ca2482b95cb99a59621e693e)), closes [#73](https://github.com/qmhc/vite-plugin-dts/issues/73)
- support override compilerOptions when rollup up ([995612d](https://github.com/qmhc/vite-plugin-dts/commit/995612d5eafa6b610a9ab8826ee7b8691c673b4e)), closes [#74](https://github.com/qmhc/vite-plugin-dts/issues/74)

## [1.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.0...v1.1.1) (2022-04-25)

### Bug Fixes

- incorrect rollup entry path ([a9309d8](https://github.com/qmhc/vite-plugin-dts/commit/a9309d8ca8c0531d1579d3a541cd67ac0a37ce1b))

# [1.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.5...v1.1.0) (2022-04-18)

### Bug Fixes

- lose the type of entry export default ([50f55de](https://github.com/qmhc/vite-plugin-dts/commit/50f55de3ec89d7995056c428a37d16e0cd2a6a4a))

### Features

- support rollup dts files after output ([1d87b44](https://github.com/qmhc/vite-plugin-dts/commit/1d87b44dff3c54a5b1b983b060d3d0d4972c1d94))

## [1.0.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.4...v1.0.5) (2022-04-02)

### Bug Fixes

- entryRoot option not work ([#66](https://github.com/qmhc/vite-plugin-dts/issues/66)) ([bca6423](https://github.com/qmhc/vite-plugin-dts/commit/bca64236076a28dbdd7e6e373c46f3af3723b4e1))

## [1.0.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.3...v1.0.4) (2022-03-28)

### Bug Fixes

- transfer 'debug' to dependencies ([7af9232](https://github.com/qmhc/vite-plugin-dts/commit/7af9232e381f6d572a543706d640c6ecdb5a6c00))

## [1.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.2...v1.0.3) (2022-03-25)

### Bug Fixes

- **example:** cannot resolve types through symlinks ([0914a6a](https://github.com/qmhc/vite-plugin-dts/commit/0914a6ad8dde3514f94e586798d6d73a9c2ac165)), closes [#63](https://github.com/qmhc/vite-plugin-dts/issues/63)

## [1.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.1...v1.0.2) (2022-03-24)

### Bug Fixes

- incorrect entryRoot calculation in linux an mac ([0136990](https://github.com/qmhc/vite-plugin-dts/commit/01369903f484eb74ae6fa23b49537fa64d610706)), closes [#62](https://github.com/qmhc/vite-plugin-dts/issues/62)

## [1.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0...v1.0.1) (2022-03-22)

### Bug Fixes

- missing some libs defind in dependencies ([ab7960f](https://github.com/qmhc/vite-plugin-dts/commit/ab7960f0d957aad6945ef469274bca3e142baa87))

# [1.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.10...v1.0.0) (2022-03-22)

### Features

- support entryRoot option ([c939e35](https://github.com/qmhc/vite-plugin-dts/commit/c939e358dfecacaf2dfd2b0d42118c16462c260a)), closes [#59](https://github.com/qmhc/vite-plugin-dts/issues/59)

### BREAKING CHANGES

- The calculating output paths funtion of root option is
  assigned to entryRoot option, and currently will auto calculating the
  smallest public path as the default value for entryRoot option.

## [0.9.10](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.9...v0.9.10) (2022-03-12)

### Bug Fixes

- make default include same as tsconfig.json ([5ca7fc5](https://github.com/qmhc/vite-plugin-dts/commit/5ca7fc51ab321d4b25ce9856c0e52894c1264d44)), closes [#58](https://github.com/qmhc/vite-plugin-dts/issues/58)

## [0.9.9](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.8...v0.9.9) (2022-01-11)

### Bug Fixes

- should filter vite virtual files ([5fb24ba](https://github.com/qmhc/vite-plugin-dts/commit/5fb24ba2c40ad2ef81e45c33533aada3bb5aefd3)), closes [#50](https://github.com/qmhc/vite-plugin-dts/issues/50)

## [0.9.8](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.7...v0.9.8) (2022-01-10)

### Bug Fixes

- put `copyDtsFiles` option in use ([#53](https://github.com/qmhc/vite-plugin-dts/issues/53)) ([261700f](https://github.com/qmhc/vite-plugin-dts/commit/261700f80a60b3bc1f22f391e00d9999205fe0d2)), closes [#52](https://github.com/qmhc/vite-plugin-dts/issues/52)

## [0.9.7](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.6...v0.9.7) (2021-12-30)

### Bug Fixes

- inserted entry not through beforeWriteFile ([e16b9b1](https://github.com/qmhc/vite-plugin-dts/commit/e16b9b15c66df887bac0ca0b6be05e4d1f8628ed)), closes [#48](https://github.com/qmhc/vite-plugin-dts/issues/48)

## [0.9.6](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.5...v0.9.6) (2021-11-23)

### Bug Fixes

- aliases are not resolved when find ends with '/' ([f04aab2](https://github.com/qmhc/vite-plugin-dts/commit/f04aab21f9f6dc02316a9ff3a9cd43e90cd97828)), closes [#37](https://github.com/qmhc/vite-plugin-dts/issues/37)
- not equally transform dts source files ([ede5146](https://github.com/qmhc/vite-plugin-dts/commit/ede514649282aec786549d490e8127824913914c))

## [0.9.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.4...v0.9.5) (2021-11-21)

### Bug Fixes

- ensure dts source files through beforeWriteFile hook ([3265412](https://github.com/qmhc/vite-plugin-dts/commit/3265412e26dd8736fefab0cf99e920d01bb246c5)), closes [#43](https://github.com/qmhc/vite-plugin-dts/issues/43)

## [0.9.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.3...v0.9.4) (2021-11-10)

### Bug Fixes

- cannot resolve types defined in dts files ([666ca09](https://github.com/qmhc/vite-plugin-dts/commit/666ca0925075bed6926f648a210f37d56af9577b)), closes [#42](https://github.com/qmhc/vite-plugin-dts/issues/42)
- take unused error when using setup-script ([c4145b7](https://github.com/qmhc/vite-plugin-dts/commit/c4145b7352359c79b8ba7c01a1c4afeace4dbc7c))

## [0.9.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.2...v0.9.3) (2021-11-03)

### Bug Fixes

- support require for cjs exports ([cc5aff9](https://github.com/qmhc/vite-plugin-dts/commit/cc5aff9b9906fc87f6012fb66566fd1937a9381e)), closes [#39](https://github.com/qmhc/vite-plugin-dts/issues/39)

## [0.9.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.1...v0.9.2) (2021-10-20)

### Bug Fixes

- support optional @vue/compiler-sfc ([34e1958](https://github.com/qmhc/vite-plugin-dts/commit/34e19587aa64c802cfbd99c5c8018bde8d0e1e2f))

## [0.9.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.3...v0.9.1) (2021-10-18)

### Bug Fixes

- watch mode not update ts/js files ([32a5699](https://github.com/qmhc/vite-plugin-dts/commit/32a5699a9b4f5a24b2a2a870ced43850a0573f82))

### Features

- add afterBuild hook option ([#34](https://github.com/qmhc/vite-plugin-dts/issues/34)) ([e836689](https://github.com/qmhc/vite-plugin-dts/commit/e83668988dab189d185ed9637032f7f80ba1e4db))
- afterDiagnostic and afterBuild support async ([c92d548](https://github.com/qmhc/vite-plugin-dts/commit/c92d54826b81f50fbb38fa909df730b323b75b24))
- skip dependencies by default ([8ca3ed3](https://github.com/qmhc/vite-plugin-dts/commit/8ca3ed30dfcc23c2dd9822fe6ef460a6c832dfe2))

## [0.8.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.2...v0.8.3) (2021-10-11)

### Bug Fixes

- support tsconfig.json using comments ([6e6e446](https://github.com/qmhc/vite-plugin-dts/commit/6e6e44683592060ebd27d1c5712058f2f0f0aeb6)), closes [#31](https://github.com/qmhc/vite-plugin-dts/issues/31)

## [0.8.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.1...v0.8.2) (2021-09-30)

### Bug Fixes

- create correct source for tsx/jsx script ([#29](https://github.com/qmhc/vite-plugin-dts/issues/29)) ([109721e](https://github.com/qmhc/vite-plugin-dts/commit/109721e89007cd702fe73fded44cc6b7efeef46e))

## [0.8.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.0...v0.8.1) (2021-09-22)

### Bug Fixes

- declarationDir make no file generated ([3313a19](https://github.com/qmhc/vite-plugin-dts/commit/3313a19da669bda7fa8fff3a5211652bc22e7413)), closes [#27](https://github.com/qmhc/vite-plugin-dts/issues/27)
- rewrite noEmit option when init porject ([735d26b](https://github.com/qmhc/vite-plugin-dts/commit/735d26b3cad9a90dd272a08448d238045306a1ba)), closes [#28](https://github.com/qmhc/vite-plugin-dts/issues/28)

# [0.8.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.7.0...v0.8.0) (2021-09-13)

### Bug Fixes

- adapt vue@3.2.6+ setup script ([1b62755](https://github.com/qmhc/vite-plugin-dts/commit/1b62755947972a67a034830cc7478fa1a65924c4))
- ouput files out of include bounds ([e1cdedf](https://github.com/qmhc/vite-plugin-dts/commit/e1cdedfc8b41a311d2c22674bd132f23242482ac)), closes [#24](https://github.com/qmhc/vite-plugin-dts/issues/24)

### Features

- add afterDiagnostic option ([7d43ece](https://github.com/qmhc/vite-plugin-dts/commit/7d43ece8fcb9b71d645982a45b01cd9136c525d8)), closes [#22](https://github.com/qmhc/vite-plugin-dts/issues/22)
- support build watch mode ([a920d97](https://github.com/qmhc/vite-plugin-dts/commit/a920d97825dced453f5f70d8776944c02b50e14b)), closes [#5](https://github.com/qmhc/vite-plugin-dts/issues/5)

# [0.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.6.0...v0.7.0) (2021-08-23)

### Bug Fixes

- support using script-setup alongside script ([39517ad](https://github.com/qmhc/vite-plugin-dts/commit/39517ad7119a4b97be7a2d874b43cb73cfa95f07)), closes [#21](https://github.com/qmhc/vite-plugin-dts/issues/21)

### Features

- add noEmitOnError and logDiagnostics options ([8a840fe](https://github.com/qmhc/vite-plugin-dts/commit/8a840fe2692e07e8e881c58ca8f6887d08493cc9))

# [0.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.3...v0.6.0) (2021-08-14)

### Bug Fixes

- resolve alias when using default import ([3121d5b](https://github.com/qmhc/vite-plugin-dts/commit/3121d5bd56a6863e5175c95b00d7a3dedc0cff6d)), closes [#20](https://github.com/qmhc/vite-plugin-dts/issues/20)

### Features

- add copyDtsFiles option ([bdab8c4](https://github.com/qmhc/vite-plugin-dts/commit/bdab8c4b4efa894209c2edeffbbe4d79680eafe9)), closes [#19](https://github.com/qmhc/vite-plugin-dts/issues/19)

## [0.5.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.2...v0.5.3) (2021-07-22)

### Bug Fixes

- add allowJs option dynamically ([36f8de2](https://github.com/qmhc/vite-plugin-dts/commit/36f8de28c68cd52945faeb375cd2931c6ad0468a)), closes [#17](https://github.com/qmhc/vite-plugin-dts/issues/17)
- add js and jsx files when allowJs ([0e1e6f7](https://github.com/qmhc/vite-plugin-dts/commit/0e1e6f7c09c85e169568b2c77c66d452d04a28a2))

## [0.5.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.1...v0.5.2) (2021-07-01)

### Bug Fixes

- cannot require @vue/compiler-sfc in monorepo ([fd9b5c1](https://github.com/qmhc/vite-plugin-dts/commit/fd9b5c1c018feb87e374cdf6671b7b8be14e775b)), closes [#14](https://github.com/qmhc/vite-plugin-dts/issues/14)

## [0.5.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.0...v0.5.1) (2021-06-18)

### Bug Fixes

- support insert entry from '.tsx' file ([e38b7c4](https://github.com/qmhc/vite-plugin-dts/commit/e38b7c4686a8d7405583a97078e97fbef4757da6))

# [0.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.3...v0.5.0) (2021-06-15)

### Bug Fixes

- ignore none export files ([f9c41bc](https://github.com/qmhc/vite-plugin-dts/commit/f9c41bc4e2fd498b53aa366a5f8f2a57589b6176))
- rename insertIndexEntry to insertTypesEntry ([c9d392e](https://github.com/qmhc/vite-plugin-dts/commit/c9d392ec3def98b541bb597c5ed38933b225fe5e))

### Features

- add clearPureImport option ([0357f69](https://github.com/qmhc/vite-plugin-dts/commit/0357f69485204f24d9830a4de59558a23eb66e19))
- defaults insert entry base on pkg.types ([9c71f28](https://github.com/qmhc/vite-plugin-dts/commit/9c71f28eac50d23a42d92bd79ac6d09f1be0544d))
- optional insert index type entry ([592a701](https://github.com/qmhc/vite-plugin-dts/commit/592a701d6213f955306df9de0c7f1d3243a28faa))

## [0.4.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.2...v0.4.3) (2021-06-11)

### Bug Fixes

- back off optional chaining and nullish coalescing ([8e09129](https://github.com/qmhc/vite-plugin-dts/commit/8e09129c1600a013a2c3c50983ab7f358216757f)), closes [#2](https://github.com/qmhc/vite-plugin-dts/issues/2)
- transform fs/promise to fs-extra ([1794b0b](https://github.com/qmhc/vite-plugin-dts/commit/1794b0b93baf4212b4efc5ef06a697adf70e4933)), closes [#4](https://github.com/qmhc/vite-plugin-dts/issues/4)

### Performance Improvements

- use menory result generate bundle ([858bf31](https://github.com/qmhc/vite-plugin-dts/commit/858bf317d16c995feb73e53339d61f7602e36484))

## [0.4.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.1...v0.4.2) (2021-06-09)

### Bug Fixes

- incomplete remove pure import ([a1fd54e](https://github.com/qmhc/vite-plugin-dts/commit/a1fd54e769f1b50ee5858d33879b2a6732625797))
- mamual set include and exclude ([b6fb510](https://github.com/qmhc/vite-plugin-dts/commit/b6fb5106206df9de83276687dd1451fa3d882067))
- more accurate normalize glob ([1d65c47](https://github.com/qmhc/vite-plugin-dts/commit/1d65c47811344a6b566a8dcf22cd22d9298d5a02))
- set rootDir if not set in compilerOptions ([a1d83d2](https://github.com/qmhc/vite-plugin-dts/commit/a1d83d2aa56a32ebef11b9d98fa508a6d9fbd412)), closes [#3](https://github.com/qmhc/vite-plugin-dts/issues/3)
- transform alias include dynamic imports ([a6919b4](https://github.com/qmhc/vite-plugin-dts/commit/a6919b4760cf5cbefbdad1ac674b8a8275dc27dd))
- transform alias include dynamic imports ([3a5511e](https://github.com/qmhc/vite-plugin-dts/commit/3a5511e3e0b961d7f4ac393da623502a186a0538))

## [0.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.0...v0.4.1) (2021-06-08)

### Bug Fixes

- dynamic import regexp endings include ']' and ')' ([e5f37a6](https://github.com/qmhc/vite-plugin-dts/commit/e5f37a6d9e232e268ea1b2ec2eadb6c7bc7d7115))

# [0.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.5...v0.4.0) (2021-06-08)

### Bug Fixes

- bundle only once for multiple formats ([be37fbf](https://github.com/qmhc/vite-plugin-dts/commit/be37fbfcbd03dd23c73908a2d7f2d019437e003a))

### Features

- bundle all from tsconfig include ([252554a](https://github.com/qmhc/vite-plugin-dts/commit/252554af1fa403af1ee00dba16a1c7938e7374c6))

### BREAKING CHANGES

- Deprecated include and exclude options

## [0.3.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.4...v0.3.5) (2021-06-08)

### Bug Fixes

- includes prue type export files ([1341359](https://github.com/qmhc/vite-plugin-dts/commit/1341359b9943fd961ec0d3d40d71252e77c73390))
- incorrect path in transform alias ([d686ff9](https://github.com/qmhc/vite-plugin-dts/commit/d686ff94157c400d7f235331a47fbb9d452afeb9))

## [0.3.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.3...v0.3.4) (2021-06-07)

### Bug Fixes

- remove pure import ([fe241de](https://github.com/qmhc/vite-plugin-dts/commit/fe241de5b583cb5bf2dde83383a8a43e53724ce1))
- static import include relative path ([4065217](https://github.com/qmhc/vite-plugin-dts/commit/40652178b9071509269e6b66cbbbcb3562cf349d))

## [0.3.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.2...v0.3.3) (2021-06-07)

### Bug Fixes

- keep output relative to root not to entry dir ([e83ec64](https://github.com/qmhc/vite-plugin-dts/commit/e83ec643536f888166055a5495db3e2fd1030584))

### BREAKING CHANGES

- Ouput declaration structure no longer relative to entry dir

## [0.3.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.1...v0.3.2) (2021-06-07)

### Bug Fixes

- default root base on vite config ([787ebc1](https://github.com/qmhc/vite-plugin-dts/commit/787ebc175d07370628589a6fc73e325b29655a0b))

## [0.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.0...v0.3.1) (2021-06-06)

### Bug Fixes

- vue file explicit type lost ([d0d8803](https://github.com/qmhc/vite-plugin-dts/commit/d0d88038fb51d71dfb71ab4d0223600801d50349))

# [0.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.2.0...v0.3.0) (2021-06-06)

### Bug Fixes

- transform alias import to relative path ([6d5a2d5](https://github.com/qmhc/vite-plugin-dts/commit/6d5a2d5b5ba691b5572727cbf42b340d05964951))

### Features

- projectOptions refine to compilerOptions and tsConfigFilePath ([eb61113](https://github.com/qmhc/vite-plugin-dts/commit/eb611135446fff7bc82e3bd0d1d2b856a829de98))

### BREAKING CHANGES

- projectOptions no longer supported, the project init should be up to the plugin.

# [0.2.0](https://github.com/qmhc/vite-plugin-dts/compare/b2f0c0aa6eea5b48703248eca3294c5d845404ba...v0.2.0) (2021-06-05)

### Features

- add beforeWriteFile hook ([139e818](https://github.com/qmhc/vite-plugin-dts/commit/139e818cecfa80d4208b3f5ced55e7db57bf7e52))
- add outputDir option ([f289723](https://github.com/qmhc/vite-plugin-dts/commit/f289723672279795c0b96aaac3abf83dd8913b20))
- add transform dynamic import to static ([b2f0c0a](https://github.com/qmhc/vite-plugin-dts/commit/b2f0c0aa6eea5b48703248eca3294c5d845404ba))

## [3.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.1...v3.0.2) (2023-06-30)

### Bug Fixes

- error if exists same lib when transfrom dynamic imports ([c187278](https://github.com/qmhc/vite-plugin-dts/commit/c187278044972ecab077abada4a761398c74223c))

## [3.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0...v3.0.1) (2023-06-30)

### Bug Fixes

- correctly process default dynamic imports ([99105b0](https://github.com/qmhc/vite-plugin-dts/commit/99105b004325ade3c8ccc19c5375fa60716db300)), closes [#222](https://github.com/qmhc/vite-plugin-dts/issues/222)
- ensure collect manual dts for js source files ([5b7c5e5](https://github.com/qmhc/vite-plugin-dts/commit/5b7c5e52c71e457b904dd2f28b430dc9db267cf7)), closes [#184](https://github.com/qmhc/vite-plugin-dts/issues/184)

# [3.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.3...v3.0.0) (2023-06-30)

### Bug Fixes

- correct path process when specify entryRoot ([fc15dac](https://github.com/qmhc/vite-plugin-dts/commit/fc15dacf0561fc598e25f6de435edf97d6edfdf1)), closes [#229](https://github.com/qmhc/vite-plugin-dts/issues/229) [#230](https://github.com/qmhc/vite-plugin-dts/issues/230)
- correct time cost recording ([57eb430](https://github.com/qmhc/vite-plugin-dts/commit/57eb4309aeec4b5773bfa10c6e48a41c2fd23c69))

### Features

- add strictOutput to limit output write ([07224d1](https://github.com/qmhc/vite-plugin-dts/commit/07224d15576ee6528c9068d8a80fcbbf502018f0))

# [3.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2023-06-27)

### Bug Fixes

- incorrect entryRoot when in single inner entry ([96d32d1](https://github.com/qmhc/vite-plugin-dts/commit/96d32d127b73d48ce192424c4596fe24a2d24619))
- promise A+ specification for `isPromise` method ([#228](https://github.com/qmhc/vite-plugin-dts/issues/228)) ([3454a35](https://github.com/qmhc/vite-plugin-dts/commit/3454a356683a97752b0161a0e5be0328aa55a4f3))

# [3.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.3.0...v3.0.0-beta.2) (2023-06-27)

### Features

- transfer to use Volar, support Rollup, improve watch mode ([#226](https://github.com/qmhc/vite-plugin-dts/issues/226)) ([bb7949c](https://github.com/qmhc/vite-plugin-dts/commit/bb7949c841141b2305640d953be4dddf45ce7d1a))

### BREAKING CHANGES

- Deprecated options: `noEmitOnError`, `skipDiagnostics`
  and `libFolderPath`. Rename options: `outputDir` -> `outDir`,
  `tsConfigFilePath` -> `tsconfigPath`.

# [2.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.1.0...v2.3.0) (2023-04-17)

### Features

- compatible with svelte ([#197](https://github.com/qmhc/vite-plugin-dts/issues/197)) ([5d38517](https://github.com/qmhc/vite-plugin-dts/commit/5d38517ee16fdfc2009725b9146bfe38c49d1709))
- supports multiple extends in tsconfig.json ([#202](https://github.com/qmhc/vite-plugin-dts/issues/202)) ([9fdac66](https://github.com/qmhc/vite-plugin-dts/commit/9fdac66c0cfd827791208a31fbbefd1fad4ac2bf)), closes [#200](https://github.com/qmhc/vite-plugin-dts/issues/200)

# [2.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.2...v2.1.0) (2023-03-08)

### Features

- add bundledPackages configuration ([#186](https://github.com/qmhc/vite-plugin-dts/issues/186)) ([8997680](https://github.com/qmhc/vite-plugin-dts/commit/8997680776d8f35ae5248cc73b2d6a734e5dbc4a))

## [2.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.1...v2.0.2) (2023-02-23)

### Bug Fixes

- recursively resolve extended tsconfig path ([#181](https://github.com/qmhc/vite-plugin-dts/issues/181)) ([7ca8502](https://github.com/qmhc/vite-plugin-dts/commit/7ca85026e9a3e345c334222af5ffa823bda380a7))

## [2.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0...v2.0.1) (2023-02-23)

### Bug Fixes

- **vue:** correctly remove components for normal script ([6dbd9af](https://github.com/qmhc/vite-plugin-dts/commit/6dbd9af3bbd8175ef8a1cee4054ba38f330eef0c))
- **vue:** error when parse no argument function ([4db63b4](https://github.com/qmhc/vite-plugin-dts/commit/4db63b4b1b48686146f07e7e69dcbd4a82b33efb))

# [2.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.3...v2.0.0) (2023-02-23)

### Bug Fixes

- ensure watch all the files defined in include ([42a755c](https://github.com/qmhc/vite-plugin-dts/commit/42a755cf502cdfa8dc9dab0f600e8cc2a46eec18)), closes [#151](https://github.com/qmhc/vite-plugin-dts/issues/151)
- incorrect path resolve when copy dts source files ([434f69e](https://github.com/qmhc/vite-plugin-dts/commit/434f69e9629db5b2e74e609ffbc5f9cd436c1177)), closes [#179](https://github.com/qmhc/vite-plugin-dts/issues/179)
- **react:** unlimited init order when using with react plugin ([92b82ff](https://github.com/qmhc/vite-plugin-dts/commit/92b82ff47e0480c86c76e298feaa7cea8e06f7fa)), closes [#148](https://github.com/qmhc/vite-plugin-dts/issues/148)

### BREAKING CHANGES

- `copyDtsFiles` option now default to false.

# [2.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2023-02-21)

### Bug Fixes

- support manually create dts for source file ([2174868](https://github.com/qmhc/vite-plugin-dts/commit/2174868158766fd16a72f9f44b979d2c62d8ab07)), closes [#178](https://github.com/qmhc/vite-plugin-dts/issues/178)

### Features

- support parse types entry from exports in package.json ([f033cf8](https://github.com/qmhc/vite-plugin-dts/commit/f033cf876b51d7e11f1aa562567f3fd1f97d04f5))

# [2.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2023-02-20)

### Bug Fixes

- should re-transform when file changed in watch mode ([eafdd3c](https://github.com/qmhc/vite-plugin-dts/commit/eafdd3ce7d6757f93a378130b8e34f41e17e4004)), closes [#99](https://github.com/qmhc/vite-plugin-dts/issues/99)
- **vue:** preprocess not direct exported component ([8bd769e](https://github.com/qmhc/vite-plugin-dts/commit/8bd769e013f845a8e486d354d9f8517bd7b02e72))

### Features

- support specify log level of plugin ([2c1aeb0](https://github.com/qmhc/vite-plugin-dts/commit/2c1aeb01637aa4511f4e4c26b891b6e7ea235d50)), closes [#177](https://github.com/qmhc/vite-plugin-dts/issues/177)

# [2.0.0-beta.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2023-02-17)

### Bug Fixes

- **vue:** conversion error when using outside ts props ([25307cf](https://github.com/qmhc/vite-plugin-dts/commit/25307cf6ef89aa8501c8c35ff8ca519021adafea)), closes [#175](https://github.com/qmhc/vite-plugin-dts/issues/175)
- **vue:** remove components option before inferring ([90f8ac1](https://github.com/qmhc/vite-plugin-dts/commit/90f8ac160412de418bc7dc31c97f4ca7daa524ca))

# [2.0.0-beta.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.3...v2.0.0-beta.0) (2023-02-16)

### Bug Fixes

- override composite for root tsconfig ([df1d0f4](https://github.com/qmhc/vite-plugin-dts/commit/df1d0f42d0d9d9341d7766f5c147e7e3fa3733cf)), closes [#153](https://github.com/qmhc/vite-plugin-dts/issues/153)
- **vue:** ignore css vars when compile ([6d2369a](https://github.com/qmhc/vite-plugin-dts/commit/6d2369afe31c18b3dff45296d74b90aba86bb656)), closes [#167](https://github.com/qmhc/vite-plugin-dts/issues/167)

### Features

- **vue:** accurate types inferring for exposed and props ([#173](https://github.com/qmhc/vite-plugin-dts/issues/173)) ([c25448c](https://github.com/qmhc/vite-plugin-dts/commit/c25448c90f3b3969d51dbfa31ad5dc3ce2a9a2aa))

## [1.7.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.2...v1.7.3) (2023-02-14)

### Bug Fixes

- incorrect compilerOptions when rollup dts ([9dd8d9c](https://github.com/qmhc/vite-plugin-dts/commit/9dd8d9c41bed7f79e24ee890c1f28d867346326e)), closes [#171](https://github.com/qmhc/vite-plugin-dts/issues/171)
- normalize `mts` and `cts` declaration files extension ([410288a](https://github.com/qmhc/vite-plugin-dts/commit/410288ac65d7fb4a3065d93c6d7be9e2a8dd3f77)), closes [#169](https://github.com/qmhc/vite-plugin-dts/issues/169)

## [1.7.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.1...v1.7.2) (2023-01-31)

### Bug Fixes

- correct .d.ts extension in multiple outputs ([5c9709c](https://github.com/qmhc/vite-plugin-dts/commit/5c9709c4082ee36f2f28b4ad6e21b846aa27d5d6)), closes [#144](https://github.com/qmhc/vite-plugin-dts/issues/144)
- insertTypesEntry config supports publishConfig.types ([#164](https://github.com/qmhc/vite-plugin-dts/issues/164)) ([dae4ef9](https://github.com/qmhc/vite-plugin-dts/commit/dae4ef9de1175cf5bdc5a7dedfa60d7bab381dba))
- mark typescript as external dependency ([#160](https://github.com/qmhc/vite-plugin-dts/issues/160)) ([31e10d4](https://github.com/qmhc/vite-plugin-dts/commit/31e10d4ec2a37148ad63fdfb141264d6c4966135))

## [1.7.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.0...v1.7.1) (2022-11-14)

### Bug Fixes

- ensure exulde working when transform ([aea8ebd](https://github.com/qmhc/vite-plugin-dts/commit/aea8ebdc4eac489bc62ccebf3552421bd43d318c)), closes [#143](https://github.com/qmhc/vite-plugin-dts/issues/143) [#140](https://github.com/qmhc/vite-plugin-dts/issues/140) [#97](https://github.com/qmhc/vite-plugin-dts/issues/97)
- import vite plugin type via dynamic import ([8bd73c8](https://github.com/qmhc/vite-plugin-dts/commit/8bd73c8fae010ba0d32df8b144345b7f641a6085)), closes [#139](https://github.com/qmhc/vite-plugin-dts/issues/139)

# [1.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.6...v1.7.0) (2022-11-07)

### Bug Fixes

- compiler missing plugin `decorators-legacy` ([#138](https://github.com/qmhc/vite-plugin-dts/issues/138)) ([717af2f](https://github.com/qmhc/vite-plugin-dts/commit/717af2f4bc1b5bd549339179bc5b75dbbd9a348a))
- derprecate logDiagnostics option ([e405328](https://github.com/qmhc/vite-plugin-dts/commit/e405328f64870919a3ee4100fac087870ed4662e))
- incorrect compiler address resolution ([#133](https://github.com/qmhc/vite-plugin-dts/issues/133)) ([01cc125](https://github.com/qmhc/vite-plugin-dts/commit/01cc125ea98b1994e364487f73d71b0cb6ebcdbf))

### Features

- support customize typescript lib path ([27b83f3](https://github.com/qmhc/vite-plugin-dts/commit/27b83f3423f50307852257f3747c112f2f3cd325)), closes [#134](https://github.com/qmhc/vite-plugin-dts/issues/134)
- support multiple entries for lib mode ([1fafe54](https://github.com/qmhc/vite-plugin-dts/commit/1fafe54991431ce86a404ecb7e179ef1aa8aff0a)), closes [#136](https://github.com/qmhc/vite-plugin-dts/issues/136)

## [1.6.6](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.5...v1.6.6) (2022-10-13)

### Bug Fixes

- adapt @microsoft/api-extractor 7.33+ ([5acb4be](https://github.com/qmhc/vite-plugin-dts/commit/5acb4be4d1e4fe41e42a38ec9e92eeeb6f3a9c15))
- always ship included dts files into soure ([fc345e3](https://github.com/qmhc/vite-plugin-dts/commit/fc345e31b79fd7ca40581727d1964f80d1b9db82)), closes [#126](https://github.com/qmhc/vite-plugin-dts/issues/126)

## [1.6.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.4...v1.6.5) (2022-10-06)

### Bug Fixes

- remove pnpm limitation in preinstall to support npm@6 ([d7167b8](https://github.com/qmhc/vite-plugin-dts/commit/d7167b83381c54075e0e9114c07fe9451b6ffa2d)), closes [#123](https://github.com/qmhc/vite-plugin-dts/issues/123)

## [1.6.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.3...v1.6.4) (2022-09-30)

### Bug Fixes

- patch cjs vars for esm scope ([57e093d](https://github.com/qmhc/vite-plugin-dts/commit/57e093d734e4b81bbeeecbd694b269cca698f914)), closes [#119](https://github.com/qmhc/vite-plugin-dts/issues/119) [#122](https://github.com/qmhc/vite-plugin-dts/issues/122)

## [1.6.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.2...v1.6.3) (2022-09-30)

### Bug Fixes

- both support cjs and esm(using by tsx) ([38bd6a6](https://github.com/qmhc/vite-plugin-dts/commit/38bd6a6789fe375dd5da0aec1ea9b6816751719a))

## [1.6.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.1...v1.6.2) (2022-09-30)

### Bug Fixes

- ensure generate dts for type only files ([f3f4919](https://github.com/qmhc/vite-plugin-dts/commit/f3f4919fa441a27b7d842f1e64dd8d711bd05ec9)), closes [#118](https://github.com/qmhc/vite-plugin-dts/issues/118)

## [1.6.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.0...v1.6.1) (2022-09-28)

### Bug Fixes

- path error in cjs running ([0832af4](https://github.com/qmhc/vite-plugin-dts/commit/0832af4ab49d8166e14b6897bb1538ec6ddf3bb5))

# [1.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.5.0...v1.6.0) (2022-09-28)

### Bug Fixes

- correct compilerOptions.outDir for project init ([8699219](https://github.com/qmhc/vite-plugin-dts/commit/86992194411017e75b1d17c3f72d631267ec187b))
- type error occurred while define `defineProps` retruns as `props` ([41eb53a](https://github.com/qmhc/vite-plugin-dts/commit/41eb53a4da681d2c809dc8a7674a03284acbea02)), closes [#113](https://github.com/qmhc/vite-plugin-dts/issues/113)

### Features

- skip write file when `beforeWriteFile` return exact `false` ([9404ebc](https://github.com/qmhc/vite-plugin-dts/commit/9404ebc811b919a59a21b954d4ba4d43be255390)), closes [#110](https://github.com/qmhc/vite-plugin-dts/issues/110)

# [1.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.1...v1.5.0) (2022-09-11)

### Features

- improve aliasesExclude to support more flexible definition ([f652523](https://github.com/qmhc/vite-plugin-dts/commit/f6525235758b0d29347feb7f21a5085dc81b13a4)), closes [#93](https://github.com/qmhc/vite-plugin-dts/issues/93)

## [1.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.0...v1.4.1) (2022-08-01)

### Bug Fixes

- includes `extends` field when parse tsconfig.json ([#96](https://github.com/qmhc/vite-plugin-dts/issues/96)) ([2631de0](https://github.com/qmhc/vite-plugin-dts/commit/2631de0725e89083752fd590ff604f3f763abd3a))

# [1.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.1...v1.4.0) (2022-07-20)

### Bug Fixes

- ensure emit dts when no script sfc in vue component ([869a466](https://github.com/qmhc/vite-plugin-dts/commit/869a4662af2e690b2e1e63faf941a9e1343dd6ea)), closes [#88](https://github.com/qmhc/vite-plugin-dts/issues/88)

### Features

- support vue 2.7 ([c4e2c4b](https://github.com/qmhc/vite-plugin-dts/commit/c4e2c4b479da837ab697220284ac3c54e89c54a0)), closes [#87](https://github.com/qmhc/vite-plugin-dts/issues/87)

## [1.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.0...v1.3.1) (2022-07-18)

### Bug Fixes

- dynamiclly adjust the exports of inserted index file ([abc9431](https://github.com/qmhc/vite-plugin-dts/commit/abc943143b97dbec0935b62171b16faeebd6fbf4)), closes [#81](https://github.com/qmhc/vite-plugin-dts/issues/81) [#86](https://github.com/qmhc/vite-plugin-dts/issues/86)
- missing inserted entry when multiple outputs ([39ff8ab](https://github.com/qmhc/vite-plugin-dts/commit/39ff8abc0e1dda232c3cf1e6f25ff8daddb37acb))

# [1.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.1...v1.3.0) (2022-07-13)

### Bug Fixes

- aliasesExclude not work when includes empty value ([#85](https://github.com/qmhc/vite-plugin-dts/issues/85)) ([8b9b9aa](https://github.com/qmhc/vite-plugin-dts/commit/8b9b9aa4e9d1c4fa84a2945f4f2421c9269240ff))
- correct type files generate when root is set ([#68](https://github.com/qmhc/vite-plugin-dts/issues/68)) ([0b491bd](https://github.com/qmhc/vite-plugin-dts/commit/0b491bd3720c5b6065dd00a00f9b95e39bf6c8fe))

### Features

- support multiple output dirs ([cd19ee7](https://github.com/qmhc/vite-plugin-dts/commit/cd19ee7f4cf25906a3ffcd89a6c93baf7c7266ed))

## [1.2.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.0...v1.2.1) (2022-07-05)

### Bug Fixes

- add parser plugins param for vue compiler ([7d6bd16](https://github.com/qmhc/vite-plugin-dts/commit/7d6bd16af88701152bf8847e160acf6169bd0918)), closes [#78](https://github.com/qmhc/vite-plugin-dts/issues/78)
- insert entry fail when no default export in source entry ([#82](https://github.com/qmhc/vite-plugin-dts/issues/82)) ([1a4b161](https://github.com/qmhc/vite-plugin-dts/commit/1a4b161647ba1826c3bfa7c9ca5ee7ca4c3ee4bf))

# [1.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.1...v1.2.0) (2022-05-24)

### Bug Fixes

- support read typings form package.json ([6b1bb29](https://github.com/qmhc/vite-plugin-dts/commit/6b1bb2951512733091b950f5767bfe5a1cbe8992))

### Features

- add `aliasesExclude` option ([#75](https://github.com/qmhc/vite-plugin-dts/issues/75)) ([7588ba4](https://github.com/qmhc/vite-plugin-dts/commit/7588ba4755c19e25ca2482b95cb99a59621e693e)), closes [#73](https://github.com/qmhc/vite-plugin-dts/issues/73)
- support override compilerOptions when rollup up ([995612d](https://github.com/qmhc/vite-plugin-dts/commit/995612d5eafa6b610a9ab8826ee7b8691c673b4e)), closes [#74](https://github.com/qmhc/vite-plugin-dts/issues/74)

## [1.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.0...v1.1.1) (2022-04-25)

### Bug Fixes

- incorrect rollup entry path ([a9309d8](https://github.com/qmhc/vite-plugin-dts/commit/a9309d8ca8c0531d1579d3a541cd67ac0a37ce1b))

# [1.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.5...v1.1.0) (2022-04-18)

### Bug Fixes

- lose the type of entry export default ([50f55de](https://github.com/qmhc/vite-plugin-dts/commit/50f55de3ec89d7995056c428a37d16e0cd2a6a4a))

### Features

- support rollup dts files after output ([1d87b44](https://github.com/qmhc/vite-plugin-dts/commit/1d87b44dff3c54a5b1b983b060d3d0d4972c1d94))

## [1.0.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.4...v1.0.5) (2022-04-02)

### Bug Fixes

- entryRoot option not work ([#66](https://github.com/qmhc/vite-plugin-dts/issues/66)) ([bca6423](https://github.com/qmhc/vite-plugin-dts/commit/bca64236076a28dbdd7e6e373c46f3af3723b4e1))

## [1.0.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.3...v1.0.4) (2022-03-28)

### Bug Fixes

- transfer 'debug' to dependencies ([7af9232](https://github.com/qmhc/vite-plugin-dts/commit/7af9232e381f6d572a543706d640c6ecdb5a6c00))

## [1.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.2...v1.0.3) (2022-03-25)

### Bug Fixes

- **example:** cannot resolve types through symlinks ([0914a6a](https://github.com/qmhc/vite-plugin-dts/commit/0914a6ad8dde3514f94e586798d6d73a9c2ac165)), closes [#63](https://github.com/qmhc/vite-plugin-dts/issues/63)

## [1.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.1...v1.0.2) (2022-03-24)

### Bug Fixes

- incorrect entryRoot calculation in linux an mac ([0136990](https://github.com/qmhc/vite-plugin-dts/commit/01369903f484eb74ae6fa23b49537fa64d610706)), closes [#62](https://github.com/qmhc/vite-plugin-dts/issues/62)

## [1.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0...v1.0.1) (2022-03-22)

### Bug Fixes

- missing some libs defind in dependencies ([ab7960f](https://github.com/qmhc/vite-plugin-dts/commit/ab7960f0d957aad6945ef469274bca3e142baa87))

# [1.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.10...v1.0.0) (2022-03-22)

### Features

- support entryRoot option ([c939e35](https://github.com/qmhc/vite-plugin-dts/commit/c939e358dfecacaf2dfd2b0d42118c16462c260a)), closes [#59](https://github.com/qmhc/vite-plugin-dts/issues/59)

### BREAKING CHANGES

- The calculating output paths funtion of root option is
  assigned to entryRoot option, and currently will auto calculating the
  smallest public path as the default value for entryRoot option.

## [0.9.10](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.9...v0.9.10) (2022-03-12)

### Bug Fixes

- make default include same as tsconfig.json ([5ca7fc5](https://github.com/qmhc/vite-plugin-dts/commit/5ca7fc51ab321d4b25ce9856c0e52894c1264d44)), closes [#58](https://github.com/qmhc/vite-plugin-dts/issues/58)

## [0.9.9](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.8...v0.9.9) (2022-01-11)

### Bug Fixes

- should filter vite virtual files ([5fb24ba](https://github.com/qmhc/vite-plugin-dts/commit/5fb24ba2c40ad2ef81e45c33533aada3bb5aefd3)), closes [#50](https://github.com/qmhc/vite-plugin-dts/issues/50)

## [0.9.8](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.7...v0.9.8) (2022-01-10)

### Bug Fixes

- put `copyDtsFiles` option in use ([#53](https://github.com/qmhc/vite-plugin-dts/issues/53)) ([261700f](https://github.com/qmhc/vite-plugin-dts/commit/261700f80a60b3bc1f22f391e00d9999205fe0d2)), closes [#52](https://github.com/qmhc/vite-plugin-dts/issues/52)

## [0.9.7](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.6...v0.9.7) (2021-12-30)

### Bug Fixes

- inserted entry not through beforeWriteFile ([e16b9b1](https://github.com/qmhc/vite-plugin-dts/commit/e16b9b15c66df887bac0ca0b6be05e4d1f8628ed)), closes [#48](https://github.com/qmhc/vite-plugin-dts/issues/48)

## [0.9.6](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.5...v0.9.6) (2021-11-23)

### Bug Fixes

- aliases are not resolved when find ends with '/' ([f04aab2](https://github.com/qmhc/vite-plugin-dts/commit/f04aab21f9f6dc02316a9ff3a9cd43e90cd97828)), closes [#37](https://github.com/qmhc/vite-plugin-dts/issues/37)
- not equally transform dts source files ([ede5146](https://github.com/qmhc/vite-plugin-dts/commit/ede514649282aec786549d490e8127824913914c))

## [0.9.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.4...v0.9.5) (2021-11-21)

### Bug Fixes

- ensure dts source files through beforeWriteFile hook ([3265412](https://github.com/qmhc/vite-plugin-dts/commit/3265412e26dd8736fefab0cf99e920d01bb246c5)), closes [#43](https://github.com/qmhc/vite-plugin-dts/issues/43)

## [0.9.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.3...v0.9.4) (2021-11-10)

### Bug Fixes

- cannot resolve types defined in dts files ([666ca09](https://github.com/qmhc/vite-plugin-dts/commit/666ca0925075bed6926f648a210f37d56af9577b)), closes [#42](https://github.com/qmhc/vite-plugin-dts/issues/42)
- take unused error when using setup-script ([c4145b7](https://github.com/qmhc/vite-plugin-dts/commit/c4145b7352359c79b8ba7c01a1c4afeace4dbc7c))

## [0.9.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.2...v0.9.3) (2021-11-03)

### Bug Fixes

- support require for cjs exports ([cc5aff9](https://github.com/qmhc/vite-plugin-dts/commit/cc5aff9b9906fc87f6012fb66566fd1937a9381e)), closes [#39](https://github.com/qmhc/vite-plugin-dts/issues/39)

## [0.9.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.1...v0.9.2) (2021-10-20)

### Bug Fixes

- support optional @vue/compiler-sfc ([34e1958](https://github.com/qmhc/vite-plugin-dts/commit/34e19587aa64c802cfbd99c5c8018bde8d0e1e2f))

## [0.9.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.3...v0.9.1) (2021-10-18)

### Bug Fixes

- watch mode not update ts/js files ([32a5699](https://github.com/qmhc/vite-plugin-dts/commit/32a5699a9b4f5a24b2a2a870ced43850a0573f82))

### Features

- add afterBuild hook option ([#34](https://github.com/qmhc/vite-plugin-dts/issues/34)) ([e836689](https://github.com/qmhc/vite-plugin-dts/commit/e83668988dab189d185ed9637032f7f80ba1e4db))
- afterDiagnostic and afterBuild support async ([c92d548](https://github.com/qmhc/vite-plugin-dts/commit/c92d54826b81f50fbb38fa909df730b323b75b24))
- skip dependencies by default ([8ca3ed3](https://github.com/qmhc/vite-plugin-dts/commit/8ca3ed30dfcc23c2dd9822fe6ef460a6c832dfe2))

## [0.8.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.2...v0.8.3) (2021-10-11)

### Bug Fixes

- support tsconfig.json using comments ([6e6e446](https://github.com/qmhc/vite-plugin-dts/commit/6e6e44683592060ebd27d1c5712058f2f0f0aeb6)), closes [#31](https://github.com/qmhc/vite-plugin-dts/issues/31)

## [0.8.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.1...v0.8.2) (2021-09-30)

### Bug Fixes

- create correct source for tsx/jsx script ([#29](https://github.com/qmhc/vite-plugin-dts/issues/29)) ([109721e](https://github.com/qmhc/vite-plugin-dts/commit/109721e89007cd702fe73fded44cc6b7efeef46e))

## [0.8.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.0...v0.8.1) (2021-09-22)

### Bug Fixes

- declarationDir make no file generated ([3313a19](https://github.com/qmhc/vite-plugin-dts/commit/3313a19da669bda7fa8fff3a5211652bc22e7413)), closes [#27](https://github.com/qmhc/vite-plugin-dts/issues/27)
- rewrite noEmit option when init porject ([735d26b](https://github.com/qmhc/vite-plugin-dts/commit/735d26b3cad9a90dd272a08448d238045306a1ba)), closes [#28](https://github.com/qmhc/vite-plugin-dts/issues/28)

# [0.8.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.7.0...v0.8.0) (2021-09-13)

### Bug Fixes

- adapt vue@3.2.6+ setup script ([1b62755](https://github.com/qmhc/vite-plugin-dts/commit/1b62755947972a67a034830cc7478fa1a65924c4))
- ouput files out of include bounds ([e1cdedf](https://github.com/qmhc/vite-plugin-dts/commit/e1cdedfc8b41a311d2c22674bd132f23242482ac)), closes [#24](https://github.com/qmhc/vite-plugin-dts/issues/24)

### Features

- add afterDiagnostic option ([7d43ece](https://github.com/qmhc/vite-plugin-dts/commit/7d43ece8fcb9b71d645982a45b01cd9136c525d8)), closes [#22](https://github.com/qmhc/vite-plugin-dts/issues/22)
- support build watch mode ([a920d97](https://github.com/qmhc/vite-plugin-dts/commit/a920d97825dced453f5f70d8776944c02b50e14b)), closes [#5](https://github.com/qmhc/vite-plugin-dts/issues/5)

# [0.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.6.0...v0.7.0) (2021-08-23)

### Bug Fixes

- support using script-setup alongside script ([39517ad](https://github.com/qmhc/vite-plugin-dts/commit/39517ad7119a4b97be7a2d874b43cb73cfa95f07)), closes [#21](https://github.com/qmhc/vite-plugin-dts/issues/21)

### Features

- add noEmitOnError and logDiagnostics options ([8a840fe](https://github.com/qmhc/vite-plugin-dts/commit/8a840fe2692e07e8e881c58ca8f6887d08493cc9))

# [0.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.3...v0.6.0) (2021-08-14)

### Bug Fixes

- resolve alias when using default import ([3121d5b](https://github.com/qmhc/vite-plugin-dts/commit/3121d5bd56a6863e5175c95b00d7a3dedc0cff6d)), closes [#20](https://github.com/qmhc/vite-plugin-dts/issues/20)

### Features

- add copyDtsFiles option ([bdab8c4](https://github.com/qmhc/vite-plugin-dts/commit/bdab8c4b4efa894209c2edeffbbe4d79680eafe9)), closes [#19](https://github.com/qmhc/vite-plugin-dts/issues/19)

## [0.5.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.2...v0.5.3) (2021-07-22)

### Bug Fixes

- add allowJs option dynamically ([36f8de2](https://github.com/qmhc/vite-plugin-dts/commit/36f8de28c68cd52945faeb375cd2931c6ad0468a)), closes [#17](https://github.com/qmhc/vite-plugin-dts/issues/17)
- add js and jsx files when allowJs ([0e1e6f7](https://github.com/qmhc/vite-plugin-dts/commit/0e1e6f7c09c85e169568b2c77c66d452d04a28a2))

## [0.5.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.1...v0.5.2) (2021-07-01)

### Bug Fixes

- cannot require @vue/compiler-sfc in monorepo ([fd9b5c1](https://github.com/qmhc/vite-plugin-dts/commit/fd9b5c1c018feb87e374cdf6671b7b8be14e775b)), closes [#14](https://github.com/qmhc/vite-plugin-dts/issues/14)

## [0.5.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.0...v0.5.1) (2021-06-18)

### Bug Fixes

- support insert entry from '.tsx' file ([e38b7c4](https://github.com/qmhc/vite-plugin-dts/commit/e38b7c4686a8d7405583a97078e97fbef4757da6))

# [0.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.3...v0.5.0) (2021-06-15)

### Bug Fixes

- ignore none export files ([f9c41bc](https://github.com/qmhc/vite-plugin-dts/commit/f9c41bc4e2fd498b53aa366a5f8f2a57589b6176))
- rename insertIndexEntry to insertTypesEntry ([c9d392e](https://github.com/qmhc/vite-plugin-dts/commit/c9d392ec3def98b541bb597c5ed38933b225fe5e))

### Features

- add clearPureImport option ([0357f69](https://github.com/qmhc/vite-plugin-dts/commit/0357f69485204f24d9830a4de59558a23eb66e19))
- defaults insert entry base on pkg.types ([9c71f28](https://github.com/qmhc/vite-plugin-dts/commit/9c71f28eac50d23a42d92bd79ac6d09f1be0544d))
- optional insert index type entry ([592a701](https://github.com/qmhc/vite-plugin-dts/commit/592a701d6213f955306df9de0c7f1d3243a28faa))

## [0.4.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.2...v0.4.3) (2021-06-11)

### Bug Fixes

- back off optional chaining and nullish coalescing ([8e09129](https://github.com/qmhc/vite-plugin-dts/commit/8e09129c1600a013a2c3c50983ab7f358216757f)), closes [#2](https://github.com/qmhc/vite-plugin-dts/issues/2)
- transform fs/promise to fs-extra ([1794b0b](https://github.com/qmhc/vite-plugin-dts/commit/1794b0b93baf4212b4efc5ef06a697adf70e4933)), closes [#4](https://github.com/qmhc/vite-plugin-dts/issues/4)

### Performance Improvements

- use menory result generate bundle ([858bf31](https://github.com/qmhc/vite-plugin-dts/commit/858bf317d16c995feb73e53339d61f7602e36484))

## [0.4.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.1...v0.4.2) (2021-06-09)

### Bug Fixes

- incomplete remove pure import ([a1fd54e](https://github.com/qmhc/vite-plugin-dts/commit/a1fd54e769f1b50ee5858d33879b2a6732625797))
- mamual set include and exclude ([b6fb510](https://github.com/qmhc/vite-plugin-dts/commit/b6fb5106206df9de83276687dd1451fa3d882067))
- more accurate normalize glob ([1d65c47](https://github.com/qmhc/vite-plugin-dts/commit/1d65c47811344a6b566a8dcf22cd22d9298d5a02))
- set rootDir if not set in compilerOptions ([a1d83d2](https://github.com/qmhc/vite-plugin-dts/commit/a1d83d2aa56a32ebef11b9d98fa508a6d9fbd412)), closes [#3](https://github.com/qmhc/vite-plugin-dts/issues/3)
- transform alias include dynamic imports ([a6919b4](https://github.com/qmhc/vite-plugin-dts/commit/a6919b4760cf5cbefbdad1ac674b8a8275dc27dd))
- transform alias include dynamic imports ([3a5511e](https://github.com/qmhc/vite-plugin-dts/commit/3a5511e3e0b961d7f4ac393da623502a186a0538))

## [0.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.0...v0.4.1) (2021-06-08)

### Bug Fixes

- dynamic import regexp endings include ']' and ')' ([e5f37a6](https://github.com/qmhc/vite-plugin-dts/commit/e5f37a6d9e232e268ea1b2ec2eadb6c7bc7d7115))

# [0.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.5...v0.4.0) (2021-06-08)

### Bug Fixes

- bundle only once for multiple formats ([be37fbf](https://github.com/qmhc/vite-plugin-dts/commit/be37fbfcbd03dd23c73908a2d7f2d019437e003a))

### Features

- bundle all from tsconfig include ([252554a](https://github.com/qmhc/vite-plugin-dts/commit/252554af1fa403af1ee00dba16a1c7938e7374c6))

### BREAKING CHANGES

- Deprecated include and exclude options

## [0.3.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.4...v0.3.5) (2021-06-08)

### Bug Fixes

- includes prue type export files ([1341359](https://github.com/qmhc/vite-plugin-dts/commit/1341359b9943fd961ec0d3d40d71252e77c73390))
- incorrect path in transform alias ([d686ff9](https://github.com/qmhc/vite-plugin-dts/commit/d686ff94157c400d7f235331a47fbb9d452afeb9))

## [0.3.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.3...v0.3.4) (2021-06-07)

### Bug Fixes

- remove pure import ([fe241de](https://github.com/qmhc/vite-plugin-dts/commit/fe241de5b583cb5bf2dde83383a8a43e53724ce1))
- static import include relative path ([4065217](https://github.com/qmhc/vite-plugin-dts/commit/40652178b9071509269e6b66cbbbcb3562cf349d))

## [0.3.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.2...v0.3.3) (2021-06-07)

### Bug Fixes

- keep output relative to root not to entry dir ([e83ec64](https://github.com/qmhc/vite-plugin-dts/commit/e83ec643536f888166055a5495db3e2fd1030584))

### BREAKING CHANGES

- Ouput declaration structure no longer relative to entry dir

## [0.3.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.1...v0.3.2) (2021-06-07)

### Bug Fixes

- default root base on vite config ([787ebc1](https://github.com/qmhc/vite-plugin-dts/commit/787ebc175d07370628589a6fc73e325b29655a0b))

## [0.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.0...v0.3.1) (2021-06-06)

### Bug Fixes

- vue file explicit type lost ([d0d8803](https://github.com/qmhc/vite-plugin-dts/commit/d0d88038fb51d71dfb71ab4d0223600801d50349))

# [0.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.2.0...v0.3.0) (2021-06-06)

### Bug Fixes

- transform alias import to relative path ([6d5a2d5](https://github.com/qmhc/vite-plugin-dts/commit/6d5a2d5b5ba691b5572727cbf42b340d05964951))

### Features

- projectOptions refine to compilerOptions and tsConfigFilePath ([eb61113](https://github.com/qmhc/vite-plugin-dts/commit/eb611135446fff7bc82e3bd0d1d2b856a829de98))

### BREAKING CHANGES

- projectOptions no longer supported, the project init should be up to the plugin.

# [0.2.0](https://github.com/qmhc/vite-plugin-dts/compare/b2f0c0aa6eea5b48703248eca3294c5d845404ba...v0.2.0) (2021-06-05)

### Features

- add beforeWriteFile hook ([139e818](https://github.com/qmhc/vite-plugin-dts/commit/139e818cecfa80d4208b3f5ced55e7db57bf7e52))
- add outputDir option ([f289723](https://github.com/qmhc/vite-plugin-dts/commit/f289723672279795c0b96aaac3abf83dd8913b20))
- add transform dynamic import to static ([b2f0c0a](https://github.com/qmhc/vite-plugin-dts/commit/b2f0c0aa6eea5b48703248eca3294c5d845404ba))

## [3.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0...v3.0.1) (2023-06-30)

### Bug Fixes

- correctly process default dynamic imports ([99105b0](https://github.com/qmhc/vite-plugin-dts/commit/99105b004325ade3c8ccc19c5375fa60716db300)), closes [#222](https://github.com/qmhc/vite-plugin-dts/issues/222)
- ensure collect manual dts for js source files ([5b7c5e5](https://github.com/qmhc/vite-plugin-dts/commit/5b7c5e52c71e457b904dd2f28b430dc9db267cf7)), closes [#184](https://github.com/qmhc/vite-plugin-dts/issues/184)

# [3.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.3...v3.0.0) (2023-06-30)

### Bug Fixes

- correct path process when specify entryRoot ([fc15dac](https://github.com/qmhc/vite-plugin-dts/commit/fc15dacf0561fc598e25f6de435edf97d6edfdf1)), closes [#229](https://github.com/qmhc/vite-plugin-dts/issues/229) [#230](https://github.com/qmhc/vite-plugin-dts/issues/230)
- correct time cost recording ([57eb430](https://github.com/qmhc/vite-plugin-dts/commit/57eb4309aeec4b5773bfa10c6e48a41c2fd23c69))

### Features

- add strictOutput to limit output write ([07224d1](https://github.com/qmhc/vite-plugin-dts/commit/07224d15576ee6528c9068d8a80fcbbf502018f0))

# [3.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2023-06-27)

### Bug Fixes

- incorrect entryRoot when in single inner entry ([96d32d1](https://github.com/qmhc/vite-plugin-dts/commit/96d32d127b73d48ce192424c4596fe24a2d24619))
- promise A+ specification for `isPromise` method ([#228](https://github.com/qmhc/vite-plugin-dts/issues/228)) ([3454a35](https://github.com/qmhc/vite-plugin-dts/commit/3454a356683a97752b0161a0e5be0328aa55a4f3))

# [3.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.3.0...v3.0.0-beta.2) (2023-06-27)

### Features

- transfer to use Volar, support Rollup, improve watch mode ([#226](https://github.com/qmhc/vite-plugin-dts/issues/226)) ([bb7949c](https://github.com/qmhc/vite-plugin-dts/commit/bb7949c841141b2305640d953be4dddf45ce7d1a))

### BREAKING CHANGES

- Deprecated options: `noEmitOnError`, `skipDiagnostics`
  and `libFolderPath`. Rename options: `outputDir` -> `outDir`,
  `tsConfigFilePath` -> `tsconfigPath`.

# [2.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.1.0...v2.3.0) (2023-04-17)

### Features

- compatible with svelte ([#197](https://github.com/qmhc/vite-plugin-dts/issues/197)) ([5d38517](https://github.com/qmhc/vite-plugin-dts/commit/5d38517ee16fdfc2009725b9146bfe38c49d1709))
- supports multiple extends in tsconfig.json ([#202](https://github.com/qmhc/vite-plugin-dts/issues/202)) ([9fdac66](https://github.com/qmhc/vite-plugin-dts/commit/9fdac66c0cfd827791208a31fbbefd1fad4ac2bf)), closes [#200](https://github.com/qmhc/vite-plugin-dts/issues/200)

# [2.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.2...v2.1.0) (2023-03-08)

### Features

- add bundledPackages configuration ([#186](https://github.com/qmhc/vite-plugin-dts/issues/186)) ([8997680](https://github.com/qmhc/vite-plugin-dts/commit/8997680776d8f35ae5248cc73b2d6a734e5dbc4a))

## [2.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.1...v2.0.2) (2023-02-23)

### Bug Fixes

- recursively resolve extended tsconfig path ([#181](https://github.com/qmhc/vite-plugin-dts/issues/181)) ([7ca8502](https://github.com/qmhc/vite-plugin-dts/commit/7ca85026e9a3e345c334222af5ffa823bda380a7))

## [2.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0...v2.0.1) (2023-02-23)

### Bug Fixes

- **vue:** correctly remove components for normal script ([6dbd9af](https://github.com/qmhc/vite-plugin-dts/commit/6dbd9af3bbd8175ef8a1cee4054ba38f330eef0c))
- **vue:** error when parse no argument function ([4db63b4](https://github.com/qmhc/vite-plugin-dts/commit/4db63b4b1b48686146f07e7e69dcbd4a82b33efb))

# [2.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.3...v2.0.0) (2023-02-23)

### Bug Fixes

- ensure watch all the files defined in include ([42a755c](https://github.com/qmhc/vite-plugin-dts/commit/42a755cf502cdfa8dc9dab0f600e8cc2a46eec18)), closes [#151](https://github.com/qmhc/vite-plugin-dts/issues/151)
- incorrect path resolve when copy dts source files ([434f69e](https://github.com/qmhc/vite-plugin-dts/commit/434f69e9629db5b2e74e609ffbc5f9cd436c1177)), closes [#179](https://github.com/qmhc/vite-plugin-dts/issues/179)
- **react:** unlimited init order when using with react plugin ([92b82ff](https://github.com/qmhc/vite-plugin-dts/commit/92b82ff47e0480c86c76e298feaa7cea8e06f7fa)), closes [#148](https://github.com/qmhc/vite-plugin-dts/issues/148)

### BREAKING CHANGES

- `copyDtsFiles` option now default to false.

# [2.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2023-02-21)

### Bug Fixes

- support manually create dts for source file ([2174868](https://github.com/qmhc/vite-plugin-dts/commit/2174868158766fd16a72f9f44b979d2c62d8ab07)), closes [#178](https://github.com/qmhc/vite-plugin-dts/issues/178)

### Features

- support parse types entry from exports in package.json ([f033cf8](https://github.com/qmhc/vite-plugin-dts/commit/f033cf876b51d7e11f1aa562567f3fd1f97d04f5))

# [2.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2023-02-20)

### Bug Fixes

- should re-transform when file changed in watch mode ([eafdd3c](https://github.com/qmhc/vite-plugin-dts/commit/eafdd3ce7d6757f93a378130b8e34f41e17e4004)), closes [#99](https://github.com/qmhc/vite-plugin-dts/issues/99)
- **vue:** preprocess not direct exported component ([8bd769e](https://github.com/qmhc/vite-plugin-dts/commit/8bd769e013f845a8e486d354d9f8517bd7b02e72))

### Features

- support specify log level of plugin ([2c1aeb0](https://github.com/qmhc/vite-plugin-dts/commit/2c1aeb01637aa4511f4e4c26b891b6e7ea235d50)), closes [#177](https://github.com/qmhc/vite-plugin-dts/issues/177)

# [2.0.0-beta.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2023-02-17)

### Bug Fixes

- **vue:** conversion error when using outside ts props ([25307cf](https://github.com/qmhc/vite-plugin-dts/commit/25307cf6ef89aa8501c8c35ff8ca519021adafea)), closes [#175](https://github.com/qmhc/vite-plugin-dts/issues/175)
- **vue:** remove components option before inferring ([90f8ac1](https://github.com/qmhc/vite-plugin-dts/commit/90f8ac160412de418bc7dc31c97f4ca7daa524ca))

# [2.0.0-beta.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.3...v2.0.0-beta.0) (2023-02-16)

### Bug Fixes

- override composite for root tsconfig ([df1d0f4](https://github.com/qmhc/vite-plugin-dts/commit/df1d0f42d0d9d9341d7766f5c147e7e3fa3733cf)), closes [#153](https://github.com/qmhc/vite-plugin-dts/issues/153)
- **vue:** ignore css vars when compile ([6d2369a](https://github.com/qmhc/vite-plugin-dts/commit/6d2369afe31c18b3dff45296d74b90aba86bb656)), closes [#167](https://github.com/qmhc/vite-plugin-dts/issues/167)

### Features

- **vue:** accurate types inferring for exposed and props ([#173](https://github.com/qmhc/vite-plugin-dts/issues/173)) ([c25448c](https://github.com/qmhc/vite-plugin-dts/commit/c25448c90f3b3969d51dbfa31ad5dc3ce2a9a2aa))

## [1.7.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.2...v1.7.3) (2023-02-14)

### Bug Fixes

- incorrect compilerOptions when rollup dts ([9dd8d9c](https://github.com/qmhc/vite-plugin-dts/commit/9dd8d9c41bed7f79e24ee890c1f28d867346326e)), closes [#171](https://github.com/qmhc/vite-plugin-dts/issues/171)
- normalize `mts` and `cts` declaration files extension ([410288a](https://github.com/qmhc/vite-plugin-dts/commit/410288ac65d7fb4a3065d93c6d7be9e2a8dd3f77)), closes [#169](https://github.com/qmhc/vite-plugin-dts/issues/169)

## [1.7.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.1...v1.7.2) (2023-01-31)

### Bug Fixes

- correct .d.ts extension in multiple outputs ([5c9709c](https://github.com/qmhc/vite-plugin-dts/commit/5c9709c4082ee36f2f28b4ad6e21b846aa27d5d6)), closes [#144](https://github.com/qmhc/vite-plugin-dts/issues/144)
- insertTypesEntry config supports publishConfig.types ([#164](https://github.com/qmhc/vite-plugin-dts/issues/164)) ([dae4ef9](https://github.com/qmhc/vite-plugin-dts/commit/dae4ef9de1175cf5bdc5a7dedfa60d7bab381dba))
- mark typescript as external dependency ([#160](https://github.com/qmhc/vite-plugin-dts/issues/160)) ([31e10d4](https://github.com/qmhc/vite-plugin-dts/commit/31e10d4ec2a37148ad63fdfb141264d6c4966135))

## [1.7.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.0...v1.7.1) (2022-11-14)

### Bug Fixes

- ensure exulde working when transform ([aea8ebd](https://github.com/qmhc/vite-plugin-dts/commit/aea8ebdc4eac489bc62ccebf3552421bd43d318c)), closes [#143](https://github.com/qmhc/vite-plugin-dts/issues/143) [#140](https://github.com/qmhc/vite-plugin-dts/issues/140) [#97](https://github.com/qmhc/vite-plugin-dts/issues/97)
- import vite plugin type via dynamic import ([8bd73c8](https://github.com/qmhc/vite-plugin-dts/commit/8bd73c8fae010ba0d32df8b144345b7f641a6085)), closes [#139](https://github.com/qmhc/vite-plugin-dts/issues/139)

# [1.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.6...v1.7.0) (2022-11-07)

### Bug Fixes

- compiler missing plugin `decorators-legacy` ([#138](https://github.com/qmhc/vite-plugin-dts/issues/138)) ([717af2f](https://github.com/qmhc/vite-plugin-dts/commit/717af2f4bc1b5bd549339179bc5b75dbbd9a348a))
- derprecate logDiagnostics option ([e405328](https://github.com/qmhc/vite-plugin-dts/commit/e405328f64870919a3ee4100fac087870ed4662e))
- incorrect compiler address resolution ([#133](https://github.com/qmhc/vite-plugin-dts/issues/133)) ([01cc125](https://github.com/qmhc/vite-plugin-dts/commit/01cc125ea98b1994e364487f73d71b0cb6ebcdbf))

### Features

- support customize typescript lib path ([27b83f3](https://github.com/qmhc/vite-plugin-dts/commit/27b83f3423f50307852257f3747c112f2f3cd325)), closes [#134](https://github.com/qmhc/vite-plugin-dts/issues/134)
- support multiple entries for lib mode ([1fafe54](https://github.com/qmhc/vite-plugin-dts/commit/1fafe54991431ce86a404ecb7e179ef1aa8aff0a)), closes [#136](https://github.com/qmhc/vite-plugin-dts/issues/136)

## [1.6.6](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.5...v1.6.6) (2022-10-13)

### Bug Fixes

- adapt @microsoft/api-extractor 7.33+ ([5acb4be](https://github.com/qmhc/vite-plugin-dts/commit/5acb4be4d1e4fe41e42a38ec9e92eeeb6f3a9c15))
- always ship included dts files into soure ([fc345e3](https://github.com/qmhc/vite-plugin-dts/commit/fc345e31b79fd7ca40581727d1964f80d1b9db82)), closes [#126](https://github.com/qmhc/vite-plugin-dts/issues/126)

## [1.6.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.4...v1.6.5) (2022-10-06)

### Bug Fixes

- remove pnpm limitation in preinstall to support npm@6 ([d7167b8](https://github.com/qmhc/vite-plugin-dts/commit/d7167b83381c54075e0e9114c07fe9451b6ffa2d)), closes [#123](https://github.com/qmhc/vite-plugin-dts/issues/123)

## [1.6.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.3...v1.6.4) (2022-09-30)

### Bug Fixes

- patch cjs vars for esm scope ([57e093d](https://github.com/qmhc/vite-plugin-dts/commit/57e093d734e4b81bbeeecbd694b269cca698f914)), closes [#119](https://github.com/qmhc/vite-plugin-dts/issues/119) [#122](https://github.com/qmhc/vite-plugin-dts/issues/122)

## [1.6.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.2...v1.6.3) (2022-09-30)

### Bug Fixes

- both support cjs and esm(using by tsx) ([38bd6a6](https://github.com/qmhc/vite-plugin-dts/commit/38bd6a6789fe375dd5da0aec1ea9b6816751719a))

## [1.6.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.1...v1.6.2) (2022-09-30)

### Bug Fixes

- ensure generate dts for type only files ([f3f4919](https://github.com/qmhc/vite-plugin-dts/commit/f3f4919fa441a27b7d842f1e64dd8d711bd05ec9)), closes [#118](https://github.com/qmhc/vite-plugin-dts/issues/118)

## [1.6.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.0...v1.6.1) (2022-09-28)

### Bug Fixes

- path error in cjs running ([0832af4](https://github.com/qmhc/vite-plugin-dts/commit/0832af4ab49d8166e14b6897bb1538ec6ddf3bb5))

# [1.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.5.0...v1.6.0) (2022-09-28)

### Bug Fixes

- correct compilerOptions.outDir for project init ([8699219](https://github.com/qmhc/vite-plugin-dts/commit/86992194411017e75b1d17c3f72d631267ec187b))
- type error occurred while define `defineProps` retruns as `props` ([41eb53a](https://github.com/qmhc/vite-plugin-dts/commit/41eb53a4da681d2c809dc8a7674a03284acbea02)), closes [#113](https://github.com/qmhc/vite-plugin-dts/issues/113)

### Features

- skip write file when `beforeWriteFile` return exact `false` ([9404ebc](https://github.com/qmhc/vite-plugin-dts/commit/9404ebc811b919a59a21b954d4ba4d43be255390)), closes [#110](https://github.com/qmhc/vite-plugin-dts/issues/110)

# [1.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.1...v1.5.0) (2022-09-11)

### Features

- improve aliasesExclude to support more flexible definition ([f652523](https://github.com/qmhc/vite-plugin-dts/commit/f6525235758b0d29347feb7f21a5085dc81b13a4)), closes [#93](https://github.com/qmhc/vite-plugin-dts/issues/93)

## [1.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.0...v1.4.1) (2022-08-01)

### Bug Fixes

- includes `extends` field when parse tsconfig.json ([#96](https://github.com/qmhc/vite-plugin-dts/issues/96)) ([2631de0](https://github.com/qmhc/vite-plugin-dts/commit/2631de0725e89083752fd590ff604f3f763abd3a))

# [1.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.1...v1.4.0) (2022-07-20)

### Bug Fixes

- ensure emit dts when no script sfc in vue component ([869a466](https://github.com/qmhc/vite-plugin-dts/commit/869a4662af2e690b2e1e63faf941a9e1343dd6ea)), closes [#88](https://github.com/qmhc/vite-plugin-dts/issues/88)

### Features

- support vue 2.7 ([c4e2c4b](https://github.com/qmhc/vite-plugin-dts/commit/c4e2c4b479da837ab697220284ac3c54e89c54a0)), closes [#87](https://github.com/qmhc/vite-plugin-dts/issues/87)

## [1.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.0...v1.3.1) (2022-07-18)

### Bug Fixes

- dynamiclly adjust the exports of inserted index file ([abc9431](https://github.com/qmhc/vite-plugin-dts/commit/abc943143b97dbec0935b62171b16faeebd6fbf4)), closes [#81](https://github.com/qmhc/vite-plugin-dts/issues/81) [#86](https://github.com/qmhc/vite-plugin-dts/issues/86)
- missing inserted entry when multiple outputs ([39ff8ab](https://github.com/qmhc/vite-plugin-dts/commit/39ff8abc0e1dda232c3cf1e6f25ff8daddb37acb))

# [1.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.1...v1.3.0) (2022-07-13)

### Bug Fixes

- aliasesExclude not work when includes empty value ([#85](https://github.com/qmhc/vite-plugin-dts/issues/85)) ([8b9b9aa](https://github.com/qmhc/vite-plugin-dts/commit/8b9b9aa4e9d1c4fa84a2945f4f2421c9269240ff))
- correct type files generate when root is set ([#68](https://github.com/qmhc/vite-plugin-dts/issues/68)) ([0b491bd](https://github.com/qmhc/vite-plugin-dts/commit/0b491bd3720c5b6065dd00a00f9b95e39bf6c8fe))

### Features

- support multiple output dirs ([cd19ee7](https://github.com/qmhc/vite-plugin-dts/commit/cd19ee7f4cf25906a3ffcd89a6c93baf7c7266ed))

## [1.2.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.0...v1.2.1) (2022-07-05)

### Bug Fixes

- add parser plugins param for vue compiler ([7d6bd16](https://github.com/qmhc/vite-plugin-dts/commit/7d6bd16af88701152bf8847e160acf6169bd0918)), closes [#78](https://github.com/qmhc/vite-plugin-dts/issues/78)
- insert entry fail when no default export in source entry ([#82](https://github.com/qmhc/vite-plugin-dts/issues/82)) ([1a4b161](https://github.com/qmhc/vite-plugin-dts/commit/1a4b161647ba1826c3bfa7c9ca5ee7ca4c3ee4bf))

# [1.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.1...v1.2.0) (2022-05-24)

### Bug Fixes

- support read typings form package.json ([6b1bb29](https://github.com/qmhc/vite-plugin-dts/commit/6b1bb2951512733091b950f5767bfe5a1cbe8992))

### Features

- add `aliasesExclude` option ([#75](https://github.com/qmhc/vite-plugin-dts/issues/75)) ([7588ba4](https://github.com/qmhc/vite-plugin-dts/commit/7588ba4755c19e25ca2482b95cb99a59621e693e)), closes [#73](https://github.com/qmhc/vite-plugin-dts/issues/73)
- support override compilerOptions when rollup up ([995612d](https://github.com/qmhc/vite-plugin-dts/commit/995612d5eafa6b610a9ab8826ee7b8691c673b4e)), closes [#74](https://github.com/qmhc/vite-plugin-dts/issues/74)

## [1.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.0...v1.1.1) (2022-04-25)

### Bug Fixes

- incorrect rollup entry path ([a9309d8](https://github.com/qmhc/vite-plugin-dts/commit/a9309d8ca8c0531d1579d3a541cd67ac0a37ce1b))

# [1.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.5...v1.1.0) (2022-04-18)

### Bug Fixes

- lose the type of entry export default ([50f55de](https://github.com/qmhc/vite-plugin-dts/commit/50f55de3ec89d7995056c428a37d16e0cd2a6a4a))

### Features

- support rollup dts files after output ([1d87b44](https://github.com/qmhc/vite-plugin-dts/commit/1d87b44dff3c54a5b1b983b060d3d0d4972c1d94))

## [1.0.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.4...v1.0.5) (2022-04-02)

### Bug Fixes

- entryRoot option not work ([#66](https://github.com/qmhc/vite-plugin-dts/issues/66)) ([bca6423](https://github.com/qmhc/vite-plugin-dts/commit/bca64236076a28dbdd7e6e373c46f3af3723b4e1))

## [1.0.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.3...v1.0.4) (2022-03-28)

### Bug Fixes

- transfer 'debug' to dependencies ([7af9232](https://github.com/qmhc/vite-plugin-dts/commit/7af9232e381f6d572a543706d640c6ecdb5a6c00))

## [1.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.2...v1.0.3) (2022-03-25)

### Bug Fixes

- **example:** cannot resolve types through symlinks ([0914a6a](https://github.com/qmhc/vite-plugin-dts/commit/0914a6ad8dde3514f94e586798d6d73a9c2ac165)), closes [#63](https://github.com/qmhc/vite-plugin-dts/issues/63)

## [1.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.1...v1.0.2) (2022-03-24)

### Bug Fixes

- incorrect entryRoot calculation in linux an mac ([0136990](https://github.com/qmhc/vite-plugin-dts/commit/01369903f484eb74ae6fa23b49537fa64d610706)), closes [#62](https://github.com/qmhc/vite-plugin-dts/issues/62)

## [1.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0...v1.0.1) (2022-03-22)

### Bug Fixes

- missing some libs defind in dependencies ([ab7960f](https://github.com/qmhc/vite-plugin-dts/commit/ab7960f0d957aad6945ef469274bca3e142baa87))

# [1.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.10...v1.0.0) (2022-03-22)

### Features

- support entryRoot option ([c939e35](https://github.com/qmhc/vite-plugin-dts/commit/c939e358dfecacaf2dfd2b0d42118c16462c260a)), closes [#59](https://github.com/qmhc/vite-plugin-dts/issues/59)

### BREAKING CHANGES

- The calculating output paths funtion of root option is
  assigned to entryRoot option, and currently will auto calculating the
  smallest public path as the default value for entryRoot option.

## [0.9.10](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.9...v0.9.10) (2022-03-12)

### Bug Fixes

- make default include same as tsconfig.json ([5ca7fc5](https://github.com/qmhc/vite-plugin-dts/commit/5ca7fc51ab321d4b25ce9856c0e52894c1264d44)), closes [#58](https://github.com/qmhc/vite-plugin-dts/issues/58)

## [0.9.9](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.8...v0.9.9) (2022-01-11)

### Bug Fixes

- should filter vite virtual files ([5fb24ba](https://github.com/qmhc/vite-plugin-dts/commit/5fb24ba2c40ad2ef81e45c33533aada3bb5aefd3)), closes [#50](https://github.com/qmhc/vite-plugin-dts/issues/50)

## [0.9.8](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.7...v0.9.8) (2022-01-10)

### Bug Fixes

- put `copyDtsFiles` option in use ([#53](https://github.com/qmhc/vite-plugin-dts/issues/53)) ([261700f](https://github.com/qmhc/vite-plugin-dts/commit/261700f80a60b3bc1f22f391e00d9999205fe0d2)), closes [#52](https://github.com/qmhc/vite-plugin-dts/issues/52)

## [0.9.7](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.6...v0.9.7) (2021-12-30)

### Bug Fixes

- inserted entry not through beforeWriteFile ([e16b9b1](https://github.com/qmhc/vite-plugin-dts/commit/e16b9b15c66df887bac0ca0b6be05e4d1f8628ed)), closes [#48](https://github.com/qmhc/vite-plugin-dts/issues/48)

## [0.9.6](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.5...v0.9.6) (2021-11-23)

### Bug Fixes

- aliases are not resolved when find ends with '/' ([f04aab2](https://github.com/qmhc/vite-plugin-dts/commit/f04aab21f9f6dc02316a9ff3a9cd43e90cd97828)), closes [#37](https://github.com/qmhc/vite-plugin-dts/issues/37)
- not equally transform dts source files ([ede5146](https://github.com/qmhc/vite-plugin-dts/commit/ede514649282aec786549d490e8127824913914c))

## [0.9.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.4...v0.9.5) (2021-11-21)

### Bug Fixes

- ensure dts source files through beforeWriteFile hook ([3265412](https://github.com/qmhc/vite-plugin-dts/commit/3265412e26dd8736fefab0cf99e920d01bb246c5)), closes [#43](https://github.com/qmhc/vite-plugin-dts/issues/43)

## [0.9.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.3...v0.9.4) (2021-11-10)

### Bug Fixes

- cannot resolve types defined in dts files ([666ca09](https://github.com/qmhc/vite-plugin-dts/commit/666ca0925075bed6926f648a210f37d56af9577b)), closes [#42](https://github.com/qmhc/vite-plugin-dts/issues/42)
- take unused error when using setup-script ([c4145b7](https://github.com/qmhc/vite-plugin-dts/commit/c4145b7352359c79b8ba7c01a1c4afeace4dbc7c))

## [0.9.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.2...v0.9.3) (2021-11-03)

### Bug Fixes

- support require for cjs exports ([cc5aff9](https://github.com/qmhc/vite-plugin-dts/commit/cc5aff9b9906fc87f6012fb66566fd1937a9381e)), closes [#39](https://github.com/qmhc/vite-plugin-dts/issues/39)

## [0.9.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.1...v0.9.2) (2021-10-20)

### Bug Fixes

- support optional @vue/compiler-sfc ([34e1958](https://github.com/qmhc/vite-plugin-dts/commit/34e19587aa64c802cfbd99c5c8018bde8d0e1e2f))

## [0.9.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.3...v0.9.1) (2021-10-18)

### Bug Fixes

- watch mode not update ts/js files ([32a5699](https://github.com/qmhc/vite-plugin-dts/commit/32a5699a9b4f5a24b2a2a870ced43850a0573f82))

### Features

- add afterBuild hook option ([#34](https://github.com/qmhc/vite-plugin-dts/issues/34)) ([e836689](https://github.com/qmhc/vite-plugin-dts/commit/e83668988dab189d185ed9637032f7f80ba1e4db))
- afterDiagnostic and afterBuild support async ([c92d548](https://github.com/qmhc/vite-plugin-dts/commit/c92d54826b81f50fbb38fa909df730b323b75b24))
- skip dependencies by default ([8ca3ed3](https://github.com/qmhc/vite-plugin-dts/commit/8ca3ed30dfcc23c2dd9822fe6ef460a6c832dfe2))

## [0.8.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.2...v0.8.3) (2021-10-11)

### Bug Fixes

- support tsconfig.json using comments ([6e6e446](https://github.com/qmhc/vite-plugin-dts/commit/6e6e44683592060ebd27d1c5712058f2f0f0aeb6)), closes [#31](https://github.com/qmhc/vite-plugin-dts/issues/31)

## [0.8.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.1...v0.8.2) (2021-09-30)

### Bug Fixes

- create correct source for tsx/jsx script ([#29](https://github.com/qmhc/vite-plugin-dts/issues/29)) ([109721e](https://github.com/qmhc/vite-plugin-dts/commit/109721e89007cd702fe73fded44cc6b7efeef46e))

## [0.8.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.0...v0.8.1) (2021-09-22)

### Bug Fixes

- declarationDir make no file generated ([3313a19](https://github.com/qmhc/vite-plugin-dts/commit/3313a19da669bda7fa8fff3a5211652bc22e7413)), closes [#27](https://github.com/qmhc/vite-plugin-dts/issues/27)
- rewrite noEmit option when init porject ([735d26b](https://github.com/qmhc/vite-plugin-dts/commit/735d26b3cad9a90dd272a08448d238045306a1ba)), closes [#28](https://github.com/qmhc/vite-plugin-dts/issues/28)

# [0.8.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.7.0...v0.8.0) (2021-09-13)

### Bug Fixes

- adapt vue@3.2.6+ setup script ([1b62755](https://github.com/qmhc/vite-plugin-dts/commit/1b62755947972a67a034830cc7478fa1a65924c4))
- ouput files out of include bounds ([e1cdedf](https://github.com/qmhc/vite-plugin-dts/commit/e1cdedfc8b41a311d2c22674bd132f23242482ac)), closes [#24](https://github.com/qmhc/vite-plugin-dts/issues/24)

### Features

- add afterDiagnostic option ([7d43ece](https://github.com/qmhc/vite-plugin-dts/commit/7d43ece8fcb9b71d645982a45b01cd9136c525d8)), closes [#22](https://github.com/qmhc/vite-plugin-dts/issues/22)
- support build watch mode ([a920d97](https://github.com/qmhc/vite-plugin-dts/commit/a920d97825dced453f5f70d8776944c02b50e14b)), closes [#5](https://github.com/qmhc/vite-plugin-dts/issues/5)

# [0.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.6.0...v0.7.0) (2021-08-23)

### Bug Fixes

- support using script-setup alongside script ([39517ad](https://github.com/qmhc/vite-plugin-dts/commit/39517ad7119a4b97be7a2d874b43cb73cfa95f07)), closes [#21](https://github.com/qmhc/vite-plugin-dts/issues/21)

### Features

- add noEmitOnError and logDiagnostics options ([8a840fe](https://github.com/qmhc/vite-plugin-dts/commit/8a840fe2692e07e8e881c58ca8f6887d08493cc9))

# [0.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.3...v0.6.0) (2021-08-14)

### Bug Fixes

- resolve alias when using default import ([3121d5b](https://github.com/qmhc/vite-plugin-dts/commit/3121d5bd56a6863e5175c95b00d7a3dedc0cff6d)), closes [#20](https://github.com/qmhc/vite-plugin-dts/issues/20)

### Features

- add copyDtsFiles option ([bdab8c4](https://github.com/qmhc/vite-plugin-dts/commit/bdab8c4b4efa894209c2edeffbbe4d79680eafe9)), closes [#19](https://github.com/qmhc/vite-plugin-dts/issues/19)

## [0.5.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.2...v0.5.3) (2021-07-22)

### Bug Fixes

- add allowJs option dynamically ([36f8de2](https://github.com/qmhc/vite-plugin-dts/commit/36f8de28c68cd52945faeb375cd2931c6ad0468a)), closes [#17](https://github.com/qmhc/vite-plugin-dts/issues/17)
- add js and jsx files when allowJs ([0e1e6f7](https://github.com/qmhc/vite-plugin-dts/commit/0e1e6f7c09c85e169568b2c77c66d452d04a28a2))

## [0.5.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.1...v0.5.2) (2021-07-01)

### Bug Fixes

- cannot require @vue/compiler-sfc in monorepo ([fd9b5c1](https://github.com/qmhc/vite-plugin-dts/commit/fd9b5c1c018feb87e374cdf6671b7b8be14e775b)), closes [#14](https://github.com/qmhc/vite-plugin-dts/issues/14)

## [0.5.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.0...v0.5.1) (2021-06-18)

### Bug Fixes

- support insert entry from '.tsx' file ([e38b7c4](https://github.com/qmhc/vite-plugin-dts/commit/e38b7c4686a8d7405583a97078e97fbef4757da6))

# [0.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.3...v0.5.0) (2021-06-15)

### Bug Fixes

- ignore none export files ([f9c41bc](https://github.com/qmhc/vite-plugin-dts/commit/f9c41bc4e2fd498b53aa366a5f8f2a57589b6176))
- rename insertIndexEntry to insertTypesEntry ([c9d392e](https://github.com/qmhc/vite-plugin-dts/commit/c9d392ec3def98b541bb597c5ed38933b225fe5e))

### Features

- add clearPureImport option ([0357f69](https://github.com/qmhc/vite-plugin-dts/commit/0357f69485204f24d9830a4de59558a23eb66e19))
- defaults insert entry base on pkg.types ([9c71f28](https://github.com/qmhc/vite-plugin-dts/commit/9c71f28eac50d23a42d92bd79ac6d09f1be0544d))
- optional insert index type entry ([592a701](https://github.com/qmhc/vite-plugin-dts/commit/592a701d6213f955306df9de0c7f1d3243a28faa))

## [0.4.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.2...v0.4.3) (2021-06-11)

### Bug Fixes

- back off optional chaining and nullish coalescing ([8e09129](https://github.com/qmhc/vite-plugin-dts/commit/8e09129c1600a013a2c3c50983ab7f358216757f)), closes [#2](https://github.com/qmhc/vite-plugin-dts/issues/2)
- transform fs/promise to fs-extra ([1794b0b](https://github.com/qmhc/vite-plugin-dts/commit/1794b0b93baf4212b4efc5ef06a697adf70e4933)), closes [#4](https://github.com/qmhc/vite-plugin-dts/issues/4)

### Performance Improvements

- use menory result generate bundle ([858bf31](https://github.com/qmhc/vite-plugin-dts/commit/858bf317d16c995feb73e53339d61f7602e36484))

## [0.4.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.1...v0.4.2) (2021-06-09)

### Bug Fixes

- incomplete remove pure import ([a1fd54e](https://github.com/qmhc/vite-plugin-dts/commit/a1fd54e769f1b50ee5858d33879b2a6732625797))
- mamual set include and exclude ([b6fb510](https://github.com/qmhc/vite-plugin-dts/commit/b6fb5106206df9de83276687dd1451fa3d882067))
- more accurate normalize glob ([1d65c47](https://github.com/qmhc/vite-plugin-dts/commit/1d65c47811344a6b566a8dcf22cd22d9298d5a02))
- set rootDir if not set in compilerOptions ([a1d83d2](https://github.com/qmhc/vite-plugin-dts/commit/a1d83d2aa56a32ebef11b9d98fa508a6d9fbd412)), closes [#3](https://github.com/qmhc/vite-plugin-dts/issues/3)
- transform alias include dynamic imports ([a6919b4](https://github.com/qmhc/vite-plugin-dts/commit/a6919b4760cf5cbefbdad1ac674b8a8275dc27dd))
- transform alias include dynamic imports ([3a5511e](https://github.com/qmhc/vite-plugin-dts/commit/3a5511e3e0b961d7f4ac393da623502a186a0538))

## [0.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.0...v0.4.1) (2021-06-08)

### Bug Fixes

- dynamic import regexp endings include ']' and ')' ([e5f37a6](https://github.com/qmhc/vite-plugin-dts/commit/e5f37a6d9e232e268ea1b2ec2eadb6c7bc7d7115))

# [0.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.5...v0.4.0) (2021-06-08)

### Bug Fixes

- bundle only once for multiple formats ([be37fbf](https://github.com/qmhc/vite-plugin-dts/commit/be37fbfcbd03dd23c73908a2d7f2d019437e003a))

### Features

- bundle all from tsconfig include ([252554a](https://github.com/qmhc/vite-plugin-dts/commit/252554af1fa403af1ee00dba16a1c7938e7374c6))

### BREAKING CHANGES

- Deprecated include and exclude options

## [0.3.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.4...v0.3.5) (2021-06-08)

### Bug Fixes

- includes prue type export files ([1341359](https://github.com/qmhc/vite-plugin-dts/commit/1341359b9943fd961ec0d3d40d71252e77c73390))
- incorrect path in transform alias ([d686ff9](https://github.com/qmhc/vite-plugin-dts/commit/d686ff94157c400d7f235331a47fbb9d452afeb9))

## [0.3.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.3...v0.3.4) (2021-06-07)

### Bug Fixes

- remove pure import ([fe241de](https://github.com/qmhc/vite-plugin-dts/commit/fe241de5b583cb5bf2dde83383a8a43e53724ce1))
- static import include relative path ([4065217](https://github.com/qmhc/vite-plugin-dts/commit/40652178b9071509269e6b66cbbbcb3562cf349d))

## [0.3.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.2...v0.3.3) (2021-06-07)

### Bug Fixes

- keep output relative to root not to entry dir ([e83ec64](https://github.com/qmhc/vite-plugin-dts/commit/e83ec643536f888166055a5495db3e2fd1030584))

### BREAKING CHANGES

- Ouput declaration structure no longer relative to entry dir

## [0.3.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.1...v0.3.2) (2021-06-07)

### Bug Fixes

- default root base on vite config ([787ebc1](https://github.com/qmhc/vite-plugin-dts/commit/787ebc175d07370628589a6fc73e325b29655a0b))

## [0.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.0...v0.3.1) (2021-06-06)

### Bug Fixes

- vue file explicit type lost ([d0d8803](https://github.com/qmhc/vite-plugin-dts/commit/d0d88038fb51d71dfb71ab4d0223600801d50349))

# [0.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.2.0...v0.3.0) (2021-06-06)

### Bug Fixes

- transform alias import to relative path ([6d5a2d5](https://github.com/qmhc/vite-plugin-dts/commit/6d5a2d5b5ba691b5572727cbf42b340d05964951))

### Features

- projectOptions refine to compilerOptions and tsConfigFilePath ([eb61113](https://github.com/qmhc/vite-plugin-dts/commit/eb611135446fff7bc82e3bd0d1d2b856a829de98))

### BREAKING CHANGES

- projectOptions no longer supported, the project init should be up to the plugin.

# [0.2.0](https://github.com/qmhc/vite-plugin-dts/compare/b2f0c0aa6eea5b48703248eca3294c5d845404ba...v0.2.0) (2021-06-05)

### Features

- add beforeWriteFile hook ([139e818](https://github.com/qmhc/vite-plugin-dts/commit/139e818cecfa80d4208b3f5ced55e7db57bf7e52))
- add outputDir option ([f289723](https://github.com/qmhc/vite-plugin-dts/commit/f289723672279795c0b96aaac3abf83dd8913b20))
- add transform dynamic import to static ([b2f0c0a](https://github.com/qmhc/vite-plugin-dts/commit/b2f0c0aa6eea5b48703248eca3294c5d845404ba))

# [3.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.3...v3.0.0) (2023-06-30)

### Bug Fixes

- correct path process when specify entryRoot ([fc15dac](https://github.com/qmhc/vite-plugin-dts/commit/fc15dacf0561fc598e25f6de435edf97d6edfdf1)), closes [#229](https://github.com/qmhc/vite-plugin-dts/issues/229) [#230](https://github.com/qmhc/vite-plugin-dts/issues/230)
- correct time cost recording ([57eb430](https://github.com/qmhc/vite-plugin-dts/commit/57eb4309aeec4b5773bfa10c6e48a41c2fd23c69))

### Features

- add strictOutput to limit output write ([07224d1](https://github.com/qmhc/vite-plugin-dts/commit/07224d15576ee6528c9068d8a80fcbbf502018f0))

# [3.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2023-06-27)

### Bug Fixes

- incorrect entryRoot when in single inner entry ([96d32d1](https://github.com/qmhc/vite-plugin-dts/commit/96d32d127b73d48ce192424c4596fe24a2d24619))
- promise A+ specification for `isPromise` method ([#228](https://github.com/qmhc/vite-plugin-dts/issues/228)) ([3454a35](https://github.com/qmhc/vite-plugin-dts/commit/3454a356683a97752b0161a0e5be0328aa55a4f3))

# [3.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.3.0...v3.0.0-beta.2) (2023-06-27)

### Features

- transfer to use Volar, support Rollup, improve watch mode ([#226](https://github.com/qmhc/vite-plugin-dts/issues/226)) ([bb7949c](https://github.com/qmhc/vite-plugin-dts/commit/bb7949c841141b2305640d953be4dddf45ce7d1a))

### BREAKING CHANGES

- Deprecated options: `noEmitOnError`, `skipDiagnostics`
  and `libFolderPath`. Rename options: `outputDir` -> `outDir`,
  `tsConfigFilePath` -> `tsconfigPath`.

# [2.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.1.0...v2.3.0) (2023-04-17)

### Features

- compatible with svelte ([#197](https://github.com/qmhc/vite-plugin-dts/issues/197)) ([5d38517](https://github.com/qmhc/vite-plugin-dts/commit/5d38517ee16fdfc2009725b9146bfe38c49d1709))
- supports multiple extends in tsconfig.json ([#202](https://github.com/qmhc/vite-plugin-dts/issues/202)) ([9fdac66](https://github.com/qmhc/vite-plugin-dts/commit/9fdac66c0cfd827791208a31fbbefd1fad4ac2bf)), closes [#200](https://github.com/qmhc/vite-plugin-dts/issues/200)

# [2.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.2...v2.1.0) (2023-03-08)

### Features

- add bundledPackages configuration ([#186](https://github.com/qmhc/vite-plugin-dts/issues/186)) ([8997680](https://github.com/qmhc/vite-plugin-dts/commit/8997680776d8f35ae5248cc73b2d6a734e5dbc4a))

## [2.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.1...v2.0.2) (2023-02-23)

### Bug Fixes

- recursively resolve extended tsconfig path ([#181](https://github.com/qmhc/vite-plugin-dts/issues/181)) ([7ca8502](https://github.com/qmhc/vite-plugin-dts/commit/7ca85026e9a3e345c334222af5ffa823bda380a7))

## [2.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0...v2.0.1) (2023-02-23)

### Bug Fixes

- **vue:** correctly remove components for normal script ([6dbd9af](https://github.com/qmhc/vite-plugin-dts/commit/6dbd9af3bbd8175ef8a1cee4054ba38f330eef0c))
- **vue:** error when parse no argument function ([4db63b4](https://github.com/qmhc/vite-plugin-dts/commit/4db63b4b1b48686146f07e7e69dcbd4a82b33efb))

# [2.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.3...v2.0.0) (2023-02-23)

### Bug Fixes

- ensure watch all the files defined in include ([42a755c](https://github.com/qmhc/vite-plugin-dts/commit/42a755cf502cdfa8dc9dab0f600e8cc2a46eec18)), closes [#151](https://github.com/qmhc/vite-plugin-dts/issues/151)
- incorrect path resolve when copy dts source files ([434f69e](https://github.com/qmhc/vite-plugin-dts/commit/434f69e9629db5b2e74e609ffbc5f9cd436c1177)), closes [#179](https://github.com/qmhc/vite-plugin-dts/issues/179)
- **react:** unlimited init order when using with react plugin ([92b82ff](https://github.com/qmhc/vite-plugin-dts/commit/92b82ff47e0480c86c76e298feaa7cea8e06f7fa)), closes [#148](https://github.com/qmhc/vite-plugin-dts/issues/148)

### BREAKING CHANGES

- `copyDtsFiles` option now default to false.

# [2.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2023-02-21)

### Bug Fixes

- support manually create dts for source file ([2174868](https://github.com/qmhc/vite-plugin-dts/commit/2174868158766fd16a72f9f44b979d2c62d8ab07)), closes [#178](https://github.com/qmhc/vite-plugin-dts/issues/178)

### Features

- support parse types entry from exports in package.json ([f033cf8](https://github.com/qmhc/vite-plugin-dts/commit/f033cf876b51d7e11f1aa562567f3fd1f97d04f5))

# [2.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2023-02-20)

### Bug Fixes

- should re-transform when file changed in watch mode ([eafdd3c](https://github.com/qmhc/vite-plugin-dts/commit/eafdd3ce7d6757f93a378130b8e34f41e17e4004)), closes [#99](https://github.com/qmhc/vite-plugin-dts/issues/99)
- **vue:** preprocess not direct exported component ([8bd769e](https://github.com/qmhc/vite-plugin-dts/commit/8bd769e013f845a8e486d354d9f8517bd7b02e72))

### Features

- support specify log level of plugin ([2c1aeb0](https://github.com/qmhc/vite-plugin-dts/commit/2c1aeb01637aa4511f4e4c26b891b6e7ea235d50)), closes [#177](https://github.com/qmhc/vite-plugin-dts/issues/177)

# [2.0.0-beta.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2023-02-17)

### Bug Fixes

- **vue:** conversion error when using outside ts props ([25307cf](https://github.com/qmhc/vite-plugin-dts/commit/25307cf6ef89aa8501c8c35ff8ca519021adafea)), closes [#175](https://github.com/qmhc/vite-plugin-dts/issues/175)
- **vue:** remove components option before inferring ([90f8ac1](https://github.com/qmhc/vite-plugin-dts/commit/90f8ac160412de418bc7dc31c97f4ca7daa524ca))

# [2.0.0-beta.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.3...v2.0.0-beta.0) (2023-02-16)

### Bug Fixes

- override composite for root tsconfig ([df1d0f4](https://github.com/qmhc/vite-plugin-dts/commit/df1d0f42d0d9d9341d7766f5c147e7e3fa3733cf)), closes [#153](https://github.com/qmhc/vite-plugin-dts/issues/153)
- **vue:** ignore css vars when compile ([6d2369a](https://github.com/qmhc/vite-plugin-dts/commit/6d2369afe31c18b3dff45296d74b90aba86bb656)), closes [#167](https://github.com/qmhc/vite-plugin-dts/issues/167)

### Features

- **vue:** accurate types inferring for exposed and props ([#173](https://github.com/qmhc/vite-plugin-dts/issues/173)) ([c25448c](https://github.com/qmhc/vite-plugin-dts/commit/c25448c90f3b3969d51dbfa31ad5dc3ce2a9a2aa))

## [1.7.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.2...v1.7.3) (2023-02-14)

### Bug Fixes

- incorrect compilerOptions when rollup dts ([9dd8d9c](https://github.com/qmhc/vite-plugin-dts/commit/9dd8d9c41bed7f79e24ee890c1f28d867346326e)), closes [#171](https://github.com/qmhc/vite-plugin-dts/issues/171)
- normalize `mts` and `cts` declaration files extension ([410288a](https://github.com/qmhc/vite-plugin-dts/commit/410288ac65d7fb4a3065d93c6d7be9e2a8dd3f77)), closes [#169](https://github.com/qmhc/vite-plugin-dts/issues/169)

## [1.7.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.1...v1.7.2) (2023-01-31)

### Bug Fixes

- correct .d.ts extension in multiple outputs ([5c9709c](https://github.com/qmhc/vite-plugin-dts/commit/5c9709c4082ee36f2f28b4ad6e21b846aa27d5d6)), closes [#144](https://github.com/qmhc/vite-plugin-dts/issues/144)
- insertTypesEntry config supports publishConfig.types ([#164](https://github.com/qmhc/vite-plugin-dts/issues/164)) ([dae4ef9](https://github.com/qmhc/vite-plugin-dts/commit/dae4ef9de1175cf5bdc5a7dedfa60d7bab381dba))
- mark typescript as external dependency ([#160](https://github.com/qmhc/vite-plugin-dts/issues/160)) ([31e10d4](https://github.com/qmhc/vite-plugin-dts/commit/31e10d4ec2a37148ad63fdfb141264d6c4966135))

## [1.7.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.0...v1.7.1) (2022-11-14)

### Bug Fixes

- ensure exulde working when transform ([aea8ebd](https://github.com/qmhc/vite-plugin-dts/commit/aea8ebdc4eac489bc62ccebf3552421bd43d318c)), closes [#143](https://github.com/qmhc/vite-plugin-dts/issues/143) [#140](https://github.com/qmhc/vite-plugin-dts/issues/140) [#97](https://github.com/qmhc/vite-plugin-dts/issues/97)
- import vite plugin type via dynamic import ([8bd73c8](https://github.com/qmhc/vite-plugin-dts/commit/8bd73c8fae010ba0d32df8b144345b7f641a6085)), closes [#139](https://github.com/qmhc/vite-plugin-dts/issues/139)

# [1.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.6...v1.7.0) (2022-11-07)

### Bug Fixes

- compiler missing plugin `decorators-legacy` ([#138](https://github.com/qmhc/vite-plugin-dts/issues/138)) ([717af2f](https://github.com/qmhc/vite-plugin-dts/commit/717af2f4bc1b5bd549339179bc5b75dbbd9a348a))
- derprecate logDiagnostics option ([e405328](https://github.com/qmhc/vite-plugin-dts/commit/e405328f64870919a3ee4100fac087870ed4662e))
- incorrect compiler address resolution ([#133](https://github.com/qmhc/vite-plugin-dts/issues/133)) ([01cc125](https://github.com/qmhc/vite-plugin-dts/commit/01cc125ea98b1994e364487f73d71b0cb6ebcdbf))

### Features

- support customize typescript lib path ([27b83f3](https://github.com/qmhc/vite-plugin-dts/commit/27b83f3423f50307852257f3747c112f2f3cd325)), closes [#134](https://github.com/qmhc/vite-plugin-dts/issues/134)
- support multiple entries for lib mode ([1fafe54](https://github.com/qmhc/vite-plugin-dts/commit/1fafe54991431ce86a404ecb7e179ef1aa8aff0a)), closes [#136](https://github.com/qmhc/vite-plugin-dts/issues/136)

## [1.6.6](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.5...v1.6.6) (2022-10-13)

### Bug Fixes

- adapt @microsoft/api-extractor 7.33+ ([5acb4be](https://github.com/qmhc/vite-plugin-dts/commit/5acb4be4d1e4fe41e42a38ec9e92eeeb6f3a9c15))
- always ship included dts files into soure ([fc345e3](https://github.com/qmhc/vite-plugin-dts/commit/fc345e31b79fd7ca40581727d1964f80d1b9db82)), closes [#126](https://github.com/qmhc/vite-plugin-dts/issues/126)

## [1.6.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.4...v1.6.5) (2022-10-06)

### Bug Fixes

- remove pnpm limitation in preinstall to support npm@6 ([d7167b8](https://github.com/qmhc/vite-plugin-dts/commit/d7167b83381c54075e0e9114c07fe9451b6ffa2d)), closes [#123](https://github.com/qmhc/vite-plugin-dts/issues/123)

## [1.6.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.3...v1.6.4) (2022-09-30)

### Bug Fixes

- patch cjs vars for esm scope ([57e093d](https://github.com/qmhc/vite-plugin-dts/commit/57e093d734e4b81bbeeecbd694b269cca698f914)), closes [#119](https://github.com/qmhc/vite-plugin-dts/issues/119) [#122](https://github.com/qmhc/vite-plugin-dts/issues/122)

## [1.6.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.2...v1.6.3) (2022-09-30)

### Bug Fixes

- both support cjs and esm(using by tsx) ([38bd6a6](https://github.com/qmhc/vite-plugin-dts/commit/38bd6a6789fe375dd5da0aec1ea9b6816751719a))

## [1.6.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.1...v1.6.2) (2022-09-30)

### Bug Fixes

- ensure generate dts for type only files ([f3f4919](https://github.com/qmhc/vite-plugin-dts/commit/f3f4919fa441a27b7d842f1e64dd8d711bd05ec9)), closes [#118](https://github.com/qmhc/vite-plugin-dts/issues/118)

## [1.6.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.0...v1.6.1) (2022-09-28)

### Bug Fixes

- path error in cjs running ([0832af4](https://github.com/qmhc/vite-plugin-dts/commit/0832af4ab49d8166e14b6897bb1538ec6ddf3bb5))

# [1.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.5.0...v1.6.0) (2022-09-28)

### Bug Fixes

- correct compilerOptions.outDir for project init ([8699219](https://github.com/qmhc/vite-plugin-dts/commit/86992194411017e75b1d17c3f72d631267ec187b))
- type error occurred while define `defineProps` retruns as `props` ([41eb53a](https://github.com/qmhc/vite-plugin-dts/commit/41eb53a4da681d2c809dc8a7674a03284acbea02)), closes [#113](https://github.com/qmhc/vite-plugin-dts/issues/113)

### Features

- skip write file when `beforeWriteFile` return exact `false` ([9404ebc](https://github.com/qmhc/vite-plugin-dts/commit/9404ebc811b919a59a21b954d4ba4d43be255390)), closes [#110](https://github.com/qmhc/vite-plugin-dts/issues/110)

# [1.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.1...v1.5.0) (2022-09-11)

### Features

- improve aliasesExclude to support more flexible definition ([f652523](https://github.com/qmhc/vite-plugin-dts/commit/f6525235758b0d29347feb7f21a5085dc81b13a4)), closes [#93](https://github.com/qmhc/vite-plugin-dts/issues/93)

## [1.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.0...v1.4.1) (2022-08-01)

### Bug Fixes

- includes `extends` field when parse tsconfig.json ([#96](https://github.com/qmhc/vite-plugin-dts/issues/96)) ([2631de0](https://github.com/qmhc/vite-plugin-dts/commit/2631de0725e89083752fd590ff604f3f763abd3a))

# [1.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.1...v1.4.0) (2022-07-20)

### Bug Fixes

- ensure emit dts when no script sfc in vue component ([869a466](https://github.com/qmhc/vite-plugin-dts/commit/869a4662af2e690b2e1e63faf941a9e1343dd6ea)), closes [#88](https://github.com/qmhc/vite-plugin-dts/issues/88)

### Features

- support vue 2.7 ([c4e2c4b](https://github.com/qmhc/vite-plugin-dts/commit/c4e2c4b479da837ab697220284ac3c54e89c54a0)), closes [#87](https://github.com/qmhc/vite-plugin-dts/issues/87)

## [1.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.0...v1.3.1) (2022-07-18)

### Bug Fixes

- dynamiclly adjust the exports of inserted index file ([abc9431](https://github.com/qmhc/vite-plugin-dts/commit/abc943143b97dbec0935b62171b16faeebd6fbf4)), closes [#81](https://github.com/qmhc/vite-plugin-dts/issues/81) [#86](https://github.com/qmhc/vite-plugin-dts/issues/86)
- missing inserted entry when multiple outputs ([39ff8ab](https://github.com/qmhc/vite-plugin-dts/commit/39ff8abc0e1dda232c3cf1e6f25ff8daddb37acb))

# [1.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.1...v1.3.0) (2022-07-13)

### Bug Fixes

- aliasesExclude not work when includes empty value ([#85](https://github.com/qmhc/vite-plugin-dts/issues/85)) ([8b9b9aa](https://github.com/qmhc/vite-plugin-dts/commit/8b9b9aa4e9d1c4fa84a2945f4f2421c9269240ff))
- correct type files generate when root is set ([#68](https://github.com/qmhc/vite-plugin-dts/issues/68)) ([0b491bd](https://github.com/qmhc/vite-plugin-dts/commit/0b491bd3720c5b6065dd00a00f9b95e39bf6c8fe))

### Features

- support multiple output dirs ([cd19ee7](https://github.com/qmhc/vite-plugin-dts/commit/cd19ee7f4cf25906a3ffcd89a6c93baf7c7266ed))

## [1.2.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.0...v1.2.1) (2022-07-05)

### Bug Fixes

- add parser plugins param for vue compiler ([7d6bd16](https://github.com/qmhc/vite-plugin-dts/commit/7d6bd16af88701152bf8847e160acf6169bd0918)), closes [#78](https://github.com/qmhc/vite-plugin-dts/issues/78)
- insert entry fail when no default export in source entry ([#82](https://github.com/qmhc/vite-plugin-dts/issues/82)) ([1a4b161](https://github.com/qmhc/vite-plugin-dts/commit/1a4b161647ba1826c3bfa7c9ca5ee7ca4c3ee4bf))

# [1.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.1...v1.2.0) (2022-05-24)

### Bug Fixes

- support read typings form package.json ([6b1bb29](https://github.com/qmhc/vite-plugin-dts/commit/6b1bb2951512733091b950f5767bfe5a1cbe8992))

### Features

- add `aliasesExclude` option ([#75](https://github.com/qmhc/vite-plugin-dts/issues/75)) ([7588ba4](https://github.com/qmhc/vite-plugin-dts/commit/7588ba4755c19e25ca2482b95cb99a59621e693e)), closes [#73](https://github.com/qmhc/vite-plugin-dts/issues/73)
- support override compilerOptions when rollup up ([995612d](https://github.com/qmhc/vite-plugin-dts/commit/995612d5eafa6b610a9ab8826ee7b8691c673b4e)), closes [#74](https://github.com/qmhc/vite-plugin-dts/issues/74)

## [1.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.0...v1.1.1) (2022-04-25)

### Bug Fixes

- incorrect rollup entry path ([a9309d8](https://github.com/qmhc/vite-plugin-dts/commit/a9309d8ca8c0531d1579d3a541cd67ac0a37ce1b))

# [1.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.5...v1.1.0) (2022-04-18)

### Bug Fixes

- lose the type of entry export default ([50f55de](https://github.com/qmhc/vite-plugin-dts/commit/50f55de3ec89d7995056c428a37d16e0cd2a6a4a))

### Features

- support rollup dts files after output ([1d87b44](https://github.com/qmhc/vite-plugin-dts/commit/1d87b44dff3c54a5b1b983b060d3d0d4972c1d94))

## [1.0.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.4...v1.0.5) (2022-04-02)

### Bug Fixes

- entryRoot option not work ([#66](https://github.com/qmhc/vite-plugin-dts/issues/66)) ([bca6423](https://github.com/qmhc/vite-plugin-dts/commit/bca64236076a28dbdd7e6e373c46f3af3723b4e1))

## [1.0.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.3...v1.0.4) (2022-03-28)

### Bug Fixes

- transfer 'debug' to dependencies ([7af9232](https://github.com/qmhc/vite-plugin-dts/commit/7af9232e381f6d572a543706d640c6ecdb5a6c00))

## [1.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.2...v1.0.3) (2022-03-25)

### Bug Fixes

- **example:** cannot resolve types through symlinks ([0914a6a](https://github.com/qmhc/vite-plugin-dts/commit/0914a6ad8dde3514f94e586798d6d73a9c2ac165)), closes [#63](https://github.com/qmhc/vite-plugin-dts/issues/63)

## [1.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.1...v1.0.2) (2022-03-24)

### Bug Fixes

- incorrect entryRoot calculation in linux an mac ([0136990](https://github.com/qmhc/vite-plugin-dts/commit/01369903f484eb74ae6fa23b49537fa64d610706)), closes [#62](https://github.com/qmhc/vite-plugin-dts/issues/62)

## [1.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0...v1.0.1) (2022-03-22)

### Bug Fixes

- missing some libs defind in dependencies ([ab7960f](https://github.com/qmhc/vite-plugin-dts/commit/ab7960f0d957aad6945ef469274bca3e142baa87))

# [1.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.10...v1.0.0) (2022-03-22)

### Features

- support entryRoot option ([c939e35](https://github.com/qmhc/vite-plugin-dts/commit/c939e358dfecacaf2dfd2b0d42118c16462c260a)), closes [#59](https://github.com/qmhc/vite-plugin-dts/issues/59)

### BREAKING CHANGES

- The calculating output paths funtion of root option is
  assigned to entryRoot option, and currently will auto calculating the
  smallest public path as the default value for entryRoot option.

## [0.9.10](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.9...v0.9.10) (2022-03-12)

### Bug Fixes

- make default include same as tsconfig.json ([5ca7fc5](https://github.com/qmhc/vite-plugin-dts/commit/5ca7fc51ab321d4b25ce9856c0e52894c1264d44)), closes [#58](https://github.com/qmhc/vite-plugin-dts/issues/58)

## [0.9.9](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.8...v0.9.9) (2022-01-11)

### Bug Fixes

- should filter vite virtual files ([5fb24ba](https://github.com/qmhc/vite-plugin-dts/commit/5fb24ba2c40ad2ef81e45c33533aada3bb5aefd3)), closes [#50](https://github.com/qmhc/vite-plugin-dts/issues/50)

## [0.9.8](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.7...v0.9.8) (2022-01-10)

### Bug Fixes

- put `copyDtsFiles` option in use ([#53](https://github.com/qmhc/vite-plugin-dts/issues/53)) ([261700f](https://github.com/qmhc/vite-plugin-dts/commit/261700f80a60b3bc1f22f391e00d9999205fe0d2)), closes [#52](https://github.com/qmhc/vite-plugin-dts/issues/52)

## [0.9.7](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.6...v0.9.7) (2021-12-30)

### Bug Fixes

- inserted entry not through beforeWriteFile ([e16b9b1](https://github.com/qmhc/vite-plugin-dts/commit/e16b9b15c66df887bac0ca0b6be05e4d1f8628ed)), closes [#48](https://github.com/qmhc/vite-plugin-dts/issues/48)

## [0.9.6](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.5...v0.9.6) (2021-11-23)

### Bug Fixes

- aliases are not resolved when find ends with '/' ([f04aab2](https://github.com/qmhc/vite-plugin-dts/commit/f04aab21f9f6dc02316a9ff3a9cd43e90cd97828)), closes [#37](https://github.com/qmhc/vite-plugin-dts/issues/37)
- not equally transform dts source files ([ede5146](https://github.com/qmhc/vite-plugin-dts/commit/ede514649282aec786549d490e8127824913914c))

## [0.9.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.4...v0.9.5) (2021-11-21)

### Bug Fixes

- ensure dts source files through beforeWriteFile hook ([3265412](https://github.com/qmhc/vite-plugin-dts/commit/3265412e26dd8736fefab0cf99e920d01bb246c5)), closes [#43](https://github.com/qmhc/vite-plugin-dts/issues/43)

## [0.9.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.3...v0.9.4) (2021-11-10)

### Bug Fixes

- cannot resolve types defined in dts files ([666ca09](https://github.com/qmhc/vite-plugin-dts/commit/666ca0925075bed6926f648a210f37d56af9577b)), closes [#42](https://github.com/qmhc/vite-plugin-dts/issues/42)
- take unused error when using setup-script ([c4145b7](https://github.com/qmhc/vite-plugin-dts/commit/c4145b7352359c79b8ba7c01a1c4afeace4dbc7c))

## [0.9.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.2...v0.9.3) (2021-11-03)

### Bug Fixes

- support require for cjs exports ([cc5aff9](https://github.com/qmhc/vite-plugin-dts/commit/cc5aff9b9906fc87f6012fb66566fd1937a9381e)), closes [#39](https://github.com/qmhc/vite-plugin-dts/issues/39)

## [0.9.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.1...v0.9.2) (2021-10-20)

### Bug Fixes

- support optional @vue/compiler-sfc ([34e1958](https://github.com/qmhc/vite-plugin-dts/commit/34e19587aa64c802cfbd99c5c8018bde8d0e1e2f))

## [0.9.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.3...v0.9.1) (2021-10-18)

### Bug Fixes

- watch mode not update ts/js files ([32a5699](https://github.com/qmhc/vite-plugin-dts/commit/32a5699a9b4f5a24b2a2a870ced43850a0573f82))

### Features

- add afterBuild hook option ([#34](https://github.com/qmhc/vite-plugin-dts/issues/34)) ([e836689](https://github.com/qmhc/vite-plugin-dts/commit/e83668988dab189d185ed9637032f7f80ba1e4db))
- afterDiagnostic and afterBuild support async ([c92d548](https://github.com/qmhc/vite-plugin-dts/commit/c92d54826b81f50fbb38fa909df730b323b75b24))
- skip dependencies by default ([8ca3ed3](https://github.com/qmhc/vite-plugin-dts/commit/8ca3ed30dfcc23c2dd9822fe6ef460a6c832dfe2))

## [0.8.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.2...v0.8.3) (2021-10-11)

### Bug Fixes

- support tsconfig.json using comments ([6e6e446](https://github.com/qmhc/vite-plugin-dts/commit/6e6e44683592060ebd27d1c5712058f2f0f0aeb6)), closes [#31](https://github.com/qmhc/vite-plugin-dts/issues/31)

## [0.8.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.1...v0.8.2) (2021-09-30)

### Bug Fixes

- create correct source for tsx/jsx script ([#29](https://github.com/qmhc/vite-plugin-dts/issues/29)) ([109721e](https://github.com/qmhc/vite-plugin-dts/commit/109721e89007cd702fe73fded44cc6b7efeef46e))

## [0.8.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.0...v0.8.1) (2021-09-22)

### Bug Fixes

- declarationDir make no file generated ([3313a19](https://github.com/qmhc/vite-plugin-dts/commit/3313a19da669bda7fa8fff3a5211652bc22e7413)), closes [#27](https://github.com/qmhc/vite-plugin-dts/issues/27)
- rewrite noEmit option when init porject ([735d26b](https://github.com/qmhc/vite-plugin-dts/commit/735d26b3cad9a90dd272a08448d238045306a1ba)), closes [#28](https://github.com/qmhc/vite-plugin-dts/issues/28)

# [0.8.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.7.0...v0.8.0) (2021-09-13)

### Bug Fixes

- adapt vue@3.2.6+ setup script ([1b62755](https://github.com/qmhc/vite-plugin-dts/commit/1b62755947972a67a034830cc7478fa1a65924c4))
- ouput files out of include bounds ([e1cdedf](https://github.com/qmhc/vite-plugin-dts/commit/e1cdedfc8b41a311d2c22674bd132f23242482ac)), closes [#24](https://github.com/qmhc/vite-plugin-dts/issues/24)

### Features

- add afterDiagnostic option ([7d43ece](https://github.com/qmhc/vite-plugin-dts/commit/7d43ece8fcb9b71d645982a45b01cd9136c525d8)), closes [#22](https://github.com/qmhc/vite-plugin-dts/issues/22)
- support build watch mode ([a920d97](https://github.com/qmhc/vite-plugin-dts/commit/a920d97825dced453f5f70d8776944c02b50e14b)), closes [#5](https://github.com/qmhc/vite-plugin-dts/issues/5)

# [0.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.6.0...v0.7.0) (2021-08-23)

### Bug Fixes

- support using script-setup alongside script ([39517ad](https://github.com/qmhc/vite-plugin-dts/commit/39517ad7119a4b97be7a2d874b43cb73cfa95f07)), closes [#21](https://github.com/qmhc/vite-plugin-dts/issues/21)

### Features

- add noEmitOnError and logDiagnostics options ([8a840fe](https://github.com/qmhc/vite-plugin-dts/commit/8a840fe2692e07e8e881c58ca8f6887d08493cc9))

# [0.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.3...v0.6.0) (2021-08-14)

### Bug Fixes

- resolve alias when using default import ([3121d5b](https://github.com/qmhc/vite-plugin-dts/commit/3121d5bd56a6863e5175c95b00d7a3dedc0cff6d)), closes [#20](https://github.com/qmhc/vite-plugin-dts/issues/20)

### Features

- add copyDtsFiles option ([bdab8c4](https://github.com/qmhc/vite-plugin-dts/commit/bdab8c4b4efa894209c2edeffbbe4d79680eafe9)), closes [#19](https://github.com/qmhc/vite-plugin-dts/issues/19)

## [0.5.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.2...v0.5.3) (2021-07-22)

### Bug Fixes

- add allowJs option dynamically ([36f8de2](https://github.com/qmhc/vite-plugin-dts/commit/36f8de28c68cd52945faeb375cd2931c6ad0468a)), closes [#17](https://github.com/qmhc/vite-plugin-dts/issues/17)
- add js and jsx files when allowJs ([0e1e6f7](https://github.com/qmhc/vite-plugin-dts/commit/0e1e6f7c09c85e169568b2c77c66d452d04a28a2))

## [0.5.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.1...v0.5.2) (2021-07-01)

### Bug Fixes

- cannot require @vue/compiler-sfc in monorepo ([fd9b5c1](https://github.com/qmhc/vite-plugin-dts/commit/fd9b5c1c018feb87e374cdf6671b7b8be14e775b)), closes [#14](https://github.com/qmhc/vite-plugin-dts/issues/14)

## [0.5.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.0...v0.5.1) (2021-06-18)

### Bug Fixes

- support insert entry from '.tsx' file ([e38b7c4](https://github.com/qmhc/vite-plugin-dts/commit/e38b7c4686a8d7405583a97078e97fbef4757da6))

# [0.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.3...v0.5.0) (2021-06-15)

### Bug Fixes

- ignore none export files ([f9c41bc](https://github.com/qmhc/vite-plugin-dts/commit/f9c41bc4e2fd498b53aa366a5f8f2a57589b6176))
- rename insertIndexEntry to insertTypesEntry ([c9d392e](https://github.com/qmhc/vite-plugin-dts/commit/c9d392ec3def98b541bb597c5ed38933b225fe5e))

### Features

- add clearPureImport option ([0357f69](https://github.com/qmhc/vite-plugin-dts/commit/0357f69485204f24d9830a4de59558a23eb66e19))
- defaults insert entry base on pkg.types ([9c71f28](https://github.com/qmhc/vite-plugin-dts/commit/9c71f28eac50d23a42d92bd79ac6d09f1be0544d))
- optional insert index type entry ([592a701](https://github.com/qmhc/vite-plugin-dts/commit/592a701d6213f955306df9de0c7f1d3243a28faa))

## [0.4.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.2...v0.4.3) (2021-06-11)

### Bug Fixes

- back off optional chaining and nullish coalescing ([8e09129](https://github.com/qmhc/vite-plugin-dts/commit/8e09129c1600a013a2c3c50983ab7f358216757f)), closes [#2](https://github.com/qmhc/vite-plugin-dts/issues/2)
- transform fs/promise to fs-extra ([1794b0b](https://github.com/qmhc/vite-plugin-dts/commit/1794b0b93baf4212b4efc5ef06a697adf70e4933)), closes [#4](https://github.com/qmhc/vite-plugin-dts/issues/4)

### Performance Improvements

- use menory result generate bundle ([858bf31](https://github.com/qmhc/vite-plugin-dts/commit/858bf317d16c995feb73e53339d61f7602e36484))

## [0.4.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.1...v0.4.2) (2021-06-09)

### Bug Fixes

- incomplete remove pure import ([a1fd54e](https://github.com/qmhc/vite-plugin-dts/commit/a1fd54e769f1b50ee5858d33879b2a6732625797))
- mamual set include and exclude ([b6fb510](https://github.com/qmhc/vite-plugin-dts/commit/b6fb5106206df9de83276687dd1451fa3d882067))
- more accurate normalize glob ([1d65c47](https://github.com/qmhc/vite-plugin-dts/commit/1d65c47811344a6b566a8dcf22cd22d9298d5a02))
- set rootDir if not set in compilerOptions ([a1d83d2](https://github.com/qmhc/vite-plugin-dts/commit/a1d83d2aa56a32ebef11b9d98fa508a6d9fbd412)), closes [#3](https://github.com/qmhc/vite-plugin-dts/issues/3)
- transform alias include dynamic imports ([a6919b4](https://github.com/qmhc/vite-plugin-dts/commit/a6919b4760cf5cbefbdad1ac674b8a8275dc27dd))
- transform alias include dynamic imports ([3a5511e](https://github.com/qmhc/vite-plugin-dts/commit/3a5511e3e0b961d7f4ac393da623502a186a0538))

## [0.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.0...v0.4.1) (2021-06-08)

### Bug Fixes

- dynamic import regexp endings include ']' and ')' ([e5f37a6](https://github.com/qmhc/vite-plugin-dts/commit/e5f37a6d9e232e268ea1b2ec2eadb6c7bc7d7115))

# [0.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.5...v0.4.0) (2021-06-08)

### Bug Fixes

- bundle only once for multiple formats ([be37fbf](https://github.com/qmhc/vite-plugin-dts/commit/be37fbfcbd03dd23c73908a2d7f2d019437e003a))

### Features

- bundle all from tsconfig include ([252554a](https://github.com/qmhc/vite-plugin-dts/commit/252554af1fa403af1ee00dba16a1c7938e7374c6))

### BREAKING CHANGES

- Deprecated include and exclude options

## [0.3.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.4...v0.3.5) (2021-06-08)

### Bug Fixes

- includes prue type export files ([1341359](https://github.com/qmhc/vite-plugin-dts/commit/1341359b9943fd961ec0d3d40d71252e77c73390))
- incorrect path in transform alias ([d686ff9](https://github.com/qmhc/vite-plugin-dts/commit/d686ff94157c400d7f235331a47fbb9d452afeb9))

## [0.3.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.3...v0.3.4) (2021-06-07)

### Bug Fixes

- remove pure import ([fe241de](https://github.com/qmhc/vite-plugin-dts/commit/fe241de5b583cb5bf2dde83383a8a43e53724ce1))
- static import include relative path ([4065217](https://github.com/qmhc/vite-plugin-dts/commit/40652178b9071509269e6b66cbbbcb3562cf349d))

## [0.3.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.2...v0.3.3) (2021-06-07)

### Bug Fixes

- keep output relative to root not to entry dir ([e83ec64](https://github.com/qmhc/vite-plugin-dts/commit/e83ec643536f888166055a5495db3e2fd1030584))

### BREAKING CHANGES

- Ouput declaration structure no longer relative to entry dir

## [0.3.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.1...v0.3.2) (2021-06-07)

### Bug Fixes

- default root base on vite config ([787ebc1](https://github.com/qmhc/vite-plugin-dts/commit/787ebc175d07370628589a6fc73e325b29655a0b))

## [0.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.0...v0.3.1) (2021-06-06)

### Bug Fixes

- vue file explicit type lost ([d0d8803](https://github.com/qmhc/vite-plugin-dts/commit/d0d88038fb51d71dfb71ab4d0223600801d50349))

# [0.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.2.0...v0.3.0) (2021-06-06)

### Bug Fixes

- transform alias import to relative path ([6d5a2d5](https://github.com/qmhc/vite-plugin-dts/commit/6d5a2d5b5ba691b5572727cbf42b340d05964951))

### Features

- projectOptions refine to compilerOptions and tsConfigFilePath ([eb61113](https://github.com/qmhc/vite-plugin-dts/commit/eb611135446fff7bc82e3bd0d1d2b856a829de98))

### BREAKING CHANGES

- projectOptions no longer supported, the project init should be up to the plugin.

# [0.2.0](https://github.com/qmhc/vite-plugin-dts/compare/b2f0c0aa6eea5b48703248eca3294c5d845404ba...v0.2.0) (2021-06-05)

### Features

- add beforeWriteFile hook ([139e818](https://github.com/qmhc/vite-plugin-dts/commit/139e818cecfa80d4208b3f5ced55e7db57bf7e52))
- add outputDir option ([f289723](https://github.com/qmhc/vite-plugin-dts/commit/f289723672279795c0b96aaac3abf83dd8913b20))
- add transform dynamic import to static ([b2f0c0a](https://github.com/qmhc/vite-plugin-dts/commit/b2f0c0aa6eea5b48703248eca3294c5d845404ba))

# [3.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2023-06-27)

### Bug Fixes

- incorrect entryRoot when in single inner entry ([96d32d1](https://github.com/qmhc/vite-plugin-dts/commit/96d32d127b73d48ce192424c4596fe24a2d24619))
- promise A+ specification for `isPromise` method ([#228](https://github.com/qmhc/vite-plugin-dts/issues/228)) ([3454a35](https://github.com/qmhc/vite-plugin-dts/commit/3454a356683a97752b0161a0e5be0328aa55a4f3))

# [3.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.3.0...v3.0.0-beta.2) (2023-06-27)

### Features

- transfer to use Volar, support Rollup, improve watch mode ([#226](https://github.com/qmhc/vite-plugin-dts/issues/226)) ([bb7949c](https://github.com/qmhc/vite-plugin-dts/commit/bb7949c841141b2305640d953be4dddf45ce7d1a))

### BREAKING CHANGES

- Deprecated options: `noEmitOnError`, `skipDiagnostics`
  and `libFolderPath`. Rename options: `outputDir` -> `outDir`,
  `tsConfigFilePath` -> `tsconfigPath`.

# [2.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.1.0...v2.3.0) (2023-04-17)

### Features

- compatible with svelte ([#197](https://github.com/qmhc/vite-plugin-dts/issues/197)) ([5d38517](https://github.com/qmhc/vite-plugin-dts/commit/5d38517ee16fdfc2009725b9146bfe38c49d1709))
- supports multiple extends in tsconfig.json ([#202](https://github.com/qmhc/vite-plugin-dts/issues/202)) ([9fdac66](https://github.com/qmhc/vite-plugin-dts/commit/9fdac66c0cfd827791208a31fbbefd1fad4ac2bf)), closes [#200](https://github.com/qmhc/vite-plugin-dts/issues/200)

# [2.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.2...v2.1.0) (2023-03-08)

### Features

- add bundledPackages configuration ([#186](https://github.com/qmhc/vite-plugin-dts/issues/186)) ([8997680](https://github.com/qmhc/vite-plugin-dts/commit/8997680776d8f35ae5248cc73b2d6a734e5dbc4a))

## [2.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.1...v2.0.2) (2023-02-23)

### Bug Fixes

- recursively resolve extended tsconfig path ([#181](https://github.com/qmhc/vite-plugin-dts/issues/181)) ([7ca8502](https://github.com/qmhc/vite-plugin-dts/commit/7ca85026e9a3e345c334222af5ffa823bda380a7))

## [2.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0...v2.0.1) (2023-02-23)

### Bug Fixes

- **vue:** correctly remove components for normal script ([6dbd9af](https://github.com/qmhc/vite-plugin-dts/commit/6dbd9af3bbd8175ef8a1cee4054ba38f330eef0c))
- **vue:** error when parse no argument function ([4db63b4](https://github.com/qmhc/vite-plugin-dts/commit/4db63b4b1b48686146f07e7e69dcbd4a82b33efb))

# [2.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.3...v2.0.0) (2023-02-23)

### Bug Fixes

- ensure watch all the files defined in include ([42a755c](https://github.com/qmhc/vite-plugin-dts/commit/42a755cf502cdfa8dc9dab0f600e8cc2a46eec18)), closes [#151](https://github.com/qmhc/vite-plugin-dts/issues/151)
- incorrect path resolve when copy dts source files ([434f69e](https://github.com/qmhc/vite-plugin-dts/commit/434f69e9629db5b2e74e609ffbc5f9cd436c1177)), closes [#179](https://github.com/qmhc/vite-plugin-dts/issues/179)
- **react:** unlimited init order when using with react plugin ([92b82ff](https://github.com/qmhc/vite-plugin-dts/commit/92b82ff47e0480c86c76e298feaa7cea8e06f7fa)), closes [#148](https://github.com/qmhc/vite-plugin-dts/issues/148)

### BREAKING CHANGES

- `copyDtsFiles` option now default to false.

# [2.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2023-02-21)

### Bug Fixes

- support manually create dts for source file ([2174868](https://github.com/qmhc/vite-plugin-dts/commit/2174868158766fd16a72f9f44b979d2c62d8ab07)), closes [#178](https://github.com/qmhc/vite-plugin-dts/issues/178)

### Features

- support parse types entry from exports in package.json ([f033cf8](https://github.com/qmhc/vite-plugin-dts/commit/f033cf876b51d7e11f1aa562567f3fd1f97d04f5))

# [2.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2023-02-20)

### Bug Fixes

- should re-transform when file changed in watch mode ([eafdd3c](https://github.com/qmhc/vite-plugin-dts/commit/eafdd3ce7d6757f93a378130b8e34f41e17e4004)), closes [#99](https://github.com/qmhc/vite-plugin-dts/issues/99)
- **vue:** preprocess not direct exported component ([8bd769e](https://github.com/qmhc/vite-plugin-dts/commit/8bd769e013f845a8e486d354d9f8517bd7b02e72))

### Features

- support specify log level of plugin ([2c1aeb0](https://github.com/qmhc/vite-plugin-dts/commit/2c1aeb01637aa4511f4e4c26b891b6e7ea235d50)), closes [#177](https://github.com/qmhc/vite-plugin-dts/issues/177)

# [2.0.0-beta.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2023-02-17)

### Bug Fixes

- **vue:** conversion error when using outside ts props ([25307cf](https://github.com/qmhc/vite-plugin-dts/commit/25307cf6ef89aa8501c8c35ff8ca519021adafea)), closes [#175](https://github.com/qmhc/vite-plugin-dts/issues/175)
- **vue:** remove components option before inferring ([90f8ac1](https://github.com/qmhc/vite-plugin-dts/commit/90f8ac160412de418bc7dc31c97f4ca7daa524ca))

# [2.0.0-beta.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.3...v2.0.0-beta.0) (2023-02-16)

### Bug Fixes

- override composite for root tsconfig ([df1d0f4](https://github.com/qmhc/vite-plugin-dts/commit/df1d0f42d0d9d9341d7766f5c147e7e3fa3733cf)), closes [#153](https://github.com/qmhc/vite-plugin-dts/issues/153)
- **vue:** ignore css vars when compile ([6d2369a](https://github.com/qmhc/vite-plugin-dts/commit/6d2369afe31c18b3dff45296d74b90aba86bb656)), closes [#167](https://github.com/qmhc/vite-plugin-dts/issues/167)

### Features

- **vue:** accurate types inferring for exposed and props ([#173](https://github.com/qmhc/vite-plugin-dts/issues/173)) ([c25448c](https://github.com/qmhc/vite-plugin-dts/commit/c25448c90f3b3969d51dbfa31ad5dc3ce2a9a2aa))

## [1.7.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.2...v1.7.3) (2023-02-14)

### Bug Fixes

- incorrect compilerOptions when rollup dts ([9dd8d9c](https://github.com/qmhc/vite-plugin-dts/commit/9dd8d9c41bed7f79e24ee890c1f28d867346326e)), closes [#171](https://github.com/qmhc/vite-plugin-dts/issues/171)
- normalize `mts` and `cts` declaration files extension ([410288a](https://github.com/qmhc/vite-plugin-dts/commit/410288ac65d7fb4a3065d93c6d7be9e2a8dd3f77)), closes [#169](https://github.com/qmhc/vite-plugin-dts/issues/169)

## [1.7.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.1...v1.7.2) (2023-01-31)

### Bug Fixes

- correct .d.ts extension in multiple outputs ([5c9709c](https://github.com/qmhc/vite-plugin-dts/commit/5c9709c4082ee36f2f28b4ad6e21b846aa27d5d6)), closes [#144](https://github.com/qmhc/vite-plugin-dts/issues/144)
- insertTypesEntry config supports publishConfig.types ([#164](https://github.com/qmhc/vite-plugin-dts/issues/164)) ([dae4ef9](https://github.com/qmhc/vite-plugin-dts/commit/dae4ef9de1175cf5bdc5a7dedfa60d7bab381dba))
- mark typescript as external dependency ([#160](https://github.com/qmhc/vite-plugin-dts/issues/160)) ([31e10d4](https://github.com/qmhc/vite-plugin-dts/commit/31e10d4ec2a37148ad63fdfb141264d6c4966135))

## [1.7.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.0...v1.7.1) (2022-11-14)

### Bug Fixes

- ensure exulde working when transform ([aea8ebd](https://github.com/qmhc/vite-plugin-dts/commit/aea8ebdc4eac489bc62ccebf3552421bd43d318c)), closes [#143](https://github.com/qmhc/vite-plugin-dts/issues/143) [#140](https://github.com/qmhc/vite-plugin-dts/issues/140) [#97](https://github.com/qmhc/vite-plugin-dts/issues/97)
- import vite plugin type via dynamic import ([8bd73c8](https://github.com/qmhc/vite-plugin-dts/commit/8bd73c8fae010ba0d32df8b144345b7f641a6085)), closes [#139](https://github.com/qmhc/vite-plugin-dts/issues/139)

# [1.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.6...v1.7.0) (2022-11-07)

### Bug Fixes

- compiler missing plugin `decorators-legacy` ([#138](https://github.com/qmhc/vite-plugin-dts/issues/138)) ([717af2f](https://github.com/qmhc/vite-plugin-dts/commit/717af2f4bc1b5bd549339179bc5b75dbbd9a348a))
- derprecate logDiagnostics option ([e405328](https://github.com/qmhc/vite-plugin-dts/commit/e405328f64870919a3ee4100fac087870ed4662e))
- incorrect compiler address resolution ([#133](https://github.com/qmhc/vite-plugin-dts/issues/133)) ([01cc125](https://github.com/qmhc/vite-plugin-dts/commit/01cc125ea98b1994e364487f73d71b0cb6ebcdbf))

### Features

- support customize typescript lib path ([27b83f3](https://github.com/qmhc/vite-plugin-dts/commit/27b83f3423f50307852257f3747c112f2f3cd325)), closes [#134](https://github.com/qmhc/vite-plugin-dts/issues/134)
- support multiple entries for lib mode ([1fafe54](https://github.com/qmhc/vite-plugin-dts/commit/1fafe54991431ce86a404ecb7e179ef1aa8aff0a)), closes [#136](https://github.com/qmhc/vite-plugin-dts/issues/136)

## [1.6.6](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.5...v1.6.6) (2022-10-13)

### Bug Fixes

- adapt @microsoft/api-extractor 7.33+ ([5acb4be](https://github.com/qmhc/vite-plugin-dts/commit/5acb4be4d1e4fe41e42a38ec9e92eeeb6f3a9c15))
- always ship included dts files into soure ([fc345e3](https://github.com/qmhc/vite-plugin-dts/commit/fc345e31b79fd7ca40581727d1964f80d1b9db82)), closes [#126](https://github.com/qmhc/vite-plugin-dts/issues/126)

## [1.6.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.4...v1.6.5) (2022-10-06)

### Bug Fixes

- remove pnpm limitation in preinstall to support npm@6 ([d7167b8](https://github.com/qmhc/vite-plugin-dts/commit/d7167b83381c54075e0e9114c07fe9451b6ffa2d)), closes [#123](https://github.com/qmhc/vite-plugin-dts/issues/123)

## [1.6.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.3...v1.6.4) (2022-09-30)

### Bug Fixes

- patch cjs vars for esm scope ([57e093d](https://github.com/qmhc/vite-plugin-dts/commit/57e093d734e4b81bbeeecbd694b269cca698f914)), closes [#119](https://github.com/qmhc/vite-plugin-dts/issues/119) [#122](https://github.com/qmhc/vite-plugin-dts/issues/122)

## [1.6.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.2...v1.6.3) (2022-09-30)

### Bug Fixes

- both support cjs and esm(using by tsx) ([38bd6a6](https://github.com/qmhc/vite-plugin-dts/commit/38bd6a6789fe375dd5da0aec1ea9b6816751719a))

## [1.6.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.1...v1.6.2) (2022-09-30)

### Bug Fixes

- ensure generate dts for type only files ([f3f4919](https://github.com/qmhc/vite-plugin-dts/commit/f3f4919fa441a27b7d842f1e64dd8d711bd05ec9)), closes [#118](https://github.com/qmhc/vite-plugin-dts/issues/118)

## [1.6.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.0...v1.6.1) (2022-09-28)

### Bug Fixes

- path error in cjs running ([0832af4](https://github.com/qmhc/vite-plugin-dts/commit/0832af4ab49d8166e14b6897bb1538ec6ddf3bb5))

# [1.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.5.0...v1.6.0) (2022-09-28)

### Bug Fixes

- correct compilerOptions.outDir for project init ([8699219](https://github.com/qmhc/vite-plugin-dts/commit/86992194411017e75b1d17c3f72d631267ec187b))
- type error occurred while define `defineProps` retruns as `props` ([41eb53a](https://github.com/qmhc/vite-plugin-dts/commit/41eb53a4da681d2c809dc8a7674a03284acbea02)), closes [#113](https://github.com/qmhc/vite-plugin-dts/issues/113)

### Features

- skip write file when `beforeWriteFile` return exact `false` ([9404ebc](https://github.com/qmhc/vite-plugin-dts/commit/9404ebc811b919a59a21b954d4ba4d43be255390)), closes [#110](https://github.com/qmhc/vite-plugin-dts/issues/110)

# [1.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.1...v1.5.0) (2022-09-11)

### Features

- improve aliasesExclude to support more flexible definition ([f652523](https://github.com/qmhc/vite-plugin-dts/commit/f6525235758b0d29347feb7f21a5085dc81b13a4)), closes [#93](https://github.com/qmhc/vite-plugin-dts/issues/93)

## [1.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.0...v1.4.1) (2022-08-01)

### Bug Fixes

- includes `extends` field when parse tsconfig.json ([#96](https://github.com/qmhc/vite-plugin-dts/issues/96)) ([2631de0](https://github.com/qmhc/vite-plugin-dts/commit/2631de0725e89083752fd590ff604f3f763abd3a))

# [1.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.1...v1.4.0) (2022-07-20)

### Bug Fixes

- ensure emit dts when no script sfc in vue component ([869a466](https://github.com/qmhc/vite-plugin-dts/commit/869a4662af2e690b2e1e63faf941a9e1343dd6ea)), closes [#88](https://github.com/qmhc/vite-plugin-dts/issues/88)

### Features

- support vue 2.7 ([c4e2c4b](https://github.com/qmhc/vite-plugin-dts/commit/c4e2c4b479da837ab697220284ac3c54e89c54a0)), closes [#87](https://github.com/qmhc/vite-plugin-dts/issues/87)

## [1.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.0...v1.3.1) (2022-07-18)

### Bug Fixes

- dynamiclly adjust the exports of inserted index file ([abc9431](https://github.com/qmhc/vite-plugin-dts/commit/abc943143b97dbec0935b62171b16faeebd6fbf4)), closes [#81](https://github.com/qmhc/vite-plugin-dts/issues/81) [#86](https://github.com/qmhc/vite-plugin-dts/issues/86)
- missing inserted entry when multiple outputs ([39ff8ab](https://github.com/qmhc/vite-plugin-dts/commit/39ff8abc0e1dda232c3cf1e6f25ff8daddb37acb))

# [1.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.1...v1.3.0) (2022-07-13)

### Bug Fixes

- aliasesExclude not work when includes empty value ([#85](https://github.com/qmhc/vite-plugin-dts/issues/85)) ([8b9b9aa](https://github.com/qmhc/vite-plugin-dts/commit/8b9b9aa4e9d1c4fa84a2945f4f2421c9269240ff))
- correct type files generate when root is set ([#68](https://github.com/qmhc/vite-plugin-dts/issues/68)) ([0b491bd](https://github.com/qmhc/vite-plugin-dts/commit/0b491bd3720c5b6065dd00a00f9b95e39bf6c8fe))

### Features

- support multiple output dirs ([cd19ee7](https://github.com/qmhc/vite-plugin-dts/commit/cd19ee7f4cf25906a3ffcd89a6c93baf7c7266ed))

## [1.2.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.0...v1.2.1) (2022-07-05)

### Bug Fixes

- add parser plugins param for vue compiler ([7d6bd16](https://github.com/qmhc/vite-plugin-dts/commit/7d6bd16af88701152bf8847e160acf6169bd0918)), closes [#78](https://github.com/qmhc/vite-plugin-dts/issues/78)
- insert entry fail when no default export in source entry ([#82](https://github.com/qmhc/vite-plugin-dts/issues/82)) ([1a4b161](https://github.com/qmhc/vite-plugin-dts/commit/1a4b161647ba1826c3bfa7c9ca5ee7ca4c3ee4bf))

# [1.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.1...v1.2.0) (2022-05-24)

### Bug Fixes

- support read typings form package.json ([6b1bb29](https://github.com/qmhc/vite-plugin-dts/commit/6b1bb2951512733091b950f5767bfe5a1cbe8992))

### Features

- add `aliasesExclude` option ([#75](https://github.com/qmhc/vite-plugin-dts/issues/75)) ([7588ba4](https://github.com/qmhc/vite-plugin-dts/commit/7588ba4755c19e25ca2482b95cb99a59621e693e)), closes [#73](https://github.com/qmhc/vite-plugin-dts/issues/73)
- support override compilerOptions when rollup up ([995612d](https://github.com/qmhc/vite-plugin-dts/commit/995612d5eafa6b610a9ab8826ee7b8691c673b4e)), closes [#74](https://github.com/qmhc/vite-plugin-dts/issues/74)

## [1.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.0...v1.1.1) (2022-04-25)

### Bug Fixes

- incorrect rollup entry path ([a9309d8](https://github.com/qmhc/vite-plugin-dts/commit/a9309d8ca8c0531d1579d3a541cd67ac0a37ce1b))

# [1.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.5...v1.1.0) (2022-04-18)

### Bug Fixes

- lose the type of entry export default ([50f55de](https://github.com/qmhc/vite-plugin-dts/commit/50f55de3ec89d7995056c428a37d16e0cd2a6a4a))

### Features

- support rollup dts files after output ([1d87b44](https://github.com/qmhc/vite-plugin-dts/commit/1d87b44dff3c54a5b1b983b060d3d0d4972c1d94))

## [1.0.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.4...v1.0.5) (2022-04-02)

### Bug Fixes

- entryRoot option not work ([#66](https://github.com/qmhc/vite-plugin-dts/issues/66)) ([bca6423](https://github.com/qmhc/vite-plugin-dts/commit/bca64236076a28dbdd7e6e373c46f3af3723b4e1))

## [1.0.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.3...v1.0.4) (2022-03-28)

### Bug Fixes

- transfer 'debug' to dependencies ([7af9232](https://github.com/qmhc/vite-plugin-dts/commit/7af9232e381f6d572a543706d640c6ecdb5a6c00))

## [1.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.2...v1.0.3) (2022-03-25)

### Bug Fixes

- **example:** cannot resolve types through symlinks ([0914a6a](https://github.com/qmhc/vite-plugin-dts/commit/0914a6ad8dde3514f94e586798d6d73a9c2ac165)), closes [#63](https://github.com/qmhc/vite-plugin-dts/issues/63)

## [1.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.1...v1.0.2) (2022-03-24)

### Bug Fixes

- incorrect entryRoot calculation in linux an mac ([0136990](https://github.com/qmhc/vite-plugin-dts/commit/01369903f484eb74ae6fa23b49537fa64d610706)), closes [#62](https://github.com/qmhc/vite-plugin-dts/issues/62)

## [1.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0...v1.0.1) (2022-03-22)

### Bug Fixes

- missing some libs defind in dependencies ([ab7960f](https://github.com/qmhc/vite-plugin-dts/commit/ab7960f0d957aad6945ef469274bca3e142baa87))

# [1.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.10...v1.0.0) (2022-03-22)

### Features

- support entryRoot option ([c939e35](https://github.com/qmhc/vite-plugin-dts/commit/c939e358dfecacaf2dfd2b0d42118c16462c260a)), closes [#59](https://github.com/qmhc/vite-plugin-dts/issues/59)

### BREAKING CHANGES

- The calculating output paths funtion of root option is
  assigned to entryRoot option, and currently will auto calculating the
  smallest public path as the default value for entryRoot option.

## [0.9.10](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.9...v0.9.10) (2022-03-12)

### Bug Fixes

- make default include same as tsconfig.json ([5ca7fc5](https://github.com/qmhc/vite-plugin-dts/commit/5ca7fc51ab321d4b25ce9856c0e52894c1264d44)), closes [#58](https://github.com/qmhc/vite-plugin-dts/issues/58)

## [0.9.9](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.8...v0.9.9) (2022-01-11)

### Bug Fixes

- should filter vite virtual files ([5fb24ba](https://github.com/qmhc/vite-plugin-dts/commit/5fb24ba2c40ad2ef81e45c33533aada3bb5aefd3)), closes [#50](https://github.com/qmhc/vite-plugin-dts/issues/50)

## [0.9.8](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.7...v0.9.8) (2022-01-10)

### Bug Fixes

- put `copyDtsFiles` option in use ([#53](https://github.com/qmhc/vite-plugin-dts/issues/53)) ([261700f](https://github.com/qmhc/vite-plugin-dts/commit/261700f80a60b3bc1f22f391e00d9999205fe0d2)), closes [#52](https://github.com/qmhc/vite-plugin-dts/issues/52)

## [0.9.7](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.6...v0.9.7) (2021-12-30)

### Bug Fixes

- inserted entry not through beforeWriteFile ([e16b9b1](https://github.com/qmhc/vite-plugin-dts/commit/e16b9b15c66df887bac0ca0b6be05e4d1f8628ed)), closes [#48](https://github.com/qmhc/vite-plugin-dts/issues/48)

## [0.9.6](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.5...v0.9.6) (2021-11-23)

### Bug Fixes

- aliases are not resolved when find ends with '/' ([f04aab2](https://github.com/qmhc/vite-plugin-dts/commit/f04aab21f9f6dc02316a9ff3a9cd43e90cd97828)), closes [#37](https://github.com/qmhc/vite-plugin-dts/issues/37)
- not equally transform dts source files ([ede5146](https://github.com/qmhc/vite-plugin-dts/commit/ede514649282aec786549d490e8127824913914c))

## [0.9.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.4...v0.9.5) (2021-11-21)

### Bug Fixes

- ensure dts source files through beforeWriteFile hook ([3265412](https://github.com/qmhc/vite-plugin-dts/commit/3265412e26dd8736fefab0cf99e920d01bb246c5)), closes [#43](https://github.com/qmhc/vite-plugin-dts/issues/43)

## [0.9.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.3...v0.9.4) (2021-11-10)

### Bug Fixes

- cannot resolve types defined in dts files ([666ca09](https://github.com/qmhc/vite-plugin-dts/commit/666ca0925075bed6926f648a210f37d56af9577b)), closes [#42](https://github.com/qmhc/vite-plugin-dts/issues/42)
- take unused error when using setup-script ([c4145b7](https://github.com/qmhc/vite-plugin-dts/commit/c4145b7352359c79b8ba7c01a1c4afeace4dbc7c))

## [0.9.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.2...v0.9.3) (2021-11-03)

### Bug Fixes

- support require for cjs exports ([cc5aff9](https://github.com/qmhc/vite-plugin-dts/commit/cc5aff9b9906fc87f6012fb66566fd1937a9381e)), closes [#39](https://github.com/qmhc/vite-plugin-dts/issues/39)

## [0.9.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.1...v0.9.2) (2021-10-20)

### Bug Fixes

- support optional @vue/compiler-sfc ([34e1958](https://github.com/qmhc/vite-plugin-dts/commit/34e19587aa64c802cfbd99c5c8018bde8d0e1e2f))

## [0.9.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.3...v0.9.1) (2021-10-18)

### Bug Fixes

- watch mode not update ts/js files ([32a5699](https://github.com/qmhc/vite-plugin-dts/commit/32a5699a9b4f5a24b2a2a870ced43850a0573f82))

### Features

- add afterBuild hook option ([#34](https://github.com/qmhc/vite-plugin-dts/issues/34)) ([e836689](https://github.com/qmhc/vite-plugin-dts/commit/e83668988dab189d185ed9637032f7f80ba1e4db))
- afterDiagnostic and afterBuild support async ([c92d548](https://github.com/qmhc/vite-plugin-dts/commit/c92d54826b81f50fbb38fa909df730b323b75b24))
- skip dependencies by default ([8ca3ed3](https://github.com/qmhc/vite-plugin-dts/commit/8ca3ed30dfcc23c2dd9822fe6ef460a6c832dfe2))

## [0.8.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.2...v0.8.3) (2021-10-11)

### Bug Fixes

- support tsconfig.json using comments ([6e6e446](https://github.com/qmhc/vite-plugin-dts/commit/6e6e44683592060ebd27d1c5712058f2f0f0aeb6)), closes [#31](https://github.com/qmhc/vite-plugin-dts/issues/31)

## [0.8.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.1...v0.8.2) (2021-09-30)

### Bug Fixes

- create correct source for tsx/jsx script ([#29](https://github.com/qmhc/vite-plugin-dts/issues/29)) ([109721e](https://github.com/qmhc/vite-plugin-dts/commit/109721e89007cd702fe73fded44cc6b7efeef46e))

## [0.8.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.0...v0.8.1) (2021-09-22)

### Bug Fixes

- declarationDir make no file generated ([3313a19](https://github.com/qmhc/vite-plugin-dts/commit/3313a19da669bda7fa8fff3a5211652bc22e7413)), closes [#27](https://github.com/qmhc/vite-plugin-dts/issues/27)
- rewrite noEmit option when init porject ([735d26b](https://github.com/qmhc/vite-plugin-dts/commit/735d26b3cad9a90dd272a08448d238045306a1ba)), closes [#28](https://github.com/qmhc/vite-plugin-dts/issues/28)

# [0.8.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.7.0...v0.8.0) (2021-09-13)

### Bug Fixes

- adapt vue@3.2.6+ setup script ([1b62755](https://github.com/qmhc/vite-plugin-dts/commit/1b62755947972a67a034830cc7478fa1a65924c4))
- ouput files out of include bounds ([e1cdedf](https://github.com/qmhc/vite-plugin-dts/commit/e1cdedfc8b41a311d2c22674bd132f23242482ac)), closes [#24](https://github.com/qmhc/vite-plugin-dts/issues/24)

### Features

- add afterDiagnostic option ([7d43ece](https://github.com/qmhc/vite-plugin-dts/commit/7d43ece8fcb9b71d645982a45b01cd9136c525d8)), closes [#22](https://github.com/qmhc/vite-plugin-dts/issues/22)
- support build watch mode ([a920d97](https://github.com/qmhc/vite-plugin-dts/commit/a920d97825dced453f5f70d8776944c02b50e14b)), closes [#5](https://github.com/qmhc/vite-plugin-dts/issues/5)

# [0.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.6.0...v0.7.0) (2021-08-23)

### Bug Fixes

- support using script-setup alongside script ([39517ad](https://github.com/qmhc/vite-plugin-dts/commit/39517ad7119a4b97be7a2d874b43cb73cfa95f07)), closes [#21](https://github.com/qmhc/vite-plugin-dts/issues/21)

### Features

- add noEmitOnError and logDiagnostics options ([8a840fe](https://github.com/qmhc/vite-plugin-dts/commit/8a840fe2692e07e8e881c58ca8f6887d08493cc9))

# [0.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.3...v0.6.0) (2021-08-14)

### Bug Fixes

- resolve alias when using default import ([3121d5b](https://github.com/qmhc/vite-plugin-dts/commit/3121d5bd56a6863e5175c95b00d7a3dedc0cff6d)), closes [#20](https://github.com/qmhc/vite-plugin-dts/issues/20)

### Features

- add copyDtsFiles option ([bdab8c4](https://github.com/qmhc/vite-plugin-dts/commit/bdab8c4b4efa894209c2edeffbbe4d79680eafe9)), closes [#19](https://github.com/qmhc/vite-plugin-dts/issues/19)

## [0.5.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.2...v0.5.3) (2021-07-22)

### Bug Fixes

- add allowJs option dynamically ([36f8de2](https://github.com/qmhc/vite-plugin-dts/commit/36f8de28c68cd52945faeb375cd2931c6ad0468a)), closes [#17](https://github.com/qmhc/vite-plugin-dts/issues/17)
- add js and jsx files when allowJs ([0e1e6f7](https://github.com/qmhc/vite-plugin-dts/commit/0e1e6f7c09c85e169568b2c77c66d452d04a28a2))

## [0.5.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.1...v0.5.2) (2021-07-01)

### Bug Fixes

- cannot require @vue/compiler-sfc in monorepo ([fd9b5c1](https://github.com/qmhc/vite-plugin-dts/commit/fd9b5c1c018feb87e374cdf6671b7b8be14e775b)), closes [#14](https://github.com/qmhc/vite-plugin-dts/issues/14)

## [0.5.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.0...v0.5.1) (2021-06-18)

### Bug Fixes

- support insert entry from '.tsx' file ([e38b7c4](https://github.com/qmhc/vite-plugin-dts/commit/e38b7c4686a8d7405583a97078e97fbef4757da6))

# [0.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.3...v0.5.0) (2021-06-15)

### Bug Fixes

- ignore none export files ([f9c41bc](https://github.com/qmhc/vite-plugin-dts/commit/f9c41bc4e2fd498b53aa366a5f8f2a57589b6176))
- rename insertIndexEntry to insertTypesEntry ([c9d392e](https://github.com/qmhc/vite-plugin-dts/commit/c9d392ec3def98b541bb597c5ed38933b225fe5e))

### Features

- add clearPureImport option ([0357f69](https://github.com/qmhc/vite-plugin-dts/commit/0357f69485204f24d9830a4de59558a23eb66e19))
- defaults insert entry base on pkg.types ([9c71f28](https://github.com/qmhc/vite-plugin-dts/commit/9c71f28eac50d23a42d92bd79ac6d09f1be0544d))
- optional insert index type entry ([592a701](https://github.com/qmhc/vite-plugin-dts/commit/592a701d6213f955306df9de0c7f1d3243a28faa))

## [0.4.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.2...v0.4.3) (2021-06-11)

### Bug Fixes

- back off optional chaining and nullish coalescing ([8e09129](https://github.com/qmhc/vite-plugin-dts/commit/8e09129c1600a013a2c3c50983ab7f358216757f)), closes [#2](https://github.com/qmhc/vite-plugin-dts/issues/2)
- transform fs/promise to fs-extra ([1794b0b](https://github.com/qmhc/vite-plugin-dts/commit/1794b0b93baf4212b4efc5ef06a697adf70e4933)), closes [#4](https://github.com/qmhc/vite-plugin-dts/issues/4)

### Performance Improvements

- use menory result generate bundle ([858bf31](https://github.com/qmhc/vite-plugin-dts/commit/858bf317d16c995feb73e53339d61f7602e36484))

## [0.4.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.1...v0.4.2) (2021-06-09)

### Bug Fixes

- incomplete remove pure import ([a1fd54e](https://github.com/qmhc/vite-plugin-dts/commit/a1fd54e769f1b50ee5858d33879b2a6732625797))
- mamual set include and exclude ([b6fb510](https://github.com/qmhc/vite-plugin-dts/commit/b6fb5106206df9de83276687dd1451fa3d882067))
- more accurate normalize glob ([1d65c47](https://github.com/qmhc/vite-plugin-dts/commit/1d65c47811344a6b566a8dcf22cd22d9298d5a02))
- set rootDir if not set in compilerOptions ([a1d83d2](https://github.com/qmhc/vite-plugin-dts/commit/a1d83d2aa56a32ebef11b9d98fa508a6d9fbd412)), closes [#3](https://github.com/qmhc/vite-plugin-dts/issues/3)
- transform alias include dynamic imports ([a6919b4](https://github.com/qmhc/vite-plugin-dts/commit/a6919b4760cf5cbefbdad1ac674b8a8275dc27dd))
- transform alias include dynamic imports ([3a5511e](https://github.com/qmhc/vite-plugin-dts/commit/3a5511e3e0b961d7f4ac393da623502a186a0538))

## [0.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.0...v0.4.1) (2021-06-08)

### Bug Fixes

- dynamic import regexp endings include ']' and ')' ([e5f37a6](https://github.com/qmhc/vite-plugin-dts/commit/e5f37a6d9e232e268ea1b2ec2eadb6c7bc7d7115))

# [0.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.5...v0.4.0) (2021-06-08)

### Bug Fixes

- bundle only once for multiple formats ([be37fbf](https://github.com/qmhc/vite-plugin-dts/commit/be37fbfcbd03dd23c73908a2d7f2d019437e003a))

### Features

- bundle all from tsconfig include ([252554a](https://github.com/qmhc/vite-plugin-dts/commit/252554af1fa403af1ee00dba16a1c7938e7374c6))

### BREAKING CHANGES

- Deprecated include and exclude options

## [0.3.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.4...v0.3.5) (2021-06-08)

### Bug Fixes

- includes prue type export files ([1341359](https://github.com/qmhc/vite-plugin-dts/commit/1341359b9943fd961ec0d3d40d71252e77c73390))
- incorrect path in transform alias ([d686ff9](https://github.com/qmhc/vite-plugin-dts/commit/d686ff94157c400d7f235331a47fbb9d452afeb9))

## [0.3.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.3...v0.3.4) (2021-06-07)

### Bug Fixes

- remove pure import ([fe241de](https://github.com/qmhc/vite-plugin-dts/commit/fe241de5b583cb5bf2dde83383a8a43e53724ce1))
- static import include relative path ([4065217](https://github.com/qmhc/vite-plugin-dts/commit/40652178b9071509269e6b66cbbbcb3562cf349d))

## [0.3.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.2...v0.3.3) (2021-06-07)

### Bug Fixes

- keep output relative to root not to entry dir ([e83ec64](https://github.com/qmhc/vite-plugin-dts/commit/e83ec643536f888166055a5495db3e2fd1030584))

### BREAKING CHANGES

- Ouput declaration structure no longer relative to entry dir

## [0.3.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.1...v0.3.2) (2021-06-07)

### Bug Fixes

- default root base on vite config ([787ebc1](https://github.com/qmhc/vite-plugin-dts/commit/787ebc175d07370628589a6fc73e325b29655a0b))

## [0.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.0...v0.3.1) (2021-06-06)

### Bug Fixes

- vue file explicit type lost ([d0d8803](https://github.com/qmhc/vite-plugin-dts/commit/d0d88038fb51d71dfb71ab4d0223600801d50349))

# [0.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.2.0...v0.3.0) (2021-06-06)

### Bug Fixes

- transform alias import to relative path ([6d5a2d5](https://github.com/qmhc/vite-plugin-dts/commit/6d5a2d5b5ba691b5572727cbf42b340d05964951))

### Features

- projectOptions refine to compilerOptions and tsConfigFilePath ([eb61113](https://github.com/qmhc/vite-plugin-dts/commit/eb611135446fff7bc82e3bd0d1d2b856a829de98))

### BREAKING CHANGES

- projectOptions no longer supported, the project init should be up to the plugin.

# [0.2.0](https://github.com/qmhc/vite-plugin-dts/compare/b2f0c0aa6eea5b48703248eca3294c5d845404ba...v0.2.0) (2021-06-05)

### Features

- add beforeWriteFile hook ([139e818](https://github.com/qmhc/vite-plugin-dts/commit/139e818cecfa80d4208b3f5ced55e7db57bf7e52))
- add outputDir option ([f289723](https://github.com/qmhc/vite-plugin-dts/commit/f289723672279795c0b96aaac3abf83dd8913b20))
- add transform dynamic import to static ([b2f0c0a](https://github.com/qmhc/vite-plugin-dts/commit/b2f0c0aa6eea5b48703248eca3294c5d845404ba))

# [3.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.3.0...v3.0.0-beta.2) (2023-06-27)

### Features

- transfer to use Volar, support Rollup, improve watch mode ([#226](https://github.com/qmhc/vite-plugin-dts/issues/226)) ([bb7949c](https://github.com/qmhc/vite-plugin-dts/commit/bb7949c841141b2305640d953be4dddf45ce7d1a))

### BREAKING CHANGES

- Deprecated options: `noEmitOnError`, `skipDiagnostics`
  and `libFolderPath`. Rename options: `outputDir` -> `outDir`,
  `tsConfigFilePath` -> `tsconfigPath`.

# [2.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.1.0...v2.3.0) (2023-04-17)

### Features

- compatible with svelte ([#197](https://github.com/qmhc/vite-plugin-dts/issues/197)) ([5d38517](https://github.com/qmhc/vite-plugin-dts/commit/5d38517ee16fdfc2009725b9146bfe38c49d1709))
- supports multiple extends in tsconfig.json ([#202](https://github.com/qmhc/vite-plugin-dts/issues/202)) ([9fdac66](https://github.com/qmhc/vite-plugin-dts/commit/9fdac66c0cfd827791208a31fbbefd1fad4ac2bf)), closes [#200](https://github.com/qmhc/vite-plugin-dts/issues/200)

# [2.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.2...v2.1.0) (2023-03-08)

### Features

- add bundledPackages configuration ([#186](https://github.com/qmhc/vite-plugin-dts/issues/186)) ([8997680](https://github.com/qmhc/vite-plugin-dts/commit/8997680776d8f35ae5248cc73b2d6a734e5dbc4a))

## [2.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.1...v2.0.2) (2023-02-23)

### Bug Fixes

- recursively resolve extended tsconfig path ([#181](https://github.com/qmhc/vite-plugin-dts/issues/181)) ([7ca8502](https://github.com/qmhc/vite-plugin-dts/commit/7ca85026e9a3e345c334222af5ffa823bda380a7))

## [2.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0...v2.0.1) (2023-02-23)

### Bug Fixes

- **vue:** correctly remove components for normal script ([6dbd9af](https://github.com/qmhc/vite-plugin-dts/commit/6dbd9af3bbd8175ef8a1cee4054ba38f330eef0c))
- **vue:** error when parse no argument function ([4db63b4](https://github.com/qmhc/vite-plugin-dts/commit/4db63b4b1b48686146f07e7e69dcbd4a82b33efb))

# [2.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.3...v2.0.0) (2023-02-23)

### Bug Fixes

- ensure watch all the files defined in include ([42a755c](https://github.com/qmhc/vite-plugin-dts/commit/42a755cf502cdfa8dc9dab0f600e8cc2a46eec18)), closes [#151](https://github.com/qmhc/vite-plugin-dts/issues/151)
- incorrect path resolve when copy dts source files ([434f69e](https://github.com/qmhc/vite-plugin-dts/commit/434f69e9629db5b2e74e609ffbc5f9cd436c1177)), closes [#179](https://github.com/qmhc/vite-plugin-dts/issues/179)
- **react:** unlimited init order when using with react plugin ([92b82ff](https://github.com/qmhc/vite-plugin-dts/commit/92b82ff47e0480c86c76e298feaa7cea8e06f7fa)), closes [#148](https://github.com/qmhc/vite-plugin-dts/issues/148)

### BREAKING CHANGES

- `copyDtsFiles` option now default to false.

# [2.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2023-02-21)

### Bug Fixes

- support manually create dts for source file ([2174868](https://github.com/qmhc/vite-plugin-dts/commit/2174868158766fd16a72f9f44b979d2c62d8ab07)), closes [#178](https://github.com/qmhc/vite-plugin-dts/issues/178)

### Features

- support parse types entry from exports in package.json ([f033cf8](https://github.com/qmhc/vite-plugin-dts/commit/f033cf876b51d7e11f1aa562567f3fd1f97d04f5))

# [2.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2023-02-20)

### Bug Fixes

- should re-transform when file changed in watch mode ([eafdd3c](https://github.com/qmhc/vite-plugin-dts/commit/eafdd3ce7d6757f93a378130b8e34f41e17e4004)), closes [#99](https://github.com/qmhc/vite-plugin-dts/issues/99)
- **vue:** preprocess not direct exported component ([8bd769e](https://github.com/qmhc/vite-plugin-dts/commit/8bd769e013f845a8e486d354d9f8517bd7b02e72))

### Features

- support specify log level of plugin ([2c1aeb0](https://github.com/qmhc/vite-plugin-dts/commit/2c1aeb01637aa4511f4e4c26b891b6e7ea235d50)), closes [#177](https://github.com/qmhc/vite-plugin-dts/issues/177)

# [2.0.0-beta.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2023-02-17)

### Bug Fixes

- **vue:** conversion error when using outside ts props ([25307cf](https://github.com/qmhc/vite-plugin-dts/commit/25307cf6ef89aa8501c8c35ff8ca519021adafea)), closes [#175](https://github.com/qmhc/vite-plugin-dts/issues/175)
- **vue:** remove components option before inferring ([90f8ac1](https://github.com/qmhc/vite-plugin-dts/commit/90f8ac160412de418bc7dc31c97f4ca7daa524ca))

# [2.0.0-beta.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.3...v2.0.0-beta.0) (2023-02-16)

### Bug Fixes

- override composite for root tsconfig ([df1d0f4](https://github.com/qmhc/vite-plugin-dts/commit/df1d0f42d0d9d9341d7766f5c147e7e3fa3733cf)), closes [#153](https://github.com/qmhc/vite-plugin-dts/issues/153)
- **vue:** ignore css vars when compile ([6d2369a](https://github.com/qmhc/vite-plugin-dts/commit/6d2369afe31c18b3dff45296d74b90aba86bb656)), closes [#167](https://github.com/qmhc/vite-plugin-dts/issues/167)

### Features

- **vue:** accurate types inferring for exposed and props ([#173](https://github.com/qmhc/vite-plugin-dts/issues/173)) ([c25448c](https://github.com/qmhc/vite-plugin-dts/commit/c25448c90f3b3969d51dbfa31ad5dc3ce2a9a2aa))

## [1.7.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.2...v1.7.3) (2023-02-14)

### Bug Fixes

- incorrect compilerOptions when rollup dts ([9dd8d9c](https://github.com/qmhc/vite-plugin-dts/commit/9dd8d9c41bed7f79e24ee890c1f28d867346326e)), closes [#171](https://github.com/qmhc/vite-plugin-dts/issues/171)
- normalize `mts` and `cts` declaration files extension ([410288a](https://github.com/qmhc/vite-plugin-dts/commit/410288ac65d7fb4a3065d93c6d7be9e2a8dd3f77)), closes [#169](https://github.com/qmhc/vite-plugin-dts/issues/169)

## [1.7.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.1...v1.7.2) (2023-01-31)

### Bug Fixes

- correct .d.ts extension in multiple outputs ([5c9709c](https://github.com/qmhc/vite-plugin-dts/commit/5c9709c4082ee36f2f28b4ad6e21b846aa27d5d6)), closes [#144](https://github.com/qmhc/vite-plugin-dts/issues/144)
- insertTypesEntry config supports publishConfig.types ([#164](https://github.com/qmhc/vite-plugin-dts/issues/164)) ([dae4ef9](https://github.com/qmhc/vite-plugin-dts/commit/dae4ef9de1175cf5bdc5a7dedfa60d7bab381dba))
- mark typescript as external dependency ([#160](https://github.com/qmhc/vite-plugin-dts/issues/160)) ([31e10d4](https://github.com/qmhc/vite-plugin-dts/commit/31e10d4ec2a37148ad63fdfb141264d6c4966135))

## [1.7.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.0...v1.7.1) (2022-11-14)

### Bug Fixes

- ensure exulde working when transform ([aea8ebd](https://github.com/qmhc/vite-plugin-dts/commit/aea8ebdc4eac489bc62ccebf3552421bd43d318c)), closes [#143](https://github.com/qmhc/vite-plugin-dts/issues/143) [#140](https://github.com/qmhc/vite-plugin-dts/issues/140) [#97](https://github.com/qmhc/vite-plugin-dts/issues/97)
- import vite plugin type via dynamic import ([8bd73c8](https://github.com/qmhc/vite-plugin-dts/commit/8bd73c8fae010ba0d32df8b144345b7f641a6085)), closes [#139](https://github.com/qmhc/vite-plugin-dts/issues/139)

# [1.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.6...v1.7.0) (2022-11-07)

### Bug Fixes

- compiler missing plugin `decorators-legacy` ([#138](https://github.com/qmhc/vite-plugin-dts/issues/138)) ([717af2f](https://github.com/qmhc/vite-plugin-dts/commit/717af2f4bc1b5bd549339179bc5b75dbbd9a348a))
- derprecate logDiagnostics option ([e405328](https://github.com/qmhc/vite-plugin-dts/commit/e405328f64870919a3ee4100fac087870ed4662e))
- incorrect compiler address resolution ([#133](https://github.com/qmhc/vite-plugin-dts/issues/133)) ([01cc125](https://github.com/qmhc/vite-plugin-dts/commit/01cc125ea98b1994e364487f73d71b0cb6ebcdbf))

### Features

- support customize typescript lib path ([27b83f3](https://github.com/qmhc/vite-plugin-dts/commit/27b83f3423f50307852257f3747c112f2f3cd325)), closes [#134](https://github.com/qmhc/vite-plugin-dts/issues/134)
- support multiple entries for lib mode ([1fafe54](https://github.com/qmhc/vite-plugin-dts/commit/1fafe54991431ce86a404ecb7e179ef1aa8aff0a)), closes [#136](https://github.com/qmhc/vite-plugin-dts/issues/136)

## [1.6.6](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.5...v1.6.6) (2022-10-13)

### Bug Fixes

- adapt @microsoft/api-extractor 7.33+ ([5acb4be](https://github.com/qmhc/vite-plugin-dts/commit/5acb4be4d1e4fe41e42a38ec9e92eeeb6f3a9c15))
- always ship included dts files into soure ([fc345e3](https://github.com/qmhc/vite-plugin-dts/commit/fc345e31b79fd7ca40581727d1964f80d1b9db82)), closes [#126](https://github.com/qmhc/vite-plugin-dts/issues/126)

## [1.6.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.4...v1.6.5) (2022-10-06)

### Bug Fixes

- remove pnpm limitation in preinstall to support npm@6 ([d7167b8](https://github.com/qmhc/vite-plugin-dts/commit/d7167b83381c54075e0e9114c07fe9451b6ffa2d)), closes [#123](https://github.com/qmhc/vite-plugin-dts/issues/123)

## [1.6.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.3...v1.6.4) (2022-09-30)

### Bug Fixes

- patch cjs vars for esm scope ([57e093d](https://github.com/qmhc/vite-plugin-dts/commit/57e093d734e4b81bbeeecbd694b269cca698f914)), closes [#119](https://github.com/qmhc/vite-plugin-dts/issues/119) [#122](https://github.com/qmhc/vite-plugin-dts/issues/122)

## [1.6.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.2...v1.6.3) (2022-09-30)

### Bug Fixes

- both support cjs and esm(using by tsx) ([38bd6a6](https://github.com/qmhc/vite-plugin-dts/commit/38bd6a6789fe375dd5da0aec1ea9b6816751719a))

## [1.6.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.1...v1.6.2) (2022-09-30)

### Bug Fixes

- ensure generate dts for type only files ([f3f4919](https://github.com/qmhc/vite-plugin-dts/commit/f3f4919fa441a27b7d842f1e64dd8d711bd05ec9)), closes [#118](https://github.com/qmhc/vite-plugin-dts/issues/118)

## [1.6.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.0...v1.6.1) (2022-09-28)

### Bug Fixes

- path error in cjs running ([0832af4](https://github.com/qmhc/vite-plugin-dts/commit/0832af4ab49d8166e14b6897bb1538ec6ddf3bb5))

# [1.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.5.0...v1.6.0) (2022-09-28)

### Bug Fixes

- correct compilerOptions.outDir for project init ([8699219](https://github.com/qmhc/vite-plugin-dts/commit/86992194411017e75b1d17c3f72d631267ec187b))
- type error occurred while define `defineProps` retruns as `props` ([41eb53a](https://github.com/qmhc/vite-plugin-dts/commit/41eb53a4da681d2c809dc8a7674a03284acbea02)), closes [#113](https://github.com/qmhc/vite-plugin-dts/issues/113)

### Features

- skip write file when `beforeWriteFile` return exact `false` ([9404ebc](https://github.com/qmhc/vite-plugin-dts/commit/9404ebc811b919a59a21b954d4ba4d43be255390)), closes [#110](https://github.com/qmhc/vite-plugin-dts/issues/110)

# [1.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.1...v1.5.0) (2022-09-11)

### Features

- improve aliasesExclude to support more flexible definition ([f652523](https://github.com/qmhc/vite-plugin-dts/commit/f6525235758b0d29347feb7f21a5085dc81b13a4)), closes [#93](https://github.com/qmhc/vite-plugin-dts/issues/93)

## [1.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.0...v1.4.1) (2022-08-01)

### Bug Fixes

- includes `extends` field when parse tsconfig.json ([#96](https://github.com/qmhc/vite-plugin-dts/issues/96)) ([2631de0](https://github.com/qmhc/vite-plugin-dts/commit/2631de0725e89083752fd590ff604f3f763abd3a))

# [1.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.1...v1.4.0) (2022-07-20)

### Bug Fixes

- ensure emit dts when no script sfc in vue component ([869a466](https://github.com/qmhc/vite-plugin-dts/commit/869a4662af2e690b2e1e63faf941a9e1343dd6ea)), closes [#88](https://github.com/qmhc/vite-plugin-dts/issues/88)

### Features

- support vue 2.7 ([c4e2c4b](https://github.com/qmhc/vite-plugin-dts/commit/c4e2c4b479da837ab697220284ac3c54e89c54a0)), closes [#87](https://github.com/qmhc/vite-plugin-dts/issues/87)

## [1.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.0...v1.3.1) (2022-07-18)

### Bug Fixes

- dynamiclly adjust the exports of inserted index file ([abc9431](https://github.com/qmhc/vite-plugin-dts/commit/abc943143b97dbec0935b62171b16faeebd6fbf4)), closes [#81](https://github.com/qmhc/vite-plugin-dts/issues/81) [#86](https://github.com/qmhc/vite-plugin-dts/issues/86)
- missing inserted entry when multiple outputs ([39ff8ab](https://github.com/qmhc/vite-plugin-dts/commit/39ff8abc0e1dda232c3cf1e6f25ff8daddb37acb))

# [1.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.1...v1.3.0) (2022-07-13)

### Bug Fixes

- aliasesExclude not work when includes empty value ([#85](https://github.com/qmhc/vite-plugin-dts/issues/85)) ([8b9b9aa](https://github.com/qmhc/vite-plugin-dts/commit/8b9b9aa4e9d1c4fa84a2945f4f2421c9269240ff))
- correct type files generate when root is set ([#68](https://github.com/qmhc/vite-plugin-dts/issues/68)) ([0b491bd](https://github.com/qmhc/vite-plugin-dts/commit/0b491bd3720c5b6065dd00a00f9b95e39bf6c8fe))

### Features

- support multiple output dirs ([cd19ee7](https://github.com/qmhc/vite-plugin-dts/commit/cd19ee7f4cf25906a3ffcd89a6c93baf7c7266ed))

## [1.2.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.0...v1.2.1) (2022-07-05)

### Bug Fixes

- add parser plugins param for vue compiler ([7d6bd16](https://github.com/qmhc/vite-plugin-dts/commit/7d6bd16af88701152bf8847e160acf6169bd0918)), closes [#78](https://github.com/qmhc/vite-plugin-dts/issues/78)
- insert entry fail when no default export in source entry ([#82](https://github.com/qmhc/vite-plugin-dts/issues/82)) ([1a4b161](https://github.com/qmhc/vite-plugin-dts/commit/1a4b161647ba1826c3bfa7c9ca5ee7ca4c3ee4bf))

# [1.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.1...v1.2.0) (2022-05-24)

### Bug Fixes

- support read typings form package.json ([6b1bb29](https://github.com/qmhc/vite-plugin-dts/commit/6b1bb2951512733091b950f5767bfe5a1cbe8992))

### Features

- add `aliasesExclude` option ([#75](https://github.com/qmhc/vite-plugin-dts/issues/75)) ([7588ba4](https://github.com/qmhc/vite-plugin-dts/commit/7588ba4755c19e25ca2482b95cb99a59621e693e)), closes [#73](https://github.com/qmhc/vite-plugin-dts/issues/73)
- support override compilerOptions when rollup up ([995612d](https://github.com/qmhc/vite-plugin-dts/commit/995612d5eafa6b610a9ab8826ee7b8691c673b4e)), closes [#74](https://github.com/qmhc/vite-plugin-dts/issues/74)

## [1.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.0...v1.1.1) (2022-04-25)

### Bug Fixes

- incorrect rollup entry path ([a9309d8](https://github.com/qmhc/vite-plugin-dts/commit/a9309d8ca8c0531d1579d3a541cd67ac0a37ce1b))

# [1.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.5...v1.1.0) (2022-04-18)

### Bug Fixes

- lose the type of entry export default ([50f55de](https://github.com/qmhc/vite-plugin-dts/commit/50f55de3ec89d7995056c428a37d16e0cd2a6a4a))

### Features

- support rollup dts files after output ([1d87b44](https://github.com/qmhc/vite-plugin-dts/commit/1d87b44dff3c54a5b1b983b060d3d0d4972c1d94))

## [1.0.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.4...v1.0.5) (2022-04-02)

### Bug Fixes

- entryRoot option not work ([#66](https://github.com/qmhc/vite-plugin-dts/issues/66)) ([bca6423](https://github.com/qmhc/vite-plugin-dts/commit/bca64236076a28dbdd7e6e373c46f3af3723b4e1))

## [1.0.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.3...v1.0.4) (2022-03-28)

### Bug Fixes

- transfer 'debug' to dependencies ([7af9232](https://github.com/qmhc/vite-plugin-dts/commit/7af9232e381f6d572a543706d640c6ecdb5a6c00))

## [1.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.2...v1.0.3) (2022-03-25)

### Bug Fixes

- **example:** cannot resolve types through symlinks ([0914a6a](https://github.com/qmhc/vite-plugin-dts/commit/0914a6ad8dde3514f94e586798d6d73a9c2ac165)), closes [#63](https://github.com/qmhc/vite-plugin-dts/issues/63)

## [1.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.1...v1.0.2) (2022-03-24)

### Bug Fixes

- incorrect entryRoot calculation in linux an mac ([0136990](https://github.com/qmhc/vite-plugin-dts/commit/01369903f484eb74ae6fa23b49537fa64d610706)), closes [#62](https://github.com/qmhc/vite-plugin-dts/issues/62)

## [1.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0...v1.0.1) (2022-03-22)

### Bug Fixes

- missing some libs defind in dependencies ([ab7960f](https://github.com/qmhc/vite-plugin-dts/commit/ab7960f0d957aad6945ef469274bca3e142baa87))

# [1.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.10...v1.0.0) (2022-03-22)

### Features

- support entryRoot option ([c939e35](https://github.com/qmhc/vite-plugin-dts/commit/c939e358dfecacaf2dfd2b0d42118c16462c260a)), closes [#59](https://github.com/qmhc/vite-plugin-dts/issues/59)

### BREAKING CHANGES

- The calculating output paths funtion of root option is
  assigned to entryRoot option, and currently will auto calculating the
  smallest public path as the default value for entryRoot option.

## [0.9.10](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.9...v0.9.10) (2022-03-12)

### Bug Fixes

- make default include same as tsconfig.json ([5ca7fc5](https://github.com/qmhc/vite-plugin-dts/commit/5ca7fc51ab321d4b25ce9856c0e52894c1264d44)), closes [#58](https://github.com/qmhc/vite-plugin-dts/issues/58)

## [0.9.9](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.8...v0.9.9) (2022-01-11)

### Bug Fixes

- should filter vite virtual files ([5fb24ba](https://github.com/qmhc/vite-plugin-dts/commit/5fb24ba2c40ad2ef81e45c33533aada3bb5aefd3)), closes [#50](https://github.com/qmhc/vite-plugin-dts/issues/50)

## [0.9.8](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.7...v0.9.8) (2022-01-10)

### Bug Fixes

- put `copyDtsFiles` option in use ([#53](https://github.com/qmhc/vite-plugin-dts/issues/53)) ([261700f](https://github.com/qmhc/vite-plugin-dts/commit/261700f80a60b3bc1f22f391e00d9999205fe0d2)), closes [#52](https://github.com/qmhc/vite-plugin-dts/issues/52)

## [0.9.7](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.6...v0.9.7) (2021-12-30)

### Bug Fixes

- inserted entry not through beforeWriteFile ([e16b9b1](https://github.com/qmhc/vite-plugin-dts/commit/e16b9b15c66df887bac0ca0b6be05e4d1f8628ed)), closes [#48](https://github.com/qmhc/vite-plugin-dts/issues/48)

## [0.9.6](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.5...v0.9.6) (2021-11-23)

### Bug Fixes

- aliases are not resolved when find ends with '/' ([f04aab2](https://github.com/qmhc/vite-plugin-dts/commit/f04aab21f9f6dc02316a9ff3a9cd43e90cd97828)), closes [#37](https://github.com/qmhc/vite-plugin-dts/issues/37)
- not equally transform dts source files ([ede5146](https://github.com/qmhc/vite-plugin-dts/commit/ede514649282aec786549d490e8127824913914c))

## [0.9.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.4...v0.9.5) (2021-11-21)

### Bug Fixes

- ensure dts source files through beforeWriteFile hook ([3265412](https://github.com/qmhc/vite-plugin-dts/commit/3265412e26dd8736fefab0cf99e920d01bb246c5)), closes [#43](https://github.com/qmhc/vite-plugin-dts/issues/43)

## [0.9.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.3...v0.9.4) (2021-11-10)

### Bug Fixes

- cannot resolve types defined in dts files ([666ca09](https://github.com/qmhc/vite-plugin-dts/commit/666ca0925075bed6926f648a210f37d56af9577b)), closes [#42](https://github.com/qmhc/vite-plugin-dts/issues/42)
- take unused error when using setup-script ([c4145b7](https://github.com/qmhc/vite-plugin-dts/commit/c4145b7352359c79b8ba7c01a1c4afeace4dbc7c))

## [0.9.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.2...v0.9.3) (2021-11-03)

### Bug Fixes

- support require for cjs exports ([cc5aff9](https://github.com/qmhc/vite-plugin-dts/commit/cc5aff9b9906fc87f6012fb66566fd1937a9381e)), closes [#39](https://github.com/qmhc/vite-plugin-dts/issues/39)

## [0.9.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.1...v0.9.2) (2021-10-20)

### Bug Fixes

- support optional @vue/compiler-sfc ([34e1958](https://github.com/qmhc/vite-plugin-dts/commit/34e19587aa64c802cfbd99c5c8018bde8d0e1e2f))

## [0.9.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.3...v0.9.1) (2021-10-18)

### Bug Fixes

- watch mode not update ts/js files ([32a5699](https://github.com/qmhc/vite-plugin-dts/commit/32a5699a9b4f5a24b2a2a870ced43850a0573f82))

### Features

- add afterBuild hook option ([#34](https://github.com/qmhc/vite-plugin-dts/issues/34)) ([e836689](https://github.com/qmhc/vite-plugin-dts/commit/e83668988dab189d185ed9637032f7f80ba1e4db))
- afterDiagnostic and afterBuild support async ([c92d548](https://github.com/qmhc/vite-plugin-dts/commit/c92d54826b81f50fbb38fa909df730b323b75b24))
- skip dependencies by default ([8ca3ed3](https://github.com/qmhc/vite-plugin-dts/commit/8ca3ed30dfcc23c2dd9822fe6ef460a6c832dfe2))

## [0.8.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.2...v0.8.3) (2021-10-11)

### Bug Fixes

- support tsconfig.json using comments ([6e6e446](https://github.com/qmhc/vite-plugin-dts/commit/6e6e44683592060ebd27d1c5712058f2f0f0aeb6)), closes [#31](https://github.com/qmhc/vite-plugin-dts/issues/31)

## [0.8.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.1...v0.8.2) (2021-09-30)

### Bug Fixes

- create correct source for tsx/jsx script ([#29](https://github.com/qmhc/vite-plugin-dts/issues/29)) ([109721e](https://github.com/qmhc/vite-plugin-dts/commit/109721e89007cd702fe73fded44cc6b7efeef46e))

## [0.8.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.0...v0.8.1) (2021-09-22)

### Bug Fixes

- declarationDir make no file generated ([3313a19](https://github.com/qmhc/vite-plugin-dts/commit/3313a19da669bda7fa8fff3a5211652bc22e7413)), closes [#27](https://github.com/qmhc/vite-plugin-dts/issues/27)
- rewrite noEmit option when init porject ([735d26b](https://github.com/qmhc/vite-plugin-dts/commit/735d26b3cad9a90dd272a08448d238045306a1ba)), closes [#28](https://github.com/qmhc/vite-plugin-dts/issues/28)

# [0.8.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.7.0...v0.8.0) (2021-09-13)

### Bug Fixes

- adapt vue@3.2.6+ setup script ([1b62755](https://github.com/qmhc/vite-plugin-dts/commit/1b62755947972a67a034830cc7478fa1a65924c4))
- ouput files out of include bounds ([e1cdedf](https://github.com/qmhc/vite-plugin-dts/commit/e1cdedfc8b41a311d2c22674bd132f23242482ac)), closes [#24](https://github.com/qmhc/vite-plugin-dts/issues/24)

### Features

- add afterDiagnostic option ([7d43ece](https://github.com/qmhc/vite-plugin-dts/commit/7d43ece8fcb9b71d645982a45b01cd9136c525d8)), closes [#22](https://github.com/qmhc/vite-plugin-dts/issues/22)
- support build watch mode ([a920d97](https://github.com/qmhc/vite-plugin-dts/commit/a920d97825dced453f5f70d8776944c02b50e14b)), closes [#5](https://github.com/qmhc/vite-plugin-dts/issues/5)

# [0.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.6.0...v0.7.0) (2021-08-23)

### Bug Fixes

- support using script-setup alongside script ([39517ad](https://github.com/qmhc/vite-plugin-dts/commit/39517ad7119a4b97be7a2d874b43cb73cfa95f07)), closes [#21](https://github.com/qmhc/vite-plugin-dts/issues/21)

### Features

- add noEmitOnError and logDiagnostics options ([8a840fe](https://github.com/qmhc/vite-plugin-dts/commit/8a840fe2692e07e8e881c58ca8f6887d08493cc9))

# [0.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.3...v0.6.0) (2021-08-14)

### Bug Fixes

- resolve alias when using default import ([3121d5b](https://github.com/qmhc/vite-plugin-dts/commit/3121d5bd56a6863e5175c95b00d7a3dedc0cff6d)), closes [#20](https://github.com/qmhc/vite-plugin-dts/issues/20)

### Features

- add copyDtsFiles option ([bdab8c4](https://github.com/qmhc/vite-plugin-dts/commit/bdab8c4b4efa894209c2edeffbbe4d79680eafe9)), closes [#19](https://github.com/qmhc/vite-plugin-dts/issues/19)

## [0.5.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.2...v0.5.3) (2021-07-22)

### Bug Fixes

- add allowJs option dynamically ([36f8de2](https://github.com/qmhc/vite-plugin-dts/commit/36f8de28c68cd52945faeb375cd2931c6ad0468a)), closes [#17](https://github.com/qmhc/vite-plugin-dts/issues/17)
- add js and jsx files when allowJs ([0e1e6f7](https://github.com/qmhc/vite-plugin-dts/commit/0e1e6f7c09c85e169568b2c77c66d452d04a28a2))

## [0.5.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.1...v0.5.2) (2021-07-01)

### Bug Fixes

- cannot require @vue/compiler-sfc in monorepo ([fd9b5c1](https://github.com/qmhc/vite-plugin-dts/commit/fd9b5c1c018feb87e374cdf6671b7b8be14e775b)), closes [#14](https://github.com/qmhc/vite-plugin-dts/issues/14)

## [0.5.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.0...v0.5.1) (2021-06-18)

### Bug Fixes

- support insert entry from '.tsx' file ([e38b7c4](https://github.com/qmhc/vite-plugin-dts/commit/e38b7c4686a8d7405583a97078e97fbef4757da6))

# [0.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.3...v0.5.0) (2021-06-15)

### Bug Fixes

- ignore none export files ([f9c41bc](https://github.com/qmhc/vite-plugin-dts/commit/f9c41bc4e2fd498b53aa366a5f8f2a57589b6176))
- rename insertIndexEntry to insertTypesEntry ([c9d392e](https://github.com/qmhc/vite-plugin-dts/commit/c9d392ec3def98b541bb597c5ed38933b225fe5e))

### Features

- add clearPureImport option ([0357f69](https://github.com/qmhc/vite-plugin-dts/commit/0357f69485204f24d9830a4de59558a23eb66e19))
- defaults insert entry base on pkg.types ([9c71f28](https://github.com/qmhc/vite-plugin-dts/commit/9c71f28eac50d23a42d92bd79ac6d09f1be0544d))
- optional insert index type entry ([592a701](https://github.com/qmhc/vite-plugin-dts/commit/592a701d6213f955306df9de0c7f1d3243a28faa))

## [0.4.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.2...v0.4.3) (2021-06-11)

### Bug Fixes

- back off optional chaining and nullish coalescing ([8e09129](https://github.com/qmhc/vite-plugin-dts/commit/8e09129c1600a013a2c3c50983ab7f358216757f)), closes [#2](https://github.com/qmhc/vite-plugin-dts/issues/2)
- transform fs/promise to fs-extra ([1794b0b](https://github.com/qmhc/vite-plugin-dts/commit/1794b0b93baf4212b4efc5ef06a697adf70e4933)), closes [#4](https://github.com/qmhc/vite-plugin-dts/issues/4)

### Performance Improvements

- use menory result generate bundle ([858bf31](https://github.com/qmhc/vite-plugin-dts/commit/858bf317d16c995feb73e53339d61f7602e36484))

## [0.4.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.1...v0.4.2) (2021-06-09)

### Bug Fixes

- incomplete remove pure import ([a1fd54e](https://github.com/qmhc/vite-plugin-dts/commit/a1fd54e769f1b50ee5858d33879b2a6732625797))
- mamual set include and exclude ([b6fb510](https://github.com/qmhc/vite-plugin-dts/commit/b6fb5106206df9de83276687dd1451fa3d882067))
- more accurate normalize glob ([1d65c47](https://github.com/qmhc/vite-plugin-dts/commit/1d65c47811344a6b566a8dcf22cd22d9298d5a02))
- set rootDir if not set in compilerOptions ([a1d83d2](https://github.com/qmhc/vite-plugin-dts/commit/a1d83d2aa56a32ebef11b9d98fa508a6d9fbd412)), closes [#3](https://github.com/qmhc/vite-plugin-dts/issues/3)
- transform alias include dynamic imports ([a6919b4](https://github.com/qmhc/vite-plugin-dts/commit/a6919b4760cf5cbefbdad1ac674b8a8275dc27dd))
- transform alias include dynamic imports ([3a5511e](https://github.com/qmhc/vite-plugin-dts/commit/3a5511e3e0b961d7f4ac393da623502a186a0538))

## [0.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.0...v0.4.1) (2021-06-08)

### Bug Fixes

- dynamic import regexp endings include ']' and ')' ([e5f37a6](https://github.com/qmhc/vite-plugin-dts/commit/e5f37a6d9e232e268ea1b2ec2eadb6c7bc7d7115))

# [0.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.5...v0.4.0) (2021-06-08)

### Bug Fixes

- bundle only once for multiple formats ([be37fbf](https://github.com/qmhc/vite-plugin-dts/commit/be37fbfcbd03dd23c73908a2d7f2d019437e003a))

### Features

- bundle all from tsconfig include ([252554a](https://github.com/qmhc/vite-plugin-dts/commit/252554af1fa403af1ee00dba16a1c7938e7374c6))

### BREAKING CHANGES

- Deprecated include and exclude options

## [0.3.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.4...v0.3.5) (2021-06-08)

### Bug Fixes

- includes prue type export files ([1341359](https://github.com/qmhc/vite-plugin-dts/commit/1341359b9943fd961ec0d3d40d71252e77c73390))
- incorrect path in transform alias ([d686ff9](https://github.com/qmhc/vite-plugin-dts/commit/d686ff94157c400d7f235331a47fbb9d452afeb9))

## [0.3.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.3...v0.3.4) (2021-06-07)

### Bug Fixes

- remove pure import ([fe241de](https://github.com/qmhc/vite-plugin-dts/commit/fe241de5b583cb5bf2dde83383a8a43e53724ce1))
- static import include relative path ([4065217](https://github.com/qmhc/vite-plugin-dts/commit/40652178b9071509269e6b66cbbbcb3562cf349d))

## [0.3.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.2...v0.3.3) (2021-06-07)

### Bug Fixes

- keep output relative to root not to entry dir ([e83ec64](https://github.com/qmhc/vite-plugin-dts/commit/e83ec643536f888166055a5495db3e2fd1030584))

### BREAKING CHANGES

- Ouput declaration structure no longer relative to entry dir

## [0.3.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.1...v0.3.2) (2021-06-07)

### Bug Fixes

- default root base on vite config ([787ebc1](https://github.com/qmhc/vite-plugin-dts/commit/787ebc175d07370628589a6fc73e325b29655a0b))

## [0.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.0...v0.3.1) (2021-06-06)

### Bug Fixes

- vue file explicit type lost ([d0d8803](https://github.com/qmhc/vite-plugin-dts/commit/d0d88038fb51d71dfb71ab4d0223600801d50349))

# [0.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.2.0...v0.3.0) (2021-06-06)

### Bug Fixes

- transform alias import to relative path ([6d5a2d5](https://github.com/qmhc/vite-plugin-dts/commit/6d5a2d5b5ba691b5572727cbf42b340d05964951))

### Features

- projectOptions refine to compilerOptions and tsConfigFilePath ([eb61113](https://github.com/qmhc/vite-plugin-dts/commit/eb611135446fff7bc82e3bd0d1d2b856a829de98))

### BREAKING CHANGES

- projectOptions no longer supported, the project init should be up to the plugin.

# [0.2.0](https://github.com/qmhc/vite-plugin-dts/compare/b2f0c0aa6eea5b48703248eca3294c5d845404ba...v0.2.0) (2021-06-05)

### Features

- add beforeWriteFile hook ([139e818](https://github.com/qmhc/vite-plugin-dts/commit/139e818cecfa80d4208b3f5ced55e7db57bf7e52))
- add outputDir option ([f289723](https://github.com/qmhc/vite-plugin-dts/commit/f289723672279795c0b96aaac3abf83dd8913b20))
- add transform dynamic import to static ([b2f0c0a](https://github.com/qmhc/vite-plugin-dts/commit/b2f0c0aa6eea5b48703248eca3294c5d845404ba))

# [3.0.0-beta.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.3.0...v3.0.0-beta.1) (2023-06-27)

### Features

- transfer to use Volar, support Rollup, improve watch mode ([#226](https://github.com/qmhc/vite-plugin-dts/issues/226)) ([bb7949c](https://github.com/qmhc/vite-plugin-dts/commit/bb7949c841141b2305640d953be4dddf45ce7d1a))

### BREAKING CHANGES

- Deprecated options: `noEmitOnError`, `skipDiagnostics`
  and `libFolderPath`. Rename options: `outputDir` -> `outDir`,
  `tsConfigFilePath` -> `tsconfigPath`.

# [2.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.1.0...v2.3.0) (2023-04-17)

### Features

- compatible with svelte ([#197](https://github.com/qmhc/vite-plugin-dts/issues/197)) ([5d38517](https://github.com/qmhc/vite-plugin-dts/commit/5d38517ee16fdfc2009725b9146bfe38c49d1709))
- supports multiple extends in tsconfig.json ([#202](https://github.com/qmhc/vite-plugin-dts/issues/202)) ([9fdac66](https://github.com/qmhc/vite-plugin-dts/commit/9fdac66c0cfd827791208a31fbbefd1fad4ac2bf)), closes [#200](https://github.com/qmhc/vite-plugin-dts/issues/200)

# [2.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.2...v2.1.0) (2023-03-08)

### Features

- add bundledPackages configuration ([#186](https://github.com/qmhc/vite-plugin-dts/issues/186)) ([8997680](https://github.com/qmhc/vite-plugin-dts/commit/8997680776d8f35ae5248cc73b2d6a734e5dbc4a))

## [2.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.1...v2.0.2) (2023-02-23)

### Bug Fixes

- recursively resolve extended tsconfig path ([#181](https://github.com/qmhc/vite-plugin-dts/issues/181)) ([7ca8502](https://github.com/qmhc/vite-plugin-dts/commit/7ca85026e9a3e345c334222af5ffa823bda380a7))

## [2.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0...v2.0.1) (2023-02-23)

### Bug Fixes

- **vue:** correctly remove components for normal script ([6dbd9af](https://github.com/qmhc/vite-plugin-dts/commit/6dbd9af3bbd8175ef8a1cee4054ba38f330eef0c))
- **vue:** error when parse no argument function ([4db63b4](https://github.com/qmhc/vite-plugin-dts/commit/4db63b4b1b48686146f07e7e69dcbd4a82b33efb))

# [2.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.3...v2.0.0) (2023-02-23)

### Bug Fixes

- ensure watch all the files defined in include ([42a755c](https://github.com/qmhc/vite-plugin-dts/commit/42a755cf502cdfa8dc9dab0f600e8cc2a46eec18)), closes [#151](https://github.com/qmhc/vite-plugin-dts/issues/151)
- incorrect path resolve when copy dts source files ([434f69e](https://github.com/qmhc/vite-plugin-dts/commit/434f69e9629db5b2e74e609ffbc5f9cd436c1177)), closes [#179](https://github.com/qmhc/vite-plugin-dts/issues/179)
- **react:** unlimited init order when using with react plugin ([92b82ff](https://github.com/qmhc/vite-plugin-dts/commit/92b82ff47e0480c86c76e298feaa7cea8e06f7fa)), closes [#148](https://github.com/qmhc/vite-plugin-dts/issues/148)

### BREAKING CHANGES

- `copyDtsFiles` option now default to false.

# [2.0.0-beta.3](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2023-02-21)

### Bug Fixes

- support manually create dts for source file ([2174868](https://github.com/qmhc/vite-plugin-dts/commit/2174868158766fd16a72f9f44b979d2c62d8ab07)), closes [#178](https://github.com/qmhc/vite-plugin-dts/issues/178)

### Features

- support parse types entry from exports in package.json ([f033cf8](https://github.com/qmhc/vite-plugin-dts/commit/f033cf876b51d7e11f1aa562567f3fd1f97d04f5))

# [2.0.0-beta.2](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2023-02-20)

### Bug Fixes

- should re-transform when file changed in watch mode ([eafdd3c](https://github.com/qmhc/vite-plugin-dts/commit/eafdd3ce7d6757f93a378130b8e34f41e17e4004)), closes [#99](https://github.com/qmhc/vite-plugin-dts/issues/99)
- **vue:** preprocess not direct exported component ([8bd769e](https://github.com/qmhc/vite-plugin-dts/commit/8bd769e013f845a8e486d354d9f8517bd7b02e72))

### Features

- support specify log level of plugin ([2c1aeb0](https://github.com/qmhc/vite-plugin-dts/commit/2c1aeb01637aa4511f4e4c26b891b6e7ea235d50)), closes [#177](https://github.com/qmhc/vite-plugin-dts/issues/177)

# [2.0.0-beta.1](https://github.com/qmhc/vite-plugin-dts/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2023-02-17)

### Bug Fixes

- **vue:** conversion error when using outside ts props ([25307cf](https://github.com/qmhc/vite-plugin-dts/commit/25307cf6ef89aa8501c8c35ff8ca519021adafea)), closes [#175](https://github.com/qmhc/vite-plugin-dts/issues/175)
- **vue:** remove components option before inferring ([90f8ac1](https://github.com/qmhc/vite-plugin-dts/commit/90f8ac160412de418bc7dc31c97f4ca7daa524ca))

# [2.0.0-beta.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.3...v2.0.0-beta.0) (2023-02-16)

### Bug Fixes

- override composite for root tsconfig ([df1d0f4](https://github.com/qmhc/vite-plugin-dts/commit/df1d0f42d0d9d9341d7766f5c147e7e3fa3733cf)), closes [#153](https://github.com/qmhc/vite-plugin-dts/issues/153)
- **vue:** ignore css vars when compile ([6d2369a](https://github.com/qmhc/vite-plugin-dts/commit/6d2369afe31c18b3dff45296d74b90aba86bb656)), closes [#167](https://github.com/qmhc/vite-plugin-dts/issues/167)

### Features

- **vue:** accurate types inferring for exposed and props ([#173](https://github.com/qmhc/vite-plugin-dts/issues/173)) ([c25448c](https://github.com/qmhc/vite-plugin-dts/commit/c25448c90f3b3969d51dbfa31ad5dc3ce2a9a2aa))

## [1.7.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.2...v1.7.3) (2023-02-14)

### Bug Fixes

- incorrect compilerOptions when rollup dts ([9dd8d9c](https://github.com/qmhc/vite-plugin-dts/commit/9dd8d9c41bed7f79e24ee890c1f28d867346326e)), closes [#171](https://github.com/qmhc/vite-plugin-dts/issues/171)
- normalize `mts` and `cts` declaration files extension ([410288a](https://github.com/qmhc/vite-plugin-dts/commit/410288ac65d7fb4a3065d93c6d7be9e2a8dd3f77)), closes [#169](https://github.com/qmhc/vite-plugin-dts/issues/169)

## [1.7.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.1...v1.7.2) (2023-01-31)

### Bug Fixes

- correct .d.ts extension in multiple outputs ([5c9709c](https://github.com/qmhc/vite-plugin-dts/commit/5c9709c4082ee36f2f28b4ad6e21b846aa27d5d6)), closes [#144](https://github.com/qmhc/vite-plugin-dts/issues/144)
- insertTypesEntry config supports publishConfig.types ([#164](https://github.com/qmhc/vite-plugin-dts/issues/164)) ([dae4ef9](https://github.com/qmhc/vite-plugin-dts/commit/dae4ef9de1175cf5bdc5a7dedfa60d7bab381dba))
- mark typescript as external dependency ([#160](https://github.com/qmhc/vite-plugin-dts/issues/160)) ([31e10d4](https://github.com/qmhc/vite-plugin-dts/commit/31e10d4ec2a37148ad63fdfb141264d6c4966135))

## [1.7.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.7.0...v1.7.1) (2022-11-14)

### Bug Fixes

- ensure exulde working when transform ([aea8ebd](https://github.com/qmhc/vite-plugin-dts/commit/aea8ebdc4eac489bc62ccebf3552421bd43d318c)), closes [#143](https://github.com/qmhc/vite-plugin-dts/issues/143) [#140](https://github.com/qmhc/vite-plugin-dts/issues/140) [#97](https://github.com/qmhc/vite-plugin-dts/issues/97)
- import vite plugin type via dynamic import ([8bd73c8](https://github.com/qmhc/vite-plugin-dts/commit/8bd73c8fae010ba0d32df8b144345b7f641a6085)), closes [#139](https://github.com/qmhc/vite-plugin-dts/issues/139)

# [1.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.6...v1.7.0) (2022-11-07)

### Bug Fixes

- compiler missing plugin `decorators-legacy` ([#138](https://github.com/qmhc/vite-plugin-dts/issues/138)) ([717af2f](https://github.com/qmhc/vite-plugin-dts/commit/717af2f4bc1b5bd549339179bc5b75dbbd9a348a))
- derprecate logDiagnostics option ([e405328](https://github.com/qmhc/vite-plugin-dts/commit/e405328f64870919a3ee4100fac087870ed4662e))
- incorrect compiler address resolution ([#133](https://github.com/qmhc/vite-plugin-dts/issues/133)) ([01cc125](https://github.com/qmhc/vite-plugin-dts/commit/01cc125ea98b1994e364487f73d71b0cb6ebcdbf))

### Features

- support customize typescript lib path ([27b83f3](https://github.com/qmhc/vite-plugin-dts/commit/27b83f3423f50307852257f3747c112f2f3cd325)), closes [#134](https://github.com/qmhc/vite-plugin-dts/issues/134)
- support multiple entries for lib mode ([1fafe54](https://github.com/qmhc/vite-plugin-dts/commit/1fafe54991431ce86a404ecb7e179ef1aa8aff0a)), closes [#136](https://github.com/qmhc/vite-plugin-dts/issues/136)

## [1.6.6](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.5...v1.6.6) (2022-10-13)

### Bug Fixes

- adapt @microsoft/api-extractor 7.33+ ([5acb4be](https://github.com/qmhc/vite-plugin-dts/commit/5acb4be4d1e4fe41e42a38ec9e92eeeb6f3a9c15))
- always ship included dts files into soure ([fc345e3](https://github.com/qmhc/vite-plugin-dts/commit/fc345e31b79fd7ca40581727d1964f80d1b9db82)), closes [#126](https://github.com/qmhc/vite-plugin-dts/issues/126)

## [1.6.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.4...v1.6.5) (2022-10-06)

### Bug Fixes

- remove pnpm limitation in preinstall to support npm@6 ([d7167b8](https://github.com/qmhc/vite-plugin-dts/commit/d7167b83381c54075e0e9114c07fe9451b6ffa2d)), closes [#123](https://github.com/qmhc/vite-plugin-dts/issues/123)

## [1.6.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.3...v1.6.4) (2022-09-30)

### Bug Fixes

- patch cjs vars for esm scope ([57e093d](https://github.com/qmhc/vite-plugin-dts/commit/57e093d734e4b81bbeeecbd694b269cca698f914)), closes [#119](https://github.com/qmhc/vite-plugin-dts/issues/119) [#122](https://github.com/qmhc/vite-plugin-dts/issues/122)

## [1.6.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.2...v1.6.3) (2022-09-30)

### Bug Fixes

- both support cjs and esm(using by tsx) ([38bd6a6](https://github.com/qmhc/vite-plugin-dts/commit/38bd6a6789fe375dd5da0aec1ea9b6816751719a))

## [1.6.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.1...v1.6.2) (2022-09-30)

### Bug Fixes

- ensure generate dts for type only files ([f3f4919](https://github.com/qmhc/vite-plugin-dts/commit/f3f4919fa441a27b7d842f1e64dd8d711bd05ec9)), closes [#118](https://github.com/qmhc/vite-plugin-dts/issues/118)

## [1.6.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.6.0...v1.6.1) (2022-09-28)

### Bug Fixes

- path error in cjs running ([0832af4](https://github.com/qmhc/vite-plugin-dts/commit/0832af4ab49d8166e14b6897bb1538ec6ddf3bb5))

# [1.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.5.0...v1.6.0) (2022-09-28)

### Bug Fixes

- correct compilerOptions.outDir for project init ([8699219](https://github.com/qmhc/vite-plugin-dts/commit/86992194411017e75b1d17c3f72d631267ec187b))
- type error occurred while define `defineProps` retruns as `props` ([41eb53a](https://github.com/qmhc/vite-plugin-dts/commit/41eb53a4da681d2c809dc8a7674a03284acbea02)), closes [#113](https://github.com/qmhc/vite-plugin-dts/issues/113)

### Features

- skip write file when `beforeWriteFile` return exact `false` ([9404ebc](https://github.com/qmhc/vite-plugin-dts/commit/9404ebc811b919a59a21b954d4ba4d43be255390)), closes [#110](https://github.com/qmhc/vite-plugin-dts/issues/110)

# [1.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.1...v1.5.0) (2022-09-11)

### Features

- improve aliasesExclude to support more flexible definition ([f652523](https://github.com/qmhc/vite-plugin-dts/commit/f6525235758b0d29347feb7f21a5085dc81b13a4)), closes [#93](https://github.com/qmhc/vite-plugin-dts/issues/93)

## [1.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.4.0...v1.4.1) (2022-08-01)

### Bug Fixes

- includes `extends` field when parse tsconfig.json ([#96](https://github.com/qmhc/vite-plugin-dts/issues/96)) ([2631de0](https://github.com/qmhc/vite-plugin-dts/commit/2631de0725e89083752fd590ff604f3f763abd3a))

# [1.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.1...v1.4.0) (2022-07-20)

### Bug Fixes

- ensure emit dts when no script sfc in vue component ([869a466](https://github.com/qmhc/vite-plugin-dts/commit/869a4662af2e690b2e1e63faf941a9e1343dd6ea)), closes [#88](https://github.com/qmhc/vite-plugin-dts/issues/88)

### Features

- support vue 2.7 ([c4e2c4b](https://github.com/qmhc/vite-plugin-dts/commit/c4e2c4b479da837ab697220284ac3c54e89c54a0)), closes [#87](https://github.com/qmhc/vite-plugin-dts/issues/87)

## [1.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.3.0...v1.3.1) (2022-07-18)

### Bug Fixes

- dynamiclly adjust the exports of inserted index file ([abc9431](https://github.com/qmhc/vite-plugin-dts/commit/abc943143b97dbec0935b62171b16faeebd6fbf4)), closes [#81](https://github.com/qmhc/vite-plugin-dts/issues/81) [#86](https://github.com/qmhc/vite-plugin-dts/issues/86)
- missing inserted entry when multiple outputs ([39ff8ab](https://github.com/qmhc/vite-plugin-dts/commit/39ff8abc0e1dda232c3cf1e6f25ff8daddb37acb))

# [1.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.1...v1.3.0) (2022-07-13)

### Bug Fixes

- aliasesExclude not work when includes empty value ([#85](https://github.com/qmhc/vite-plugin-dts/issues/85)) ([8b9b9aa](https://github.com/qmhc/vite-plugin-dts/commit/8b9b9aa4e9d1c4fa84a2945f4f2421c9269240ff))
- correct type files generate when root is set ([#68](https://github.com/qmhc/vite-plugin-dts/issues/68)) ([0b491bd](https://github.com/qmhc/vite-plugin-dts/commit/0b491bd3720c5b6065dd00a00f9b95e39bf6c8fe))

### Features

- support multiple output dirs ([cd19ee7](https://github.com/qmhc/vite-plugin-dts/commit/cd19ee7f4cf25906a3ffcd89a6c93baf7c7266ed))

## [1.2.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.2.0...v1.2.1) (2022-07-05)

### Bug Fixes

- add parser plugins param for vue compiler ([7d6bd16](https://github.com/qmhc/vite-plugin-dts/commit/7d6bd16af88701152bf8847e160acf6169bd0918)), closes [#78](https://github.com/qmhc/vite-plugin-dts/issues/78)
- insert entry fail when no default export in source entry ([#82](https://github.com/qmhc/vite-plugin-dts/issues/82)) ([1a4b161](https://github.com/qmhc/vite-plugin-dts/commit/1a4b161647ba1826c3bfa7c9ca5ee7ca4c3ee4bf))

# [1.2.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.1...v1.2.0) (2022-05-24)

### Bug Fixes

- support read typings form package.json ([6b1bb29](https://github.com/qmhc/vite-plugin-dts/commit/6b1bb2951512733091b950f5767bfe5a1cbe8992))

### Features

- add `aliasesExclude` option ([#75](https://github.com/qmhc/vite-plugin-dts/issues/75)) ([7588ba4](https://github.com/qmhc/vite-plugin-dts/commit/7588ba4755c19e25ca2482b95cb99a59621e693e)), closes [#73](https://github.com/qmhc/vite-plugin-dts/issues/73)
- support override compilerOptions when rollup up ([995612d](https://github.com/qmhc/vite-plugin-dts/commit/995612d5eafa6b610a9ab8826ee7b8691c673b4e)), closes [#74](https://github.com/qmhc/vite-plugin-dts/issues/74)

## [1.1.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.1.0...v1.1.1) (2022-04-25)

### Bug Fixes

- incorrect rollup entry path ([a9309d8](https://github.com/qmhc/vite-plugin-dts/commit/a9309d8ca8c0531d1579d3a541cd67ac0a37ce1b))

# [1.1.0](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.5...v1.1.0) (2022-04-18)

### Bug Fixes

- lose the type of entry export default ([50f55de](https://github.com/qmhc/vite-plugin-dts/commit/50f55de3ec89d7995056c428a37d16e0cd2a6a4a))

### Features

- support rollup dts files after output ([1d87b44](https://github.com/qmhc/vite-plugin-dts/commit/1d87b44dff3c54a5b1b983b060d3d0d4972c1d94))

## [1.0.5](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.4...v1.0.5) (2022-04-02)

### Bug Fixes

- entryRoot option not work ([#66](https://github.com/qmhc/vite-plugin-dts/issues/66)) ([bca6423](https://github.com/qmhc/vite-plugin-dts/commit/bca64236076a28dbdd7e6e373c46f3af3723b4e1))

## [1.0.4](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.3...v1.0.4) (2022-03-28)

### Bug Fixes

- transfer 'debug' to dependencies ([7af9232](https://github.com/qmhc/vite-plugin-dts/commit/7af9232e381f6d572a543706d640c6ecdb5a6c00))

## [1.0.3](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.2...v1.0.3) (2022-03-25)

### Bug Fixes

- **example:** cannot resolve types through symlinks ([0914a6a](https://github.com/qmhc/vite-plugin-dts/commit/0914a6ad8dde3514f94e586798d6d73a9c2ac165)), closes [#63](https://github.com/qmhc/vite-plugin-dts/issues/63)

## [1.0.2](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.1...v1.0.2) (2022-03-24)

### Bug Fixes

- incorrect entryRoot calculation in linux an mac ([0136990](https://github.com/qmhc/vite-plugin-dts/commit/01369903f484eb74ae6fa23b49537fa64d610706)), closes [#62](https://github.com/qmhc/vite-plugin-dts/issues/62)

## [1.0.1](https://github.com/qmhc/vite-plugin-dts/compare/v1.0.0...v1.0.1) (2022-03-22)

### Bug Fixes

- missing some libs defind in dependencies ([ab7960f](https://github.com/qmhc/vite-plugin-dts/commit/ab7960f0d957aad6945ef469274bca3e142baa87))

# [1.0.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.10...v1.0.0) (2022-03-22)

### Features

- support entryRoot option ([c939e35](https://github.com/qmhc/vite-plugin-dts/commit/c939e358dfecacaf2dfd2b0d42118c16462c260a)), closes [#59](https://github.com/qmhc/vite-plugin-dts/issues/59)

### BREAKING CHANGES

- The calculating output paths funtion of root option is
  assigned to entryRoot option, and currently will auto calculating the
  smallest public path as the default value for entryRoot option.

## [0.9.10](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.9...v0.9.10) (2022-03-12)

### Bug Fixes

- make default include same as tsconfig.json ([5ca7fc5](https://github.com/qmhc/vite-plugin-dts/commit/5ca7fc51ab321d4b25ce9856c0e52894c1264d44)), closes [#58](https://github.com/qmhc/vite-plugin-dts/issues/58)

## [0.9.9](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.8...v0.9.9) (2022-01-11)

### Bug Fixes

- should filter vite virtual files ([5fb24ba](https://github.com/qmhc/vite-plugin-dts/commit/5fb24ba2c40ad2ef81e45c33533aada3bb5aefd3)), closes [#50](https://github.com/qmhc/vite-plugin-dts/issues/50)

## [0.9.8](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.7...v0.9.8) (2022-01-10)

### Bug Fixes

- put `copyDtsFiles` option in use ([#53](https://github.com/qmhc/vite-plugin-dts/issues/53)) ([261700f](https://github.com/qmhc/vite-plugin-dts/commit/261700f80a60b3bc1f22f391e00d9999205fe0d2)), closes [#52](https://github.com/qmhc/vite-plugin-dts/issues/52)

## [0.9.7](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.6...v0.9.7) (2021-12-30)

### Bug Fixes

- inserted entry not through beforeWriteFile ([e16b9b1](https://github.com/qmhc/vite-plugin-dts/commit/e16b9b15c66df887bac0ca0b6be05e4d1f8628ed)), closes [#48](https://github.com/qmhc/vite-plugin-dts/issues/48)

## [0.9.6](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.5...v0.9.6) (2021-11-23)

### Bug Fixes

- aliases are not resolved when find ends with '/' ([f04aab2](https://github.com/qmhc/vite-plugin-dts/commit/f04aab21f9f6dc02316a9ff3a9cd43e90cd97828)), closes [#37](https://github.com/qmhc/vite-plugin-dts/issues/37)
- not equally transform dts source files ([ede5146](https://github.com/qmhc/vite-plugin-dts/commit/ede514649282aec786549d490e8127824913914c))

## [0.9.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.4...v0.9.5) (2021-11-21)

### Bug Fixes

- ensure dts source files through beforeWriteFile hook ([3265412](https://github.com/qmhc/vite-plugin-dts/commit/3265412e26dd8736fefab0cf99e920d01bb246c5)), closes [#43](https://github.com/qmhc/vite-plugin-dts/issues/43)

## [0.9.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.3...v0.9.4) (2021-11-10)

### Bug Fixes

- cannot resolve types defined in dts files ([666ca09](https://github.com/qmhc/vite-plugin-dts/commit/666ca0925075bed6926f648a210f37d56af9577b)), closes [#42](https://github.com/qmhc/vite-plugin-dts/issues/42)
- take unused error when using setup-script ([c4145b7](https://github.com/qmhc/vite-plugin-dts/commit/c4145b7352359c79b8ba7c01a1c4afeace4dbc7c))

## [0.9.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.2...v0.9.3) (2021-11-03)

### Bug Fixes

- support require for cjs exports ([cc5aff9](https://github.com/qmhc/vite-plugin-dts/commit/cc5aff9b9906fc87f6012fb66566fd1937a9381e)), closes [#39](https://github.com/qmhc/vite-plugin-dts/issues/39)

## [0.9.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.9.1...v0.9.2) (2021-10-20)

### Bug Fixes

- support optional @vue/compiler-sfc ([34e1958](https://github.com/qmhc/vite-plugin-dts/commit/34e19587aa64c802cfbd99c5c8018bde8d0e1e2f))

## [0.9.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.3...v0.9.1) (2021-10-18)

### Bug Fixes

- watch mode not update ts/js files ([32a5699](https://github.com/qmhc/vite-plugin-dts/commit/32a5699a9b4f5a24b2a2a870ced43850a0573f82))

### Features

- add afterBuild hook option ([#34](https://github.com/qmhc/vite-plugin-dts/issues/34)) ([e836689](https://github.com/qmhc/vite-plugin-dts/commit/e83668988dab189d185ed9637032f7f80ba1e4db))
- afterDiagnostic and afterBuild support async ([c92d548](https://github.com/qmhc/vite-plugin-dts/commit/c92d54826b81f50fbb38fa909df730b323b75b24))
- skip dependencies by default ([8ca3ed3](https://github.com/qmhc/vite-plugin-dts/commit/8ca3ed30dfcc23c2dd9822fe6ef460a6c832dfe2))

## [0.8.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.2...v0.8.3) (2021-10-11)

### Bug Fixes

- support tsconfig.json using comments ([6e6e446](https://github.com/qmhc/vite-plugin-dts/commit/6e6e44683592060ebd27d1c5712058f2f0f0aeb6)), closes [#31](https://github.com/qmhc/vite-plugin-dts/issues/31)

## [0.8.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.1...v0.8.2) (2021-09-30)

### Bug Fixes

- create correct source for tsx/jsx script ([#29](https://github.com/qmhc/vite-plugin-dts/issues/29)) ([109721e](https://github.com/qmhc/vite-plugin-dts/commit/109721e89007cd702fe73fded44cc6b7efeef46e))

## [0.8.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.8.0...v0.8.1) (2021-09-22)

### Bug Fixes

- declarationDir make no file generated ([3313a19](https://github.com/qmhc/vite-plugin-dts/commit/3313a19da669bda7fa8fff3a5211652bc22e7413)), closes [#27](https://github.com/qmhc/vite-plugin-dts/issues/27)
- rewrite noEmit option when init porject ([735d26b](https://github.com/qmhc/vite-plugin-dts/commit/735d26b3cad9a90dd272a08448d238045306a1ba)), closes [#28](https://github.com/qmhc/vite-plugin-dts/issues/28)

# [0.8.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.7.0...v0.8.0) (2021-09-13)

### Bug Fixes

- adapt vue@3.2.6+ setup script ([1b62755](https://github.com/qmhc/vite-plugin-dts/commit/1b62755947972a67a034830cc7478fa1a65924c4))
- ouput files out of include bounds ([e1cdedf](https://github.com/qmhc/vite-plugin-dts/commit/e1cdedfc8b41a311d2c22674bd132f23242482ac)), closes [#24](https://github.com/qmhc/vite-plugin-dts/issues/24)

### Features

- add afterDiagnostic option ([7d43ece](https://github.com/qmhc/vite-plugin-dts/commit/7d43ece8fcb9b71d645982a45b01cd9136c525d8)), closes [#22](https://github.com/qmhc/vite-plugin-dts/issues/22)
- support build watch mode ([a920d97](https://github.com/qmhc/vite-plugin-dts/commit/a920d97825dced453f5f70d8776944c02b50e14b)), closes [#5](https://github.com/qmhc/vite-plugin-dts/issues/5)

# [0.7.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.6.0...v0.7.0) (2021-08-23)

### Bug Fixes

- support using script-setup alongside script ([39517ad](https://github.com/qmhc/vite-plugin-dts/commit/39517ad7119a4b97be7a2d874b43cb73cfa95f07)), closes [#21](https://github.com/qmhc/vite-plugin-dts/issues/21)

### Features

- add noEmitOnError and logDiagnostics options ([8a840fe](https://github.com/qmhc/vite-plugin-dts/commit/8a840fe2692e07e8e881c58ca8f6887d08493cc9))

# [0.6.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.3...v0.6.0) (2021-08-14)

### Bug Fixes

- resolve alias when using default import ([3121d5b](https://github.com/qmhc/vite-plugin-dts/commit/3121d5bd56a6863e5175c95b00d7a3dedc0cff6d)), closes [#20](https://github.com/qmhc/vite-plugin-dts/issues/20)

### Features

- add copyDtsFiles option ([bdab8c4](https://github.com/qmhc/vite-plugin-dts/commit/bdab8c4b4efa894209c2edeffbbe4d79680eafe9)), closes [#19](https://github.com/qmhc/vite-plugin-dts/issues/19)

## [0.5.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.2...v0.5.3) (2021-07-22)

### Bug Fixes

- add allowJs option dynamically ([36f8de2](https://github.com/qmhc/vite-plugin-dts/commit/36f8de28c68cd52945faeb375cd2931c6ad0468a)), closes [#17](https://github.com/qmhc/vite-plugin-dts/issues/17)
- add js and jsx files when allowJs ([0e1e6f7](https://github.com/qmhc/vite-plugin-dts/commit/0e1e6f7c09c85e169568b2c77c66d452d04a28a2))

## [0.5.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.1...v0.5.2) (2021-07-01)

### Bug Fixes

- cannot require @vue/compiler-sfc in monorepo ([fd9b5c1](https://github.com/qmhc/vite-plugin-dts/commit/fd9b5c1c018feb87e374cdf6671b7b8be14e775b)), closes [#14](https://github.com/qmhc/vite-plugin-dts/issues/14)

## [0.5.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.5.0...v0.5.1) (2021-06-18)

### Bug Fixes

- support insert entry from '.tsx' file ([e38b7c4](https://github.com/qmhc/vite-plugin-dts/commit/e38b7c4686a8d7405583a97078e97fbef4757da6))

# [0.5.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.3...v0.5.0) (2021-06-15)

### Bug Fixes

- ignore none export files ([f9c41bc](https://github.com/qmhc/vite-plugin-dts/commit/f9c41bc4e2fd498b53aa366a5f8f2a57589b6176))
- rename insertIndexEntry to insertTypesEntry ([c9d392e](https://github.com/qmhc/vite-plugin-dts/commit/c9d392ec3def98b541bb597c5ed38933b225fe5e))

### Features

- add clearPureImport option ([0357f69](https://github.com/qmhc/vite-plugin-dts/commit/0357f69485204f24d9830a4de59558a23eb66e19))
- defaults insert entry base on pkg.types ([9c71f28](https://github.com/qmhc/vite-plugin-dts/commit/9c71f28eac50d23a42d92bd79ac6d09f1be0544d))
- optional insert index type entry ([592a701](https://github.com/qmhc/vite-plugin-dts/commit/592a701d6213f955306df9de0c7f1d3243a28faa))

## [0.4.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.2...v0.4.3) (2021-06-11)

### Bug Fixes

- back off optional chaining and nullish coalescing ([8e09129](https://github.com/qmhc/vite-plugin-dts/commit/8e09129c1600a013a2c3c50983ab7f358216757f)), closes [#2](https://github.com/qmhc/vite-plugin-dts/issues/2)
- transform fs/promise to fs-extra ([1794b0b](https://github.com/qmhc/vite-plugin-dts/commit/1794b0b93baf4212b4efc5ef06a697adf70e4933)), closes [#4](https://github.com/qmhc/vite-plugin-dts/issues/4)

### Performance Improvements

- use menory result generate bundle ([858bf31](https://github.com/qmhc/vite-plugin-dts/commit/858bf317d16c995feb73e53339d61f7602e36484))

## [0.4.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.1...v0.4.2) (2021-06-09)

### Bug Fixes

- incomplete remove pure import ([a1fd54e](https://github.com/qmhc/vite-plugin-dts/commit/a1fd54e769f1b50ee5858d33879b2a6732625797))
- mamual set include and exclude ([b6fb510](https://github.com/qmhc/vite-plugin-dts/commit/b6fb5106206df9de83276687dd1451fa3d882067))
- more accurate normalize glob ([1d65c47](https://github.com/qmhc/vite-plugin-dts/commit/1d65c47811344a6b566a8dcf22cd22d9298d5a02))
- set rootDir if not set in compilerOptions ([a1d83d2](https://github.com/qmhc/vite-plugin-dts/commit/a1d83d2aa56a32ebef11b9d98fa508a6d9fbd412)), closes [#3](https://github.com/qmhc/vite-plugin-dts/issues/3)
- transform alias include dynamic imports ([a6919b4](https://github.com/qmhc/vite-plugin-dts/commit/a6919b4760cf5cbefbdad1ac674b8a8275dc27dd))
- transform alias include dynamic imports ([3a5511e](https://github.com/qmhc/vite-plugin-dts/commit/3a5511e3e0b961d7f4ac393da623502a186a0538))

## [0.4.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.4.0...v0.4.1) (2021-06-08)

### Bug Fixes

- dynamic import regexp endings include ']' and ')' ([e5f37a6](https://github.com/qmhc/vite-plugin-dts/commit/e5f37a6d9e232e268ea1b2ec2eadb6c7bc7d7115))

# [0.4.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.5...v0.4.0) (2021-06-08)

### Bug Fixes

- bundle only once for multiple formats ([be37fbf](https://github.com/qmhc/vite-plugin-dts/commit/be37fbfcbd03dd23c73908a2d7f2d019437e003a))

### Features

- bundle all from tsconfig include ([252554a](https://github.com/qmhc/vite-plugin-dts/commit/252554af1fa403af1ee00dba16a1c7938e7374c6))

### BREAKING CHANGES

- Deprecated include and exclude options

## [0.3.5](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.4...v0.3.5) (2021-06-08)

### Bug Fixes

- includes prue type export files ([1341359](https://github.com/qmhc/vite-plugin-dts/commit/1341359b9943fd961ec0d3d40d71252e77c73390))
- incorrect path in transform alias ([d686ff9](https://github.com/qmhc/vite-plugin-dts/commit/d686ff94157c400d7f235331a47fbb9d452afeb9))

## [0.3.4](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.3...v0.3.4) (2021-06-07)

### Bug Fixes

- remove pure import ([fe241de](https://github.com/qmhc/vite-plugin-dts/commit/fe241de5b583cb5bf2dde83383a8a43e53724ce1))
- static import include relative path ([4065217](https://github.com/qmhc/vite-plugin-dts/commit/40652178b9071509269e6b66cbbbcb3562cf349d))

## [0.3.3](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.2...v0.3.3) (2021-06-07)

### Bug Fixes

- keep output relative to root not to entry dir ([e83ec64](https://github.com/qmhc/vite-plugin-dts/commit/e83ec643536f888166055a5495db3e2fd1030584))

### BREAKING CHANGES

- Ouput declaration structure no longer relative to entry dir

## [0.3.2](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.1...v0.3.2) (2021-06-07)

### Bug Fixes

- default root base on vite config ([787ebc1](https://github.com/qmhc/vite-plugin-dts/commit/787ebc175d07370628589a6fc73e325b29655a0b))

## [0.3.1](https://github.com/qmhc/vite-plugin-dts/compare/v0.3.0...v0.3.1) (2021-06-06)

### Bug Fixes

- vue file explicit type lost ([d0d8803](https://github.com/qmhc/vite-plugin-dts/commit/d0d88038fb51d71dfb71ab4d0223600801d50349))

# [0.3.0](https://github.com/qmhc/vite-plugin-dts/compare/v0.2.0...v0.3.0) (2021-06-06)

### Bug Fixes

- transform alias import to relative path ([6d5a2d5](https://github.com/qmhc/vite-plugin-dts/commit/6d5a2d5b5ba691b5572727cbf42b340d05964951))

### Features

- projectOptions refine to compilerOptions and tsConfigFilePath ([eb61113](https://github.com/qmhc/vite-plugin-dts/commit/eb611135446fff7bc82e3bd0d1d2b856a829de98))

### BREAKING CHANGES

- projectOptions no longer supported, the project init should be up to the plugin.

# [0.2.0](https://github.com/qmhc/vite-plugin-dts/compare/b2f0c0aa6eea5b48703248eca3294c5d845404ba...v0.2.0) (2021-06-05)

### Features

- add beforeWriteFile hook ([139e818](https://github.com/qmhc/vite-plugin-dts/commit/139e818cecfa80d4208b3f5ced55e7db57bf7e52))
- add outputDir option ([f289723](https://github.com/qmhc/vite-plugin-dts/commit/f289723672279795c0b96aaac3abf83dd8913b20))
- add transform dynamic import to static ([b2f0c0a](https://github.com/qmhc/vite-plugin-dts/commit/b2f0c0aa6eea5b48703248eca3294c5d845404ba))
