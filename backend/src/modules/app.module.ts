import { Module } from "@nestjs/common"
import { AppController } from "../app.controller"
import { DbModule } from "./db.module"
import { ProjectModule } from "./project.module"
import { TechnologyModule } from "./technology.module"

@Module({
	imports: [DbModule, ProjectModule, TechnologyModule],
	controllers: [AppController],
	providers: [],
})
export class AppModule {}
