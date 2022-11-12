import { DataSource, Repository, EntityTarget } from "typeorm"
import { DbNotInitialisedError } from '@verbose-happiness/util-errors'
import IEntity from "../entities/IEntity"

export default class BaseRepository<TEntity extends IEntity> { 
  private readonly _repository: Repository<TEntity>;

  constructor(dataSource: DataSource, entity: EntityTarget<TEntity>) {
    if (!dataSource.isInitialized) { 
      throw new DbNotInitialisedError();
    }
    this._repository = dataSource.getRepository(entity);
  }

  public async findAll(): Promise<Array<TEntity>> { 
    return this._repository.find();
  }

  public async delete(id: string) { 
    return this._repository.delete(id);
  }

  public async save(entity: TEntity) { 
    return this._repository.save(entity);
  }

  public async saveAll(entities: Array<TEntity>) { 
    return this._repository.save(entities);
  }
} 
 