import { Module } from "@nestjs/common"

@Module({
	exports: [DbModule],
})
export class DbModule {}
