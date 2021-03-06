type Link = StructureLink;

/**
 * Remotely transfers energy to another Link in the same room.
 */
declare class StructureLink extends OwnedStructure {

  /**
   * The amount of game ticks the link has to wait until the next transfer is possible.
   */
  public readonly cooldown: number;

  /**
   * The amount of energy containing in the link.
   */
  public readonly energy: number;

  /**
   * The total amount of energy the link can contain.
   */
  public readonly energyCapacity: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<Link>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<Link>;

  /**
   * CPU cost: CONST
   *
   * Remotely transfer energy to another link at any location in the same room.
   *
   * @param target The target object.
   * @param amount The amount of energy to be transferred. If omitted, all the available energy is used.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_FULL, ERR_INVALID_ARGS, ERR_TIRED,
   *     ERR_RCL_NOT_ENOUGH
   */
  public transferEnergy(target: Link, amount?: number): ResponseCode;

}
