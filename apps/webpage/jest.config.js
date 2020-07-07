module.exports = {
  name: 'webpage',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/webpage',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
