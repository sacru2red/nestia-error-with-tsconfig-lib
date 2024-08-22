import typia from 'typia';

type LimittedMaximumFileSizeArray<Value extends number> = typia.tags.TagBase<{
  kind: 'maximumFileSize';
  target: 'array';
  value: Value;
  validate: `(() => {
    for (let i = 0; i < $input.length; i++) {
      if ($input[i] instanceof File) {
        if ($input[i].size > ${Value}) {
          return false
        }
      }
    }
    return true
  })()`;
}>;

type FailExample = LimittedMaximumFileSizeArray<10485760>;

export interface PingRequestDto {
  files: File[] & FailExample;
}
