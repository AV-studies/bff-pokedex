export interface UseCase<DTO, Return> {
    execute(dto: DTO): Return
}