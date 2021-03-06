// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var MyGame = MyGame || {};

/**
 * @const
 * @namespace
 */
MyGame.Sample = MyGame.Sample || {};

/**
 * @enum
 */
MyGame.Sample.Color = {
  Red: 0,
  Green: 1,
  Blue: 2
};

/**
 * @enum
 */
MyGame.Sample.Equipment = {
  NONE: 0,
  Weapon: 1
};

/**
 * @constructor
 */
MyGame.Sample.Vec3 = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {MyGame.Sample.Vec3}
 */
MyGame.Sample.Vec3.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @returns {number}
 */
MyGame.Sample.Vec3.prototype.x = function() {
  return this.bb.readFloat32(this.bb_pos);
};

/**
 * @returns {number}
 */
MyGame.Sample.Vec3.prototype.y = function() {
  return this.bb.readFloat32(this.bb_pos + 4);
};

/**
 * @returns {number}
 */
MyGame.Sample.Vec3.prototype.z = function() {
  return this.bb.readFloat32(this.bb_pos + 8);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {flatbuffers.Offset}
 */
MyGame.Sample.Vec3.createVec3 = function(builder, x, y, z) {
  builder.prep(4, 12);
  builder.writeFloat32(z);
  builder.writeFloat32(y);
  builder.writeFloat32(x);
  return builder.offset();
};

/**
 * @constructor
 */
MyGame.Sample.Monster = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {MyGame.Sample.Monster}
 */
MyGame.Sample.Monster.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {MyGame.Sample.Monster=} obj
 * @returns {MyGame.Sample.Monster}
 */
MyGame.Sample.Monster.getRootAsMonster = function(bb, obj) {
  return (obj || new MyGame.Sample.Monster).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {MyGame.Sample.Vec3=} obj
 * @returns {MyGame.Sample.Vec3|null}
 */
MyGame.Sample.Monster.prototype.pos = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new MyGame.Sample.Vec3).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @returns {number}
 */
MyGame.Sample.Monster.prototype.mana = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readInt16(this.bb_pos + offset) : 150;
};

/**
 * @returns {number}
 */
MyGame.Sample.Monster.prototype.hp = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readInt16(this.bb_pos + offset) : 100;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
MyGame.Sample.Monster.prototype.name = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
MyGame.Sample.Monster.prototype.inventory = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
MyGame.Sample.Monster.prototype.inventoryLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
MyGame.Sample.Monster.prototype.inventoryArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @returns {MyGame.Sample.Color}
 */
MyGame.Sample.Monster.prototype.color = function() {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? /** @type {MyGame.Sample.Color} */ (this.bb.readInt8(this.bb_pos + offset)) : MyGame.Sample.Color.Blue;
};

/**
 * @param {number} index
 * @param {MyGame.Sample.Weapon=} obj
 * @returns {MyGame.Sample.Weapon}
 */
MyGame.Sample.Monster.prototype.weapons = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 18);
  return offset ? (obj || new MyGame.Sample.Weapon).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
MyGame.Sample.Monster.prototype.weaponsLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 18);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {MyGame.Sample.Equipment}
 */
MyGame.Sample.Monster.prototype.equippedType = function() {
  var offset = this.bb.__offset(this.bb_pos, 20);
  return offset ? /** @type {MyGame.Sample.Equipment} */ (this.bb.readUint8(this.bb_pos + offset)) : MyGame.Sample.Equipment.NONE;
};

/**
 * @param {flatbuffers.Table} obj
 * @returns {?flatbuffers.Table}
 */
MyGame.Sample.Monster.prototype.equipped = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 22);
  return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
};

/**
 * @param {number} index
 * @param {MyGame.Sample.Vec3=} obj
 * @returns {MyGame.Sample.Vec3}
 */
MyGame.Sample.Monster.prototype.path = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 24);
  return offset ? (obj || new MyGame.Sample.Vec3).__init(this.bb.__vector(this.bb_pos + offset) + index * 12, this.bb) : null;
};

/**
 * @returns {number}
 */
MyGame.Sample.Monster.prototype.pathLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 24);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
MyGame.Sample.Monster.startMonster = function(builder) {
  builder.startObject(11);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} posOffset
 */
MyGame.Sample.Monster.addPos = function(builder, posOffset) {
  builder.addFieldStruct(0, posOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} mana
 */
MyGame.Sample.Monster.addMana = function(builder, mana) {
  builder.addFieldInt16(1, mana, 150);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} hp
 */
MyGame.Sample.Monster.addHp = function(builder, hp) {
  builder.addFieldInt16(2, hp, 100);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} nameOffset
 */
MyGame.Sample.Monster.addName = function(builder, nameOffset) {
  builder.addFieldOffset(3, nameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} inventoryOffset
 */
MyGame.Sample.Monster.addInventory = function(builder, inventoryOffset) {
  builder.addFieldOffset(5, inventoryOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
MyGame.Sample.Monster.createInventoryVector = function(builder, data) {
  builder.startVector(1, data.length, 1);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
MyGame.Sample.Monster.startInventoryVector = function(builder, numElems) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {MyGame.Sample.Color} color
 */
MyGame.Sample.Monster.addColor = function(builder, color) {
  builder.addFieldInt8(6, color, MyGame.Sample.Color.Blue);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} weaponsOffset
 */
MyGame.Sample.Monster.addWeapons = function(builder, weaponsOffset) {
  builder.addFieldOffset(7, weaponsOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
MyGame.Sample.Monster.createWeaponsVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
MyGame.Sample.Monster.startWeaponsVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {MyGame.Sample.Equipment} equippedType
 */
MyGame.Sample.Monster.addEquippedType = function(builder, equippedType) {
  builder.addFieldInt8(8, equippedType, MyGame.Sample.Equipment.NONE);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} equippedOffset
 */
MyGame.Sample.Monster.addEquipped = function(builder, equippedOffset) {
  builder.addFieldOffset(9, equippedOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} pathOffset
 */
MyGame.Sample.Monster.addPath = function(builder, pathOffset) {
  builder.addFieldOffset(10, pathOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
MyGame.Sample.Monster.startPathVector = function(builder, numElems) {
  builder.startVector(12, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
MyGame.Sample.Monster.endMonster = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
MyGame.Sample.Monster.finishMonsterBuffer = function(builder, offset) {
  builder.finish(offset);
};

/**
 * @constructor
 */
MyGame.Sample.Weapon = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {MyGame.Sample.Weapon}
 */
MyGame.Sample.Weapon.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {MyGame.Sample.Weapon=} obj
 * @returns {MyGame.Sample.Weapon}
 */
MyGame.Sample.Weapon.getRootAsWeapon = function(bb, obj) {
  return (obj || new MyGame.Sample.Weapon).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
MyGame.Sample.Weapon.prototype.name = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {number}
 */
MyGame.Sample.Weapon.prototype.damage = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readInt16(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
MyGame.Sample.Weapon.startWeapon = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} nameOffset
 */
MyGame.Sample.Weapon.addName = function(builder, nameOffset) {
  builder.addFieldOffset(0, nameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} damage
 */
MyGame.Sample.Weapon.addDamage = function(builder, damage) {
  builder.addFieldInt16(1, damage, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
MyGame.Sample.Weapon.endWeapon = function(builder) {
  var offset = builder.endObject();
  return offset;
};

// Exports for Node.js and RequireJS
this.MyGame = MyGame;
