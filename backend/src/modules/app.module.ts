import { Module } from "@nestjs/common"
import { AppController } from "../app.controller"
import { ProjectModule } from "./project.module"
import { TechnologyModule } from "./technology.module"

@Module({
	imports: [ProjectModule, TechnologyModule],
	controllers: [AppController],
	providers: [],
})
export class AppModule {}
