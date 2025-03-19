import { Injectable } from "@nestjs/common"
import { UniqueEntityUUID } from "@core"

@Injectable()
export class AppService {
	getHello(): string {
		return "Hello World!" + UniqueEntityUUID.gerar()
	}
}
