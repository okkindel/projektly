module.exports = {
  name: 'projektly',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/projektly',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
