from pathlab import Path
import sys
for path in Path('src').rglob('*.ts'):
    if path.name == 'config.ts':
        print("1")
        sys.exit(0)
print('0')
sys.exit(0)